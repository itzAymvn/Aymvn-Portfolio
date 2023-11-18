const loading = () => {
	return (
		<div className="container mx-auto">
			<div className="text-3xl font-bold mt-8 animate-pulse h-8 w-1/3 bg-gray-300 dark:bg-gray-700 rounded-md"></div>

			<div className="flex flex-wrap gap-2 my-4">
				<span className="bg-gray-300 dark:bg-gray-700 animate-pulse h-6 w-20 rounded-md"></span>
				<span className="bg-gray-300 dark:bg-gray-700 animate-pulse h-6 w-20 rounded-md"></span>
				<span className="bg-gray-300 dark:bg-gray-700 animate-pulse h-6 w-20 rounded-md"></span>
				<span className="bg-gray-300 dark:bg-gray-700 animate-pulse h-6 w-20 rounded-md"></span>
			</div>

			<div className="border border-gray-300 dark:border-gray-700 rounded-md shadow-md animate-pulse h-96"></div>

			<div className="text-lg my-4 animate-pulse h-8 w-100 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
			<div className="text-lg my-4 animate-pulse h-8 w-100 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
			<div className="text-lg my-4 animate-pulse h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>

			<div className="mt-4 border-t border-gray-300 dark:border-gray-700 pt-4 animate-pulse">
				<h2 className="text-xl font-semibold mb-2 h-6 w-1/4 bg-gray-300 dark:bg-gray-700 rounded-md"></h2>
				<p>
					<strong className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md"></strong>
				</p>
				<p>
					<strong className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md"></strong>
				</p>
			</div>

			<a
				href="#"
				className=" hover:bg-blue-600 text-white py-2 px-4 mt-4 block animate-pulse h-8 w-1/4 bg-gray-300 dark:bg-gray-700 rounded-md"
			>
				&nbsp;
			</a>
		</div>
	)
}

export default loading
