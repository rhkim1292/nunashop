/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "an167ecrrwd0eanf.public.blob.vercel-storage.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
