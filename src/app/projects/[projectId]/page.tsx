import { GitHubRepository } from "@/types"
import Image from "next/image"
import { notFound } from "next/navigation"
import { GithubIcon, HomeIcon } from "lucide-react"
import type { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"

type Props = {
	params: { projectId: string }
}

const getProject = async (projectId: string) => {
	try {
		const res = await fetch(
			`https://api.github.com/repos/itzAymvn/${projectId}`
		)

		const project: GitHubRepository = await res.json()

		if (project?.message) {
			return { error: project.message }
		}

		// Let's set up the image url
		const imageRes = await fetch(
			`https://raw.githubusercontent.com/itzaymvn/${project?.name}/${project?.default_branch}/public/images/og.png`,
			{
				method: "HEAD", // Use HEAD method to check only headers, not the whole image
			}
		)

		const image =
			imageRes.ok &&
			imageRes.headers.get("Content-Type")?.includes("image")
				? `https://raw.githubusercontent.com/itzaymvn/${project?.name}/${project?.default_branch}/public/images/og.png`
				: "/images/no_image.webp"

		project.imgUrl = image

		return { project }
	} catch (error: any) {
		return { error }
	}
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { project, error } = await getProject(params.projectId)

	if (error || !project) {
		return {
			title: "Project Not Found",
			description: "Project Not Found",
			keywords: ["Project Not Found"],
			openGraph: {
				title: "Project Not Found",
				description: "Project Not Found",
				url: "https://aymvn.tech/projects",
				images: [
					{
						url: "https://aymvn.tech/images/og.png",
						width: 1280,
						height: 720,
						alt: "Project Not Found",
					},
				],
			},
		}
	} else {
		return {
			title: project.name,
			description: project?.description || "",
			keywords: [
				project.name,
				project.language,
				project.description,
				project.fork ? "Forked" : "Not Forked",
				project.created_at,
				project.updated_at,
				project.html_url,
				project.git_url,
				project.svn_url,
				project.homepage,
				project.language,
				project.default_branch,
			],
			openGraph: {
				title: project.name,
				description: project?.description || "",
				url: project.html_url,
				images: [
					{
						url: project.imgUrl!,
						width: 1280,
						height: 720,
						alt: project.name,
					},
				],
			},
		}
	}
}

const page = async ({ params }: Props): Promise<JSX.Element> => {
	const { project, error } = await getProject(params.projectId)

	if (error || !project) {
		return notFound()
	} else {
		return (
			<div className="flex min-h-screen flex-col dark:bg-[#121212] bg-gray-200 mt-12">
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold mt-8">{project.name}</h1>

					<div className="flex flex-wrap gap-2 my-4">
						{project.language && (
							<span className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm font-medium">
								{project.language}
							</span>
						)}

						{project.fork && (
							<span className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm font-medium ml-2">
								Forked
							</span>
						)}
					</div>

					<Image
						src={project.imgUrl!}
						alt={project.name}
						width={1280}
						height={720}
						className="border border-gray-300 dark:border-gray-700 rounded-md shadow-md"
					/>

					<p className="text-lg my-4">{project.description}</p>

					<div className="mt-4 border-t border-gray-300 dark:border-gray-700 pt-4">
						<h2 className="text-xl font-semibold mb-2">
							Repository Details
						</h2>
						<p>
							<strong>Created at:</strong>{" "}
							{new Date(project.created_at).toDateString()}
						</p>
						<p>
							<strong>Updated at:</strong>{" "}
							{new Date(project.updated_at).toDateString()}
						</p>
					</div>

					<div className="flex flex-wrap gap-2 my-4">
						<Link
							href={project.html_url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View on GitHub"
							className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center w-max"
						>
							<GithubIcon className="h-6 w-6 inline-block mr-2" />
							<span className="hidden md:inline-block">
								View on GitHub
							</span>
						</Link>

						<Link
							href={"/"}
							aria-label="Back to Home"
							rel="noopener noreferrer"
							className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center w-max"
							passHref
						>
							<HomeIcon className="h-6 w-6 inline-block mr-2" />
							<span className="hidden md:inline-block">
								Back to Home
							</span>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default page
export const revalidate = 60
