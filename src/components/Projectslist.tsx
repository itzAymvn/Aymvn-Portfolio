"use client"

import { Project } from "@/types"
import { motion, useInView } from "framer-motion"
import { EyeIcon } from "@heroicons/react/24/solid"
import { useState, useRef } from "react"
import ProjectCard from "./Projectcard"

const ProjectsList = ({ projects }: { projects: Project[] }) => {
	const [showAll, setShowAll] = useState<boolean>(false)
	const [projectsList] = useState<Project[]>(projects)
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false })

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	}

	return (
		<>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{!showAll
					? projectsList.slice(0, 3).map((project, index) => (
							<motion.li
								key={index}
								variants={cardVariants}
								initial="initial"
								animate={isInView ? "animate" : "initial"}
								transition={{
									duration: 0.1,
									delay: index * 0.2,
								}}
							>
								<ProjectCard project={project} />
							</motion.li>
					  ))
					: projectsList.map((project, index) => (
							<motion.li
								key={index}
								variants={cardVariants}
								initial="initial"
								animate={isInView ? "animate" : "initial"}
								transition={{
									duration: 0.1,
									delay: index * 0.2,
								}}
							>
								<ProjectCard project={project} />
							</motion.li>
					  ))}
			</ul>
			<button
				className="block mx-auto mt-8 mb-16 px-4 py-2 dark:text-white border-2 dark:border-white rounded-md dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-black hover:bg-black hover:text-white border-black"
				onClick={() => setShowAll(!showAll)}
			>
				{showAll ? (
					<span className="flex items-center">
						<EyeIcon className="h-6 w-6 mr-2" />
						Show Less
					</span>
				) : (
					<span className="flex items-center">
						<EyeIcon className="h-6 w-6 mr-2" />
						Show All
					</span>
				)}
			</button>
		</>
	)
}

export default ProjectsList
