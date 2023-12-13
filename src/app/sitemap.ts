import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://aymvn.tech/",
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://aymvn.tech/norage",
			lastModified: new Date().toISOString(),
			changeFrequency: "never",
			priority: 0.1,
		},
	]
}
