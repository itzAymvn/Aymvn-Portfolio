import { GitHubRepository } from "@/types"
import ProjectsList from "./Projectslist"

const getProjects = async () => {
	try {
		const res = await fetch("https://api.github.com/users/itzaymvn/repos", {
			next: {
				revalidate: 60, // 1 minute
			},
		})
		const data = await res.json()

		const GitHubRepository: GitHubRepository[] = data.filter(
			(project: GitHubRepository) => {
				return project?.name !== "itzAymvn"
			}
		)

		const fetchImage = async (project: GitHubRepository) => {
			try {
				const imageRes = await fetch(
					`https://raw.githubusercontent.com/itzaymvn/${project?.name}/${project?.default_branch}/public/images/og.png`,
					{
						method: "HEAD",
					}
				)

				return imageRes.ok &&
					imageRes.headers.get("Content-Type")?.includes("image")
					? `https://raw.githubusercontent.com/itzaymvn/${project?.name}/${project?.default_branch}/public/images/og.png`
					: "/images/no_image.webp"
			} catch (error) {
				return "/images/no_image.webp"
			}
		}

		const projects = await Promise.all(
			GitHubRepository.map(async (project) => {
				const imageUrl = await fetchImage(project)

				return {
					id: project.id,
					title: project?.name,
					description: project?.description,
					imgUrl: imageUrl,
					gitUrl: project?.html_url,
					previewUrl: project?.homepage,
					language: project?.language,
					forked: project?.fork,
				}
			})
		)

		return { projects }
	} catch (error) {
		return {
			error: "Could not fetch projects, try again later. If the issue persists, please contact me from the form below!",
		}
	}
}

const ProjectsSection = async () => {
	const { projects, error } = await getProjects()

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>

			{error && (
				<p className="text-white text-center text-sm mb-4 bg-red-500 p-2.5 rounded-lg">
					{error}
				</p>
			)}

			<ProjectsList projects={projects!} />
		</section>
	)
}

export default ProjectsSection
export const dynamic = "force-dynamic"
