const nextConfig = {
  async headers() {
    return [
      {
        source: '/m/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain;charset=UTF-8',
          },
        ],
      },
    ];
  },
};

export default nextConfig;