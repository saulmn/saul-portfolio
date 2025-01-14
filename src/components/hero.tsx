// Components
import { Button } from './ui/button'

export function Hero() {
	return (
		<section className="w-screen h-screen flex justify-center items-center p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10">
				<div className="flex flex-col items-start justify-center gap-10">
					<h1 className="text-5xl font-semibold text-left">
						Hi ✌️, my name is Saul and i'm a computer science engineer.
					</h1>
					<div className="flex items-center justify-start w-1/2 ">
						<Button className="rounded-2xl w-3/4" variant="default">
							Let's talk
						</Button>
					</div>
					<div className="flex gap-10">
						<a
							href="https://www.github.com/saulmn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://www.linkedin.com/saulmn"
							target="_blank"
							rel="noreferrer"
						>
							in
						</a>

						<a href="https://www.drive.com/" target="_blank" rel="noreferrer">
							CV
						</a>
					</div>
				</div>
				<div className="flex justify-center items-center">
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
