/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["import"],
  },
};

export default nextConfig;
