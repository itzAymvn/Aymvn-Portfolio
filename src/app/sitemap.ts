import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "/",
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "/norage",
			lastModified: new Date().toISOString(),
			changeFrequency: "never",
			priority: 0.1,
		},
	]
}
