import Head from "next/head";
import Image from "next/image";

import pic1 from "src/assets/images/Graphic2.png";
import pic2 from "src/assets/images/Graphic1.png";
import logo from "src/assets/images/logo.svg";
import star from "src/assets/images/star.png";
import beauty from "src/assets/images/beauty.jpg";
import health from "src/assets/images/health.jpg";
import newyork from "src/assets/images/newyork.jpg";
import recipe from "src/assets/images/recipe.jpg";
import visa from "src/assets/images/visa.jpg";
import section3 from "src/assets/images/Section3.png";
import { BsFillBookmarkFill, BsGlobe, BsDatabase } from "react-icons/bs";
import YoutubeEmbed from "src/components/YoutubeEmbed";
import bottom from "src/assets/images/Group9.png";
import footer from "src/assets/images/footer.png";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* Navbar section */}
				<section>
					<nav className="flex justify-between p-4 font-bold items-center">
						<div className="flex gap-5">
							<Image src={logo} width={80} height={80} alt="" />
							<a className="" href="/kr">
								KR
							</a>
							<a href="/en">EN</a>
						</div>

						<div className="flex gap-5 items-center">
							<p>Download</p>
							<a href="/guide">Guide</a>
							<button className="bg-blue-600 rounded-md p-2 text-white">
								Get Started
							</button>
						</div>
					</nav>
				</section>
				{/* Hero section */}
				<section className="flex items-center justify-center gap-10 w-full">
					<Image className="ml-10" src={pic1} width={200} height={200} alt="" />
					<div className="flex flex-col pb-20">
						<h1 className="text-3xl font-bold font-serif">
							Dont waste time with research,
						</h1>
						<h1 className="text-3xl font-bold p-5 font-serif">
							let <span className="text-blue-500">Pikurates AI</span> do it for
							you.
						</h1>
						<p className="text-xl">
							Together with our community and our machine learning algorithm,
							<br />
							you will be able to find content that interests you.
						</p>
						<p className="pt-5">
							Save and find your knowledge, all in one place.
						</p>
					</div>
					<Image className="mr-10" src={pic2} width={200} height={200} alt="" />
				</section>
				{/* social proof section */}
				<section className="flex justify-center gap-20 pb-20">
					<div className="flex gap-2">
						<p className="font-bold font-serif text-lg items-center">10k+</p>
						daily users
					</div>
					<div className="flex gap-2">
						<p className="font-bold font-serif text-lg items-center">
							167, 314
						</p>
						piks
					</div>
					<div className="flex gap-2">
						<p className="font-bold font-serif text-lg items-center">50k+</p>
						downloads
					</div>
					<div className="flex gap-2">
						<div className="flex flex-row">
							<Image src={star} width={20} height={20} alt="" />
							<Image src={star} width={20} height={20} alt="" />
							<Image src={star} width={20} height={20} alt="" />
							<Image src={star} width={20} height={20} alt="" />
							<Image src={star} width={20} height={20} alt="" />
						</div>
						<p className="font-bold font-serif text-lg items-center">5</p>
						stars on app store and play store
					</div>
				</section>
				{/* picture tiles section */}
				<section className="pt-10 flex justify-between m-5">
					<div className="flex justify-center gap-10 ">
						<Image
							className="rounded-lg"
							src={beauty}
							width={150}
							height={150}
							alt=""
						/>
						<Image
							className="rounded-lg"
							src={health}
							width={150}
							height={150}
							alt=""
						/>
						<Image
							className="rounded-lg"
							src={newyork}
							width={150}
							height={150}
							alt=""
						/>
						<Image
							className="rounded-lg"
							src={recipe}
							width={150}
							height={150}
							alt=""
						/>
						<Image
							className="rounded-lg"
							src={visa}
							width={150}
							height={150}
							alt=""
						/>
						<div className="">
							<Image src={section3} width={400} height={400} alt="" />
						</div>
					</div>
				</section>
				{/* info section */}
				<section className="flex justify-center pt-20 m-10 gap-20 pb-20">
					<div className="flex flex-col items-start gap-5">
						<h1 className="text-2xl font-bold font-serif">
							<span className="font-serif text-blue-500">Save links </span>and
							never lose them again.
						</h1>
						<p className="text-l">
							{" "}
							Save any type of information and organize them into categories.
							Create your own link collection for easy access whenever,
							wherever.
						</p>
					</div>
					<div className="flex flex-col items-start gap-5">
						<h1 className="text-2xl font-bold font-serif">
							<span className="font-serif text-blue-500">Find content</span>{" "}
							that interests you.
						</h1>
						<p className="text-l">
							Our machine learning algorithm will bring the content directly to
							you, based on your saved content and activity in the Pikuverse!{" "}
						</p>
					</div>
				</section>
				{/* core info section */}
				<section className=" gap-20 pb-10">
					<h1 className="text-4xl pb-20 items-start pl-10">
						What is <span className=" text-blue-500">Pikurate</span>?
					</h1>
					<div className="flex flex-row gap-5 items pl-10">
						<div>
							<div className="flex gap-10 pb-20">
								<div>
									<BsFillBookmarkFill className="text-3xl text-blue-500" />
								</div>
								<div>
									<p className="text-2xl font-bold font-serif pb-5">
										Complete Bookmarking Tool
									</p>
									<p className="w-1/2">
										Save all your important research in one place. Whether it’s
										recipes, workout themed or whatever you’re studying at the
										moment.
									</p>
								</div>
							</div>
							<div className="flex gap-10">
								<div>
									<BsGlobe className="text-3xl text-blue-500" />
								</div>
								<div>
									<p className="text-2xl font-bold font-serif pb-5">
										Global Knowledge Curation Service
									</p>
									<p className="w-1/2">
										Together with our community you will find it easier to find
										new content like articles or tutorials, based on your
										excisting Piks (saved links).
									</p>
								</div>
							</div>
						</div>
						<div className="gap-5">
							<div className="w-3/4 rounded-md pb-20">
								<YoutubeEmbed embedId="bJyIG0c43kk" />
							</div>
							<div className="flex gap-10">
								<div>
									<BsDatabase className="text-3xl text-blue-500" />
								</div>
								<div>
									<p className="text-2xl font-bold font-serif pb-5">
										AI powered
									</p>
									<p className="w-1/2">
										With our own machine learning software, you wil be able to
										receive content curated to your interests. You save links,
										and Picurate will find more for you.
									</p>
								</div>
							</div>
						</div>
					</div>{" "}
					<div className="flex justify-center p-20">
						<button className="bg-blue-600 rounded-md p-4 text-white">
							Get Started
						</button>
					</div>
				</section>
				{/* bottom section */}
				<section className="flex justify-center">
					<Image src={bottom} width={1000} height={1080} alt="" />
				</section>
				{/* footer section */}
				<footer className="flex justify-center pt-10">
					<Image src={footer} width="full" height="full" alt="" />
				</footer>
			</main>
		</div>
	);
}
