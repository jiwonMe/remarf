const nextConfig = {
  async headers() {
    return [
      {
        // 모듈 경로에 대한 MIME 타입 설정
        source: '/m/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
      // 다른 경로에 대한 설정이 필요하다면 여기에 추가
    ];
  },
};

export default nextConfig;