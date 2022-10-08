module.exports = {
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
      "api.microlink.io", // Microlink Image Preview
      "www.codewithharry.com",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
};
