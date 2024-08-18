"use server"

import { sanityClient } from "@/lib/sanity"
import { Project } from "@/types"

export async function getProjects(): Promise<Project[] | null> {
	try {
		const projects = await sanityClient.fetch<Project[]>(
			`*[_type == "project"]{
                slug,
                title,
                description,
                image,
                tags,
                github,
                link
            }`
		)
		return projects || null
	} catch (error) {
		console.error(error)
		return null
	}
}
