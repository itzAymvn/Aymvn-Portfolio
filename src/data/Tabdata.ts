type SkillsTab = {
	title: "Skills"
	id: "skills"
	content: string[]
}

type EducationTab = {
	title: "Education"
	id: "education"
	content: {
		title: string
		school: string
		date: string
	}[]
}

type CertificationsTab = {
	title: "Certifications"
	id: "certifications"
	content: string[]
}

type ExperienceTab = {
	title: "Experience"
	id: "experience"
	content: {
		title: string
		company: string
		date: string
	}[]
}

export type TabData =
	| SkillsTab
	| EducationTab
	| CertificationsTab
	| ExperienceTab

const TAB_DATA: TabData[] = [
	{
		title: "Skills",
		id: "skills",
		content: [
			"Node.js",
			"Express",
			"MySQL / MongoDB",
			"JavaScript / TypeScript",
			"React.js / Next.js",
			"Bootstrap / Tailwind CSS",
		],
	},

	{
		title: "Education",
		id: "education",
		content: [
			{
				title: "Fullstack Developer",
				school: "Institut Spécialisé de Technologie Appliquée",
				date: "2021 - 2023",
			},
			{
				title: "Baccaulauréat",
				school: "Lycée Ahmed El Bouanani",
				date: "2019 - 2020",
			},
		],
	},

	{
		title: "Certifications",
		id: "certifications",
		content: ["Microsoft Office Specialist: Excel Associate"],
	},

	{
		title: "Experience",
		id: "experience",
		content: [
			{
				title: "Fullstack Developer (Intern)",
				company: "MJTech Solution",
				date: "05/2023 - 06/2023",
			},
		],
	},
]

export default TAB_DATA
