// ✅ 1. next-pwa paketini dahil et
const withPWA = require("next-pwa")({
  dest: "public", // service worker dosyası buraya oluşturulacak
  disable: process.env.NODE_ENV === "development", // dev modda devre dışı
});


// ✅ 2. Mevcut config'ini PWA ile sarmalıyoruz
module.exports = withPWA({
  images: {
    domains: ["q-taxis.com", "widget.reviews.co.uk"],
  },

  // assetPrefix: "https://www.london-heathrow.taxi",

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    });
    return config;
  },

  env: {
    mapApiKey: "AIzaSyDulwIwncfuxBve8MKXPIIPmPLRve6ySw8",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "UA-99673497-1",
  },

  reactStrictMode: true,
});
