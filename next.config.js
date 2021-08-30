const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
  images: {
    loader: 'imgix',
    path: 'https://i.pravatar.cc/152',
  },
});

module.exports = {
  reactStrictMode: true,
}


