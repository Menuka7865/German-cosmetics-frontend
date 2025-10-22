/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // When using `output: 'export'` static export, Next's Image Optimization API
    // is not available. Mark images as unoptimized so the app can export and run
    // without the Image Optimization server.
    unoptimized: true,
  },
}

module.exports = nextConfig
