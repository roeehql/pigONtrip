const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

const repoName = "pigONtrip";

const basePath = isProduction ? `/${repoName}` : "";
const assetPrefix = isProduction ? `/${repoName}/` : "";

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
