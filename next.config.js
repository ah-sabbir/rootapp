/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
    loader: 'imgix',
    path: 'https://i.pravatar.cc',
  },
}

