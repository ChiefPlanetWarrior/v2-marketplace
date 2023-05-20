const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;




/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
};

module.exports = nextConfig; */
