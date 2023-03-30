/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_ENTRYPOINT ? process.env.NEXT_PUBLIC_ENTRYPOINT : undefined,
}

module.exports = nextConfig
