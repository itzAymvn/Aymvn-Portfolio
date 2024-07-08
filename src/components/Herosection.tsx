import Image from "next/image"
import Link from "next/link"
import { Typer } from "./ui/Typer"

const HeroSection = (): JSX.Element => {
	return (
		<section className="lg:py-20">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="dark:text-white text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
							Hello, I&apos;m{" "}
						</span>
						<br />
						<Typer
							cursor={false}
							preRenderFirstString={true}
							sequence={[
								"A Web Dev",
								1000,
								"A Self-Taught",
								1000,
								"A JS Lover",
								1000,
							]}
							wrapper="span"
							repeat={Infinity}
						/>
					</h1>{" "}
					<p className="text-gray-800 dark:text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
						Hi, I&apos;m Ayman Badouzi, a 22-year-old Full-Stack Web
						Developer from Morocco. Let&apos;s build amazing web
						experiences together!
					</p>
					<div>
						<Link
							href="/#contact"
							className="px-6 inline-block py-3 w-full font-bold uppercase sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-purple-700 hover:bg-purple-600 text-white dark:text-gray-900 dark:hover:text-white"
						>
							Hire Me
						</Link>
						<Link
							href="https://github.com/itzaymvn"
							className="px-6 inline-block py-3 mt-4 text-black dark:text-white w-full sm:w-fit rounded-full mr-4 border-2 border-black dark:border-white hover:bg-white hover:text-black transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							Visit My Github
						</Link>
					</div>
				</div>
				<div className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-gray-200 dark:bg-black relative">
						<Image
							priority
							src="/images/hero-image.png"
							alt="hero image"
							width={300}
							height={300}
							style={{ width: "auto" }}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
