// Components
import { Button } from '../ui/button'

export function Hero() {
	return (
		<section className="w-screen h-screen flex justify-center items-center p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10">
				<div className="flex flex-col items-start justify-center gap-10">
					<h1 className="text-5xl font-semibold text-left">
						Hi ✌️, my name is Saúl and i'm a Computer Science Engineer.
					</h1>
					<div className="flex justify-between w-full gap-10">
						<a
							href="https://www.github.com/saulmn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://www.linkedin.com/in/saulmn/"
							target="_blank"
							rel="noreferrer"
						>
							in
						</a>

						<a href="https://www.drive.com/" target="_blank" rel="noreferrer">
							CV
						</a>
						<a href="https://www.drive.com/" target="_blank" rel="noreferrer">
							Mail
						</a>
					</div>
				</div>
				<div className="flex justify-center items-center max-w-3xl">
					<img
						alt="Hi!"
						loading="lazy"
						className="rounded-full"
						src="https://michaeldeboey.be/img/Micha%C3%ABl.jpg"
					/>
				</div>
			</div>
		</section>
	)
}
