import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://aymvn.netlify.app/",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://aymvn.netlify.app/norage",
			lastModified: new Date().toISOString(),
			changeFrequency: "never",
			priority: 0.1,
		},
	]
}
