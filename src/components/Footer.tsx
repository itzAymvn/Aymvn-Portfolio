const Footer = (): JSX.Element => {
	return (
		<footer className="footer dark:text-white text-black">
			<div className="container p-12 flex justify-between">
				<span>AYMVN</span>
				<p className="dark:text-slate-200 text-gray-700">
					All rights reserved {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	)
}

export default Footer
