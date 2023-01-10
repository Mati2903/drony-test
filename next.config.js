/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["www.apple.com"],
	},
	currentFeatures: true,
};

module.exports = nextConfig;
