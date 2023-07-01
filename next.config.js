/** @type {import('next').NextConfig} */

const ON_GITHUB_PAGES = process.env.NODE_ENV === "production";

const repoName = "pigONtrip";

const basePath = ON_GITHUB_PAGES ? `/${repoName}` : undefined;
const assetPrefix = ON_GITHUB_PAGES ? `/${repoName}/` : undefined;

const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  images: {
    loader: "akamai",
    path: "",
  },
  output: "export",

  basePath,

  assetPrefix,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
