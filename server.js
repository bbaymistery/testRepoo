const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const compression = require('compression');

// Import your custom URL redirect map
const { urls } = require('./src/resources/urls');

// Set development or production mode
const dev = true; // process.env.NODE_ENV !== "production";
const app = next({ dev }); // Custom build directory
const handle = app.getRequestHandler(); // Default request handler

// Exclude specific paths (e.g., blog and news pages) from redirects
const isExcluded = (path) => {
  const lower = path.toLowerCase();
  return !lower.includes("/news") && !lower.includes("/blog");
};

// Normalize path for comparison: lowercase + remove trailing slash
const normalizePath = (p) => p.replace(/\/+$/, '').toLowerCase();

// Build the redirect rules from the given urls object
const buildRedirectMap = () => {
  const redirects = [];

  // Push .asp redirects from the urls object
  for (const [source, destination] of Object.entries(urls)) {
    if (isExcluded(source)) {
      redirects.push({ source, destination, permanent: true });
    }
  }

  // Also push .html equivalent redirects (e.g., page.asp → page.html)
  for (const [source, destination] of Object.entries(urls)) {
    if (isExcluded(source) && source.includes(".asp")) {
      const htmlSource = source.replace(".asp", ".html");
      redirects.push({ source: htmlSource, destination, permanent: true });
    }
  }

  return redirects;
};

// Generate the full list of redirect mappings
const redirects = buildRedirectMap();

// Start the custom server
app.prepare().then(() => {
  createServer((req, res) => {
    compression()(req, res, () => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Normalize the request path for case-insensitive + trailing slash-safe matching
      const normalizedPath = normalizePath(pathname);

      // Try to find a matching redirect rule
      const matchedRedirect = redirects.find(r =>
        normalizePath(r.source) === normalizedPath
      );

      // If a match is found → send 301 redirect
      if (matchedRedirect) {
        res.writeHead(301, { Location: matchedRedirect.destination });
        res.end();
        return;
      }

      // Special redirect rule: lowercase /news → /News (capitalized)
      if (pathname.includes("/news/")) {
        res.writeHead(301, { Location: pathname.replace("/news/", "/News/") });
        res.end();
        return;
      }


      if (pathname === "/a") {
        app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        app.render(req, res, "/b", query);
      } else {
        handle(req, res, parsedUrl);
      }
    })
  }).listen(2000, (err) => {
    if (err) throw err;
  });
});
