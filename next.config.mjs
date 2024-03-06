const nextConfig = {
  async headers() {
    return [
      {
        // Set MIME type for module path
        source: '/m/framer/button.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/javascript',
          },
        ],
      },
      // Add more configurations for other paths here
    ];
  },
  async rewrites() {
    return [
      {
        source: '/m/:path*',
        destination: '/m/:path*',
        has: [
          {
            type: 'host',
            value: '(?!remarf.com).+',
          },
        ],
      },
    ];
  },
};

export default nextConfig;