import Link from "next/link"

const NavLink = ({
	href,
	title,
}: {
	href: string
	title: string
}): JSX.Element => {
	return (
		<Link
			href={href}
			className="block py-2 pl-3 pr-4 text-black dark:text-white sm:text-xl rounded md:p-0 hover:text-[#8e2be2]
            dark:hover:text-[#8e2be2]"
		>
			{title}
		</Link>
	)
}

export default NavLink
