import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="w-full font-poppins">
			<Head>
				<title>EzStay - Travel With Us, Cheaply</title>
				<meta name="description" content="EzStay provide the best, low price, and good place to stay for tourism, Travel With Us, Cheaply" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
			</Head>
			{/* Header */}
			<header className="fixed w-full left-0 top-0 bg-white z-10">
				<div className="container flex items-center justify-between py-5">
					<h1 className="font-bold text-3xl text-black">
						<span className="text-primary">Ez</span>
						Stay
					</h1>
					<div className="flex items-center">
						<Link href="/" className="px-6 py-2 text-black font-semibold" passHref>
							Login
						</Link>
						<Link href="/" className="px-6 py-2 text-white font-semibold bg-primary rounded-lg" passHref>
							Sign Up
						</Link>
					</div>
				</div>
			</header>
			<div className="container w-full mt-20">
				{/* Banner */}
				<div className="relative w-full">
					<div className="relative rounded-xl md:rounded-3xl container bg-[url('/img/banner.svg')] py-8 md:py-28 bg-right bg-no-repeat bg-cover">
						<h3 className="text-5xl md:text-7xl font-bold mb-9">
							Travel With <br />
							Us, Cheaply
						</h3>
						<p className="text-black opacity-60 font-semibold text-lg mb-5">28°C Cloudy</p>
						<div className="flex gap-3">
							<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black opacity-60">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
								</svg>
							</div>
							<div className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-black opacity-60 rotate-180">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
								</svg>
							</div>
						</div>
						<div className="absolute w-full -bottom-10 left-0 container hidden md:block">
							<div className="w-full py-6 px-8 bg-white rounded-xl shadow-1xl flex justify-between">
								<div className="flex items-center">
									<div className="border-r-2 pr-5">
										<h4 className="font-bold text-lg">Location</h4>
										<div className="flex items-center opacity-60 text-black fill-black gap-5">
											<p className="font-medium text-sm">Your Destination</p>
											<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
												<circle cx="12" cy="9" r="2.5" />
											</svg>
										</div>
									</div>
									<div className="border-r-2 pr-5 pl-5">
										<h4 className="font-bold text-lg">Activity</h4>
										<div className="flex items-center opacity-60 text-black fill-black gap-5">
											<p className="font-medium text-sm">Your Activity</p>
											<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
												<circle cx="12" cy="9" r="2.5" />
											</svg>
										</div>
									</div>
									<div className="pl-5">
										<h4 className="font-bold text-lg">Date</h4>
										<div className="flex items-center opacity-60 text-black fill-black gap-5">
											<p className="font-medium text-sm">Set Date</p>
											<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
												<path d="M0 0h24v24H0V0z" fill="none" />
												<path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
											</svg>
										</div>
									</div>
								</div>
								<button className="bg-primary h-16 aspect-square flex items-center justify-center rounded-xl">
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
										<path d="M0 0h24v24H0V0z" fill="none" />
										<path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<h3 className="mt-20 font-bold text-lg text-center mb-2">Recomended Building</h3>
				<p className="opacity-60 text-black mb-10 font-medium text-center max-w-xs mx-auto text-sm">
					The most Brilliant reason NotCube has to be most Convenient and Cheap
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="shadow-1sm p-5 border border-slate-100 rounded-lg transition hover:scale-105 hover:border-secondary bg-white">
						<div className="relative aspect-video">
							<Image src="https://source.unsplash.com/1000x600?hotel" layout="fill" alt="Hotel" className="rounded-md" />
							<div className="absolute rounded-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium right-3 top-3">
								4.6
							</div>
						</div>
						<div className="flex items-center justify-between mt-4">
							<p className="font-medium text-lg text-black">High Fly</p>
							<p className="font-medium text-lg text-secondary">$430</p>
						</div>
						<div className="flex items-center justify-between opacity-60 mt-2">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs">Gambir, Jakarta</p>
							</div>
							<p className="text-xs">Per hour</p>
						</div>
					</div>
					<div className="shadow-1sm p-5 border border-slate-100 rounded-lg transition hover:scale-105 hover:border-secondary bg-white">
						<div className="relative aspect-video">
							<Image src="https://source.unsplash.com/1000x600?hotel" layout="fill" alt="Hotel" className="rounded-md" />
							<div className="absolute rounded-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium right-3 top-3">
								4.6
							</div>
						</div>
						<div className="flex items-center justify-between mt-4">
							<p className="font-medium text-lg text-black">High Fly</p>
							<p className="font-medium text-lg text-secondary">$430</p>
						</div>
						<div className="flex items-center justify-between opacity-60 mt-2">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs">Gambir, Jakarta</p>
							</div>
							<p className="text-xs">Per hour</p>
						</div>
					</div>
					<div className="shadow-1sm p-5 border border-slate-100 rounded-lg transition hover:scale-105 hover:border-secondary bg-white">
						<div className="relative aspect-video">
							<Image src="https://source.unsplash.com/1000x600?hotel" layout="fill" alt="Hotel" className="rounded-md" />
							<div className="absolute rounded-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium right-3 top-3">
								4.6
							</div>
						</div>
						<div className="flex items-center justify-between mt-4">
							<p className="font-medium text-lg text-black">High Fly</p>
							<p className="font-medium text-lg text-secondary">$430</p>
						</div>
						<div className="flex items-center justify-between opacity-60 mt-2">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs">Gambir, Jakarta</p>
							</div>
							<p className="text-xs">Per hour</p>
						</div>
					</div>
				</div>
				<h3 className="mt-14 font-bold text-lg text-center mb-2">Gallery</h3>
				<p className="opacity-60 text-black mb-10 font-medium text-center max-w-xs mx-auto text-sm">
					This photo is from some of EzStay Favorite buildings
				</p>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="relative overflow-hidden md:row-span-2 min-h-[400px] group transition">
						<Image
							src="https://source.unsplash.com/600x600?balcony"
							layout="fill"
							alt="Hotel"
							className="rounded-md group-hover:blur-sm object-cover"
						/>
						<div className="absolute -translate-x-36 group-hover:translate-x-5 top-6 transition">
							<h6 className="font-bold text-white text-lg">Glasses House</h6>
							<div className="flex items-center text-black opacity-60">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs font-medium">Gambir, Jakarta</p>
							</div>
						</div>
						<div className="absolute rounded-l-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium top-6 translate-x-2 -right-14 group-hover:right-0 group-hover:-translate-x-0 transition">
							4.6
						</div>
					</div>
					<div className="relative overflow-hidden md:row-span-2 min-h-[400px] group transition">
						<Image
							src="https://source.unsplash.com/600x600?bed"
							layout="fill"
							alt="Hotel"
							className="rounded-md group-hover:blur-sm object-cover"
						/>
						<div className="absolute -translate-x-36 group-hover:translate-x-5 top-6 transition">
							<h6 className="font-bold text-white text-lg">Glasses House</h6>
							<div className="flex items-center text-black opacity-60">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs font-medium">Gambir, Jakarta</p>
							</div>
						</div>
						<div className="absolute rounded-l-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium top-6 translate-x-2 -right-14 group-hover:right-0 group-hover:-translate-x-0 transition">
							4.6
						</div>
					</div>
					<div className="relative overflow-hidden group transition min-h-[200px]">
						<Image
							src="https://source.unsplash.com/1000x600?family%20room"
							layout="fill"
							alt="Hotel"
							className="rounded-md group-hover:blur-sm object-cover"
						/>
						<div className="absolute -translate-x-36 group-hover:translate-x-5 top-6 transition">
							<h6 className="font-bold text-white text-lg">Glasses House</h6>
							<div className="flex items-center text-black opacity-60">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs font-medium">Gambir, Jakarta</p>
							</div>
						</div>
						<div className="absolute rounded-l-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium top-6 translate-x-2 -right-14 group-hover:right-0 group-hover:-translate-x-0 transition">
							4.6
						</div>
					</div>
					<div className="relative overflow-hidden group transition min-h-[200px]">
						<Image
							src="https://source.unsplash.com/1000x600?bathroom"
							layout="fill"
							alt="Hotel"
							className="rounded-md group-hover:blur-sm object-cover"
						/>
						<div className="absolute -translate-x-36 group-hover:translate-x-5 top-6 transition">
							<h6 className="font-bold text-white text-lg">Glasses House</h6>
							<div className="flex items-center text-black opacity-60">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000"
									className="w-[15px] h-[15px]"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
								<p className="text-xs font-medium">Gambir, Jakarta</p>
							</div>
						</div>
						<div className="absolute rounded-l-full px-3 py-1 bg-secondary-light text-secondary text-xs font-medium top-6 translate-x-2 -right-14 group-hover:right-0 group-hover:-translate-x-0 transition">
							4.6
						</div>
					</div>
				</div>
			</div>
			<footer className="text-center pt-20 mb-5">
				Made with love by{" "}
				<a href="https://www.instagram.com/deni_jsa/" className="text-primary">
					@deni_jsa
				</a>
			</footer>
		</div>
	);
}
