"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
	EnvelopeIcon,
	BookOpenIcon,
	DocumentTextIcon,
	PaperAirplaneIcon,
	ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid"

const Emailform = (): JSX.Element => {
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [error, setError] = useState<string>("")
	const [pending, setPending] = useState<boolean>(false)

	const ref = useRef(null)
	const isInView = useInView(ref, { once: false })

	const [email, setEmail] = useState<string>("")
	const [subject, setSubject] = useState<string>("")
	const [message, setMessage] = useState<string>("")

	const handleSubmit = async () => {
		setPending(true)

		if (!email || !subject || !message) {
			setError("Please fill out all fields.")
			return setPending(false)
		}

		const res = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				subject,
				message,
			}),
		})

		if (res.ok) {
			setSubmitted(true)
			setEmail("")
			setSubject("")
			setMessage("")
		} else {
			console.error("Email failed to send")
		}

		setPending(false)
	}
	return (
		<div className="flex flex-col" ref={ref}>
			{submitted && (
				<p className="text-white text-sm mb-4 bg-green-500 p-2.5 rounded-lg">
					Your message has been sent!
					<button
						onClick={() => setSubmitted(false)}
						aria-label="Close"
						aria-describedby="close"
						className="absolute top-1/2 right-2 transform -translate-y-1/2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-white"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 0a10 10 0 100 20 10 10 0 000-20zm5.707 14.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</p>
			)}

			{error && (
				<p className="relative text-white text-sm mb-4 bg-red-500 p-2.5 rounded-lg">
					{error}
					<button
						onClick={() => setError("")}
						aria-label="Close"
						aria-describedby="close"
						className="absolute top-1/2 right-2 transform -translate-y-1/2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-white"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 0a10 10 0 100 20 10 10 0 000-20zm5.707 14.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</p>
			)}

			<motion.div
				className="mb-6"
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<label
					htmlFor="email"
					className="dark:text-white block mb-2 text-sm font-medium text-gray-700"
				>
					<EnvelopeIcon className="h-5 w-5 inline-block mr-1" />
					Your email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="dark:bg-[#18191E] border dark:border-[#33353F] dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-white border-gray-300 placeholder-gray-400 text-gray-700"
					placeholder="example@mail.com"
				/>
			</motion.div>
			<motion.div
				className="mb-6"
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
				}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<label
					htmlFor="subject"
					className="dark:text-white block mb-2 text-sm font-medium text-gray-700"
				>
					<BookOpenIcon className="h-5 w-5 inline-block mr-1" />
					Subject
				</label>
				<input
					type="text"
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					required
					className="dark:bg-[#18191E] border dark:border-[#33353F] dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-white border-gray-300 placeholder-gray-400 text-gray-700"
					placeholder="Let's talk about..."
				/>
			</motion.div>
			<motion.div
				className="mb-6"
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
				}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				<label
					htmlFor="message"
					className="dark:text-white block mb-2 text-sm font-medium text-gray-700"
				>
					<DocumentTextIcon className="h-5 w-5 inline-block mr-1" />
					Message
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					className="dark:bg-[#18191E] border dark:border-[#33353F] dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 bg-white border-gray-300 placeholder-gray-400 text-gray-700"
					placeholder="Your message..."
				/>
			</motion.div>
			<motion.button
				disabled={pending}
				aria-label="Send email"
				aria-describedby="send"
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
				}
				onClick={handleSubmit}
				className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
			>
				{pending ? (
					<div className="flex items-center justify-center">
						<ArrowPathRoundedSquareIcon className="h-5 w-5 inline-block mr-1 animate-spin" />
						Sending...
					</div>
				) : (
					<div className="flex items-center justify-center">
						<PaperAirplaneIcon className="h-5 w-5 inline-block mr-1 animate-bounceX" />
						Send
					</div>
				)}
			</motion.button>
		</div>
	)
}

export default Emailform
