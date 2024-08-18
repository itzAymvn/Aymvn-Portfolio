import { getProjects } from "@/actions/project"
import ProjectsList from "./Projectslist"

const ProjectsSection = async () => {
	const projects = await getProjects()

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>

			{!projects ? (
				<div className="flex flex-wrap justify-center items-center gap-4">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={i}
							className="w-80 h-80 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg"
						></div>
					))}
				</div>
			) : (
				<ProjectsList projects={projects!} />
			)}
		</section>
	)
}

export default ProjectsSection
