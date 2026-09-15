/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'github.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects/frontendapplications',
        destination: 'https://frontend-applications-eight.vercel.app/',
        permanent: false,
      },
      {
        source: '/projects/hcd',
        destination: 'https://github.com/bommezijn/human-centered-design-2021',
        permanent: false,
      },
      {
        source: '/projects/brot',
        destination: 'https://github.com/bommezijn/browser-technologies-2122',
        permanent: false,
      },
      {
        source: '/projects/bloom',
        destination: 'https://github.com/bommezijn/bloom-copy',
        permanent: false,
      },
      {
        source: '/projects/knmi',
        destination: 'https://github.com/bommezijn/knmi',
        permanent: false,
      },
    ];
  },
};
