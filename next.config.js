/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/itzaymvn/**/*",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/norage",
				destination: "https://xayman.net/norage",
				permanent: true,
			},
			{
				source: "/contact",
				destination: "/#contact",
				permanent: true,
			},
			{
				source: "/sanity",
				destination: "https://aymvn.sanity.studio",
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
