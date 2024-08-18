"use client"

import { Project } from "@/types"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ProjectCard from "./Projectcard"

const ProjectsList = ({ projects }: { projects: Project[] }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false })

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	}

	return (
		<>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{projects.map((project, index) => (
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
		</>
	)
}

export default ProjectsList
