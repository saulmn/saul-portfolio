import { Logo } from './logo'

export function NavBar() {
	return (
		<nav className="sticky top-0 z-20 flex h-14 w-full items-center justify-between bg-white bg-opacity-30 backdrop-blur-lg shadow-sm p-5 text-black xl:px-10">
			<div className="flex items-center space-x-6">
				<Logo />
			</div>
			<div className="flex">
				<div className="hidden lg:flex items-center justify-end space-x-5">
					about
				</div>
				<div className="hidden lg:flex items-center justify-end space-x-5">
					Github
				</div>
				<div className="hidden lg:flex items-center justify-end space-x-5">
					in
				</div>
				<div className="hidden lg:flex items-center justify-end space-x-5">
					x
				</div>
			</div>
			<div className="hidden lg:flex items-center justify-end space-x-5">
				Theme
			</div>
			<div className="hidden lg:flex items-center justify-end space-x-5">
				Language
			</div>
		</nav>
	)
}
