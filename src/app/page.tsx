import NavBar from "@/components/Navbar"
import HeroSection from "@/components/Herosection"
import AboutSection from "@/components/Aboutsection"
import ProjectsSection from "@/components/Projectssection"
import EmailSection from "@/components/Emailsection"
import Footer from "@/components/Footer"
import { Suspense } from "react"
import ProjectsSkeleton from "@/components/skeletons/Projectsskeleton"

export default async function Home(): Promise<JSX.Element> {
	return (
		<main className="flex min-h-screen flex-col dark:bg-[#121212] bg-gray-200">
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutSection />
				<Suspense fallback={<ProjectsSkeleton />}>
					<ProjectsSection />
				</Suspense>
				<EmailSection />
			</div>
			<Footer />
		</main>
	)
}

export const revalidate = 30
