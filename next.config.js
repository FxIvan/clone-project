/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configura Next.js para que pueda servir archivos estáticos desde su carpeta public
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
  /*
  server: {
    // Configura Next.js para escuchar en todas las interfaces de red
    host: "0.0.0.0",
  },
  */
};

module.exports = nextConfig;
