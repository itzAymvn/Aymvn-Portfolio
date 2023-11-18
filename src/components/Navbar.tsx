"use client"

import Link from "next/link"
import React, { useState } from "react"
import NavLink from "./Navlink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./Menuoverlay"
import ThemeSwitch from "./ui/ThemeSwitch"

const navLinks: { title: string; path: string }[] = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
]

const NavBar = (): JSX.Element => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

	return (
		<nav className="fixed mx-auto border-0 top-0 left-0 right-0 z-10 bg-[#f4f4f4] bg-opacity-100 dark:bg-[#121212]">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-black dark:text-white font-semibold uppercase"
				>
					aymvn
				</Link>

				<div className="flex flex-auto items-center space-x-4">
					<div className="flex-grow md:flex md:items-center md:w-auto w-full md:justify-end justify-center space-x-8">
						<div className="hidden md:block md:w-auto" id="navbar">
							<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
								{navLinks.map((link, index) => (
									<li key={index}>
										<NavLink
											href={link.path}
											title={link.title}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>

					<ThemeSwitch />

					<div className="mobile-menu block md:hidden">
						<button
							onClick={() => setNavbarOpen(!navbarOpen)}
							className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 dark:border-slate-200 bg-gray-100 dark:bg-background hover:bg-accent hover:text-accent-foreground text-gray-700 dark:text-slate-200 h-10 w-10"
							aria-label={
								!navbarOpen
									? "Open Navigation"
									: "Close Navigation"
							}
							aria-expanded={navbarOpen}
							aria-controls="navbarContent"
						>
							{!navbarOpen ? (
								<Bars3Icon className="h-5 w-5" />
							) : (
								<XMarkIcon className="h-5 w-5" />
							)}
						</button>
					</div>
				</div>
			</div>

			{navbarOpen ? (
				<MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
			) : null}
		</nav>
	)
}

export default NavBar
