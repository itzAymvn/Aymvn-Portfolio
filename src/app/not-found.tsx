import Link from "next/link"

const NotFoundPage = (): JSX.Element => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white px-4">
			<h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
				404 - Page Not Found
			</h1>
			<p className="text-lg md:text-xl text-center mb-8">
				We can&apos;t find the page you&apos;re looking for. Please make
				sure you typed the URL correctly. If you did, then the page may
				have been moved or deleted.
			</p>
			<Link
				href="/"
				className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 hover:bg-slate-800 text-white transition-all duration-300"
			>
				Go Back to Home
			</Link>
		</div>
	)
}

export default NotFoundPage
