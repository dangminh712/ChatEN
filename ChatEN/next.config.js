/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://cdnmd.global-cache.online/:path*',
        },
      ]
    },
    reactStrictMode: true,
    env: {
      OPENAI_API_KEY : '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',
      URL_APP : 'https://localhost:44335/api/',
      DIC_API_KEY : 'WBBcwnwQpV89',
    },
};
