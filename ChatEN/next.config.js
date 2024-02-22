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
