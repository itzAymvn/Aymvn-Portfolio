"use client"

import { TypeAnimation } from "react-type-animation"

/*
<TypeAnimation
    cursor={false}
    preRenderFirstString={true}
    sequence={[
        "A Web Developer",
        1000,
        "A Self-taught",
        1000,
        "A Javascript Lover",
        1000,
    ]}
    wrapper="span"
    repeat={Infinity}
/>
*/

interface TyperProps {
	cursor: boolean
	preRenderFirstString: boolean
	sequence: (string | number)[]
	wrapper: any
	repeat: number
}

export const Typer = ({
	cursor,
	preRenderFirstString,
	sequence,
	wrapper,
	repeat,
}: TyperProps): JSX.Element => {
	return (
		<TypeAnimation
			cursor={cursor}
			preRenderFirstString={preRenderFirstString}
			sequence={sequence}
			wrapper={wrapper}
			repeat={repeat}
		/>
	)
}
