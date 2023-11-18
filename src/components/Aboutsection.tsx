import Image from "next/image"
import AboutTabs from "./Abouttabs"

const AboutSection = (): JSX.Element => {
	return (
		<section className="text-black dark:text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					priority
					src="/images/about-image.png"
					width={500}
					height={500}
					alt="about image"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-black dark:text-white mb-4">
						About Me
					</h2>
					<p className="text-base lg:text-lg">
						Welcome! I&apos;m Ayman, fullstack web developer from
						Morocco. I specialize in crafting dynamic and
						user-friendly web applications. Explore my projects and
						skills, featuring JavaScript, React, Node.js, and more.
						I&apos;m a quick learner and team player, passionate
						about creating amazing applications. Contact me to bring
						your ideas to life!
					</p>
					<AboutTabs />
				</div>
			</div>
		</section>
	)
}

export default AboutSection
