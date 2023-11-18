import TAB_DATA from "@/data/Tabdata"

export const TabContent = ({ currentTab }: { currentTab: string }) => {
	const tab = TAB_DATA.find((t) => t.id === currentTab)

	if (!tab) {
		return <p>No content available for this tab</p>
	}

	switch (tab.id) {
		case "skills":
			return (
				<ul className="list-disc pl-2">
					{tab.content.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			)

		case "education":
			return (
				<ul className="list-disc pl-2">
					{tab.content.map((edu, index) => (
						<li key={index} className="mb-4">
							<h4 className="text-lg font-bold">{edu.title}</h4>
							<p className="text-base">{edu.school}</p>
							<p className="text-sm">{edu.date}</p>
						</li>
					))}
				</ul>
			)

		case "certifications":
			return (
				<ul className="list-disc pl-2">
					{tab.content.map((cert, index) => (
						<li key={index}>{cert}</li>
					))}
				</ul>
			)

		case "experience":
			return (
				<ul className="list-disc pl-2">
					{tab.content.map((exp, index) => (
						<li key={index} className="mb-4">
							<h4 className="text-lg font-bold">{exp.title}</h4>
							<p className="text-base">{exp.company}</p>
							<p className="text-sm">{exp.date}</p>
						</li>
					))}
				</ul>
			)

		default:
			return null
	}
}
