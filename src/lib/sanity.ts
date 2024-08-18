import { createClient } from "next-sanity"
import ImageUrlBuilder from "@sanity/image-url"

const config = {
	projectId: "p68k2bhc",
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: false,
}

export const sanityClient = createClient(config)
export const urlFor = (source: any) =>
	ImageUrlBuilder(sanityClient).image(source)
