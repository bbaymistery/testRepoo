const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false //process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    // // Log the original pathname
    // console.log('Original Pathname:', parsedUrl.pathname);
    //     // Convert the pathname to lowercase
    //     parsedUrl.pathname = parsedUrl.pathname.toLowerCase();
    //     parsedUrl.path = parsedUrl.path.toLowerCase();
    //  console.log('Converted Pathname:', parsedUrl.pathname);
    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(process.env.PORT || 3500, (err) => {
    if (err) throw err;
  });
});
