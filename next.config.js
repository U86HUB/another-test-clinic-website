
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' }
    }
  }
}