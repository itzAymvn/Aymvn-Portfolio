import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from "next/image"
import Emailform from "./Emailform"
import { Typer } from "./ui/Typer"

const EmailSection = (): JSX.Element => {
	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-primary-900 dark:to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/4 -left-4 transform -translate-x-1/2 -translate-1/2 bg-gradient-to-br from-purple-500/50 to-purple-700/40 hidden md:block"></div>
			<div>
				<p className="text-xl font-bold dark:text-white text-black mb-4">
					<Typer
						cursor={false}
						preRenderFirstString={true}
						sequence={[
							"Let's Connect",
							1000,
							"Let's Work Together",
							1000,
							"Let's Build Something",
							1000,
						]}
						wrapper="span"
						repeat={Infinity}
					/>
				</p>
				<p className="dark:text-[#ADB7BE] mb-4 max-w-md text-gray-700">
					{" "}
					I&apos;m currently looking for new opportunities, my inbox
					is always open. Whether you have a question or just want to
					say hi, I&apos;ll try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/itzaymvn">
						<Image
							src={GithubIcon}
							alt="Github Icon"
							className="invert dark:invert-0"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/ayman-badouzi-334133262/">
						<Image
							src={LinkedinIcon}
							alt="Linkedin Icon"
							className="invert dark:invert-0"
						/>
					</Link>
				</div>
			</div>

			<Emailform />
		</section>
	)
}

export default EmailSection
