/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/projects/frontend-data',
        destination: 'https://bommezijn.github.io/frontend-data/',
        permanent: false,
      },
      {
        source: '/projects/hcd',
        destination: 'https://github.com/bommezijn/human-centered-design-2021',
        permanent: false,
      },
      {
        source: '/projects/bloom',
        destination: 'https://bloom-blush.vercel.app/',
        permanent: false,
      },
      {
        source: '/projects/kmni',
        destination: 'https://knmi-sjagoori.vercel.app/',
        permanent: false,
      },
    ];
  },
};
