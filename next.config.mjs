/** @type {import('next').NextConfig} */

/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/62nd";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  basePath: isProd ? SUB_DIRECTORY : "",
  reactStrictMode: true,
  output: "export",
  distDir: "apache" + SUB_DIRECTORY, // ビルド先のディレクトリ
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
};

export default nextConfig;
