import ButtonSkeleton from "./Buttonskeleton"

const ProjectsSkeleton = (): JSX.Element => (
	<section id="projects" className="mt-24">
		<h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
			My Projects
		</h2>
		<div className="grid md:grid-cols-3 gap-8 md:gap-12">
			{[1, 2, 3].map((index) => (
				<div key={index} className="animate-pulse">
					<div className="h-52 md:h-72 rounded-t-xl dark:bg-gray-800 bg-gray-100" />
					<div className="dark:text-white rounded-b-xl mt-3 dark:bg-gray-800 py-6 px-4 bg-gray-100 text-black" />
				</div>
			))}
		</div>
		<ButtonSkeleton />
	</section>
)

export default ProjectsSkeleton
