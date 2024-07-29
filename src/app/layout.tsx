import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import NavBar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: {
		template: "%s | Aymvn - Web Developer",
		default: "Aymvn - Web Developer",
	},
	description:
		"Explore Aymvn's portfolio website. Ayman is a passionate 22-year-old fullstack web developer from Morocco, specializing in creating dynamic and user-friendly web applications. Discover his projects and skills in web development. Contact Ayman for inquiries.",
	keywords: [
		"Ayman Badouzi",
		"Aymvn Developer",
		"Fullstack Web Developer",
		"aymvn.tech",
		"Ayman Badouzi Projects",
		"Ayman Badouzi Portfolio",
		"Ayman Badouzi Website",
		"Fullstack Web Developer",
		"Web Developer Morocco",
		"Web Development Portfolio",
		"JavaScript Development",
		"React.js Projects",
		"Node.js Backend",
		"HTML5 & CSS3",
		"MongoDB Database",
		"Express.js Framework",
		"Next.js Applications",
		"Tailwind CSS Styling",
		"Bootstrap Framework",
		"Web Application Development",
		"Responsive Design Projects",
		"Frontend Development Skills",
		"Backend Development Expertise",
		"MERN Stack Developer",
		"Personal Projects Showcase",
		"Freelance Web Developer Services",
		"UI/UX Design",
		"Cross-browser Compatibility",
		"Mobile-First Development",
		"SEO Optimization",
		"API Integration",
		"RESTful APIs",
		"Git Version Control",
		"Agile Development",
		"Software Engineering",
		"E-commerce Websites",
		"CMS Development",
		"Progressive Web Apps (PWAs)",
		"Web Security Practices",
		"Performance Optimization",
		"Code Review",
		"Debugging and Troubleshooting",
		"User-Centric Design",
		"A/B Testing",
		"Digital Marketing",
		"Technical Documentation",
		"Client Communication",
		"Problem Solving",
		"Innovative Solutions",
		"Collaborative Teamwork",
	],
	metadataBase: new URL("https://aymvn.netlify.app/"),
	openGraph: {
		title: "Aymvn - Fullstack Web Developer",
		description:
			"Explore Aymvn's portfolio website. Ayman is a passionate 21-year-old fullstack web developer from Morocco, specializing in creating dynamic and user-friendly web applications. Discover his projects and skills in web development.",
		type: "website",
		url: "https://aymvn.netlify.app/",
		images: [
			{
				url: "https://aymvn.netlify.app/images/og.png",
				width: 1200,
				height: 630,
				alt: "Aymvn - Fullstack Web Developer",
			},
		],
	},
	applicationName: "Aymvn - Fullstack Web Developer",
	authors: [
		{
			name: "Ayman Badouzi",
			url: "https://aymvn.netlify.app/",
		},
	],
	verification: { google: "bhbsjgIT5O1yx-sYXonHHqBZL0yFS95h2UGU8oeO9D4" },
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	)
}
