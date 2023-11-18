"use client"

import NavLink from "./Navlink"

const MenuOverlay = ({
	links,
	setNavbarOpen,
}: {
	links: { title: string; path: string }[]
	setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}): JSX.Element => {
	return (
		<ul className="flex flex-col py-4 items-center bg-[#f4f4f4] dark:bg-[#121212]">
			{links.map((link, index) => (
				<li
					key={index}
					onClick={() => setNavbarOpen(false)}
					className="dark:text-white"
				>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
		</ul>
	)
}

export default MenuOverlay
