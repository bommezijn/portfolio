/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'raw.githubusercontent.com',
      'github.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects/frontendapplications',
        destination: 'https://bommezijn.github.io/frontend-applications/',
        permanent: false,
      },
      {
        source: '/projects/hcd',
        destination: 'https://github.com/bommezijn/human-centered-design-2021',
        permanent: false,
      },
      {
        source: '/projects/midtermacc',
        destination: 'https://github.com/KaivWezel/cmda-mid-term',
        permanent: false,
      },
      {
        source: '/projects/brot',
        destination: 'https://github.com/bommezijn/browser-technologies-2122',
        permanent: false,
      },
      {
        source: '/projects/bloom',
        destination: 'https://github.com/sjagoori/bloom',
        permanent: false,
      },
      {
        source: '/projects/kmni',
        destination: 'https://github.com/sjagoori/KNMI',
        permanent: false,
      },
    ];
  },
};
