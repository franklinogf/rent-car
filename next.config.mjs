/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'http',
                hostname: 'localhost:3000',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'rent-car-staging.up.railway.app',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'rent-car-production-c392.up.railway.app',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
