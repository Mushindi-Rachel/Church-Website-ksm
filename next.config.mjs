/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: false, 
    },

    images: {
        unoptimized: true,
    },

    // optional but safe
    reactStrictMode: true,
};

export default nextConfig;