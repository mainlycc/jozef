module.exports = {
  images: {
    domains: ['przykład.com', 'inna-domena.pl'],
    // Lub użyj remotePatterns dla większej kontroli
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'przykład.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
} 