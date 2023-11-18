"use client"

import { useState } from "react"
import TabButton from "./Tabbutton"
import { TabContent } from "./Tabcontent"
import TAB_DATA from "@/data/Tabdata"

const AboutTabs = () => {
	const [currentTab, setTab] = useState("skills")

	return (
		<>
			{/* Tabs for larger screens */}
			<div className="md:flex flex-row justify-start mt-8 hidden">
				{TAB_DATA.map((t) => (
					<TabButton
						key={t.id}
						selectTab={() => setTab(t.id)}
						active={currentTab === t.id}
					>
						{t.title}
					</TabButton>
				))}
			</div>

			{/* Select dropdown for small screens */}
			<div className="md:hidden flex w-full mt-8">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					id="tabs"
					className="w-full dark:bg-[#181818] dark:text-white rounded-md px-4 py-2 border dark:border-[#33353F] focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-[#181818] dark:focus:ring-white bg-white border-gray-300 text-gray-500 shadow-sm focus:border-primary-500 sm:text-sm"
					onChange={(e) => setTab(e.target.value)}
					defaultValue={currentTab}
				>
					{TAB_DATA.map((t) => (
						<option key={t.id} value={t.id}>
							{t.title}
						</option>
					))}
				</select>
			</div>

			<div className="mt-8">
				<TabContent currentTab={currentTab} />
			</div>
		</>
	)
}

export default AboutTabs
