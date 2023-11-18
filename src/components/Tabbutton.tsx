import { motion } from "framer-motion"

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({
	active,
	selectTab,
	children,
}: {
	active: boolean
	selectTab: () => void
	children: React.ReactNode
}) => {
	const buttonClasses = active
		? "text-black dark:text-white"
		: "text-gray-500 dark:text-[#ADB7BE]"

	return (
		<button onClick={selectTab}>
			<p
				className={`mr-3 font-semibold hover:text-black ${buttonClasses} dark:hover:text-white`}
			>
				{children}
			</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={variants}
				className={"h-1 bg-primary-500 mt-2 mr-3"}
				style={{ width: active ? "calc(100% - 0.75rem)" : 0 }}
			></motion.div>
		</button>
	)
}

export default TabButton
