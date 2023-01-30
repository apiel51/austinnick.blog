/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/spotify',
        destination:
          'https://open.spotify.com/playlist/4gg46IwqAX0UlwcaS0dzJf?si=4db47841c1a34590',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
