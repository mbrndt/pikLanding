import Head from "next/head";
import Image from "next/image";
import pic1 from "src/assets/images/Graphic2.png";
import pic2 from "src/assets/images/Graphic1.png";
import logo from "src/assets/images/logo.svg";
import star from "src/assets/images/star.png";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
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
				<section className="flex items-center justify-center gap-40">
					<Image className="ml-10" src={pic1} width={300} height={300} alt="" />
					<div className="flex flex-col">
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
					<Image className="mr-10" src={pic2} width={300} height={300} alt="" />
				</section>
				<section className="flex justify-center gap-40">
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
			</main>
		</div>
	);
}
