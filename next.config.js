/** @type {import('next').NextConfig} */

const ON_GITHUB_PAGES = process.env.NODE_ENV === "production";

const repoName = "pig-on-trip";

const basePath = ON_GITHUB_PAGES ? `/${repoName}` : "";
const assetPrefix = ON_GITHUB_PAGES ? `/${repoName}/` : "";

const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath,
  assetPrefix,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
