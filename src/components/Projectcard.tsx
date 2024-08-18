import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Project } from "@/types"
import { urlFor } from "@/lib/sanity"

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
	return (
		<div id={project.slug} className="rounded-xl overflow-hidden">
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${urlFor(project.image).url()})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
					<Link
						href={project.github}
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
					</Link>
					{project.link && (
						<Link
							href={project.link}
							className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
						>
							<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
						</Link>
					)}
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-0">
				<div className="text-xl font-semibold mb-2">
					<p className="text-2xl font-bold text-black dark:text-white">
						{project.title.replace(/-/g, " ")}
					</p>
				</div>
				<p
					title={project.description}
					className="dark:text-gray-300 text-gray-700"
				>
					{project.description?.substring(0, 100)}...{" "}
				</p>
			</div>
		</div>
	)
}

export default ProjectCard
