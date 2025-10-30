"use client";
/* eslint-disable react/no-children-prop */
import { DesktopNavLink } from "@/components/navComponents";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaqCards, FooterSection, Loader } from "@/components/reusableBlocks";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { AnimatePresence, motion } from "motion/react";
import { MobileNavSection } from "../components/navComponents";

import { WandSparkles, Zap, ShieldCheck, RefreshCw } from "lucide-react";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isChildVisible, setIsChildVisible] = useState([false, false, false]);
	const [faqIndex, setFaqIndex] = useState(null);
	const [isClient, setIsClient] = useState(false);

	const [mobileNav, setMobileNav] = useState(false);

	const faqs = [
		{
			question: "What is Zurvia?",
			answer: "Zurvia is a DeFi finance app that empowers people to live off their DeFi without spending it. Flagship features include Zurvia Borrow and MUSD.",
		},
		{
			question: "What can I do with Zurvia?",
			answer: "Zurvia builds products to help bring utility to BTC without the need to spend it. You can set up a loan with Zurvia Borrow to mint MUSD which can be spent for a variety of use cases. The vision is to ultimately create and lead the DeFi circular economy, where MUSD can be used for larger purchases such as a home, as well as day-to-day purchases, such as groceries or your daily coffee.",
		},
		{
			question: "Why should i use Zurvia?",
			answer: "If you want to finally be able to live off your DeFi without spending it, Zurvia is the place for you. By using your DeFi as collateral, you can set up a credit line with Zurvia Borrow benefiting from the lowest interest rates in the industry (1-5%) at a fixed rate. This allows you to access DeFiFi, as well as everyday items that you can find in the Zurvia Market.",
		},
	];

	const clickFunc = (index) => {
		let list = [false, false, false];
		list[index] = true;
		setIsChildVisible(list);
		console.log(isChildVisible);
	};

	const screenTap = () => {
		document.querySelectorAll(".MnUDrkYKud").forEach((element) => {
			element.classList.add("invisible", "opacity-0");
			element.classList.remove("visible", "opacity-100");
		});
	};

	const heroIconAnimationVariants = (delay) => {
		return {
			initial: { opacity: 0 },
			animate: {
				opacity: 1,
				transition: {
					duration: 1,
					delay: delay,
					ease: "easeInOut",
				},
			},
		};
	};

	useEffect(() => {
		setIsClient(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 8000);
	}, []);

	return (
		<>
			{" "}
			{isLoading ? (
				<Loader />
			) : (
				<>
					<header className="p-6 min-h-[110vh] bg-no-repeat bg-cover relative flex flex-col justify-center items-center">
						<AnimatePresence initial={false}>
							{mobileNav && <MobileNavSection />}
						</AnimatePresence>

						<nav className="flex justify-between items-center w-full absolute p-6 top-0 z-50">
							<Image
								src={"/logo.svg"}
								className="w-32 relative -top-0.5"
								width={83}
								height={24}
								alt=""
							/>

							<div className="hidden lg:flex gap-4">
								<DesktopNavLink
									link={"#"}
									text={"Mainnet"}
									isClient={isClient}
								/>
								<DesktopNavLink
									link={"#"}
									text={"Ecosystem"}
									isClient={isClient}
								/>
								<DesktopNavLink
									text={"Features"}
									isVisible={[isChildVisible[0], 0]}
									clickFunc={() => clickFunc(0)}
									children={[
										{ label: "Borrow", href: "#" },
										{ label: "MUSD", href: "#" },
									]}
									isClient={isClient}
								/>

								<DesktopNavLink
									text={"Build"}
									isVisible={isChildVisible[1]}
									clickFunc={() => clickFunc(1)}
									icon={true}
									children={[
										{ label: "Github", href: "#" },
										{ label: "Passport Plugin", href: "#" },
										{ label: "Audits", href: "#" },
										{ label: "Docs", href: "#" },
									]}
									isClient={isClient}
								/>
								<DesktopNavLink
									text={"Learn"}
									isVisible={isChildVisible[2]}
									clickFunc={() => clickFunc(2)}
									children={[
										{ label: "Blog", href: "#" },
										{ label: "FAQs", href: "#" },
									]}
									isClient={isClient}
								/>
							</div>
							<div>
								<button
									onClick={() =>
										mobileNav
											? setMobileNav(false)
											: setMobileNav(true)
									}
									className="lg:hidden"
								>
									{mobileNav ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="32px"
											viewBox="0 -960 960 960"
											width="32px"
											fill="000"
											className="relative top-1"
										>
											<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="32px"
											viewBox="0 -960 960 960"
											width="32px"
											fill="#000"
											className="relative top-1"
										>
											<path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
										</svg>
									)}
								</button>
								<section className="hidden lg:block">
									<ConnectButton showBalance={false} />
								</section>
							</div>
						</nav>

						<div className="bg-linear-to-b from-transparent to-[#f7931a20] size-80 rounded-full absolute z-0 top-1/6 shadow-2xl shadow-[#f7931a30] animate-pulse"></div>

						<div className="absolute z-20 w-full top-28 md:w-4/6 mx-auto md:top-32">
							<div className="w-3/5 mx-auto flex justify-between">
								<motion.div
									variants={heroIconAnimationVariants(0.6)}
									initial="initial"
									animate="animate"
									className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md top-0 inset-x-0 mx-auto"
								>
									<ShieldCheck />
								</motion.div>
								<motion.div
									variants={heroIconAnimationVariants(0.8)}
									initial="initial"
									animate="animate"
									className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md top-0 inset-x-0 mx-auto"
								>
									<RefreshCw />
								</motion.div>
							</div>

							<div className="w-full flex justify-between absolute top-20 md:top-60 px-8 md:px-0">
								<motion.div
									variants={heroIconAnimationVariants(0.4)}
									initial="initial"
									animate="animate"
									className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md"
								>
									<Zap />
								</motion.div>
								<motion.div
									variants={heroIconAnimationVariants(1.0)}
									initial="initial"
									animate="animate"
									className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md"
								>
									<WandSparkles />
								</motion.div>
							</div>
						</div>

						<section
							onClick={isClient ? screenTap : undefined}
							className="text-center flex flex-col gap-4 items-center -mt-24 md:mt-24 relative"
						>
							<motion.p
								variants={heroIconAnimationVariants(0.6)}
								initial="initial"
								animate="animate"
								className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 font-medium font-inter shadow-md shadow-[#f7931a10]"
							>
								100% transparent
							</motion.p>
							<motion.h1
								variants={heroIconAnimationVariants(0.8)}
								initial="initial"
								animate="animate"
								className={
									"font-sans bg-linear-to-r from-white via-black to-white text-transparent bg-clip-text text-4xl lg:text-5xl xl:text-6xl lg:px-24 lg:w-4/5 mx-auto font-bold relative z-10"
								}
							>
								Discover the financial uplifiting power of{" "}
								<br />
								<span className="px-6 py-2 text-white border-solid bg-[#f7931a] backdrop-blur-3xl relative -z-0 mt-0.75 inline-block">
									Web3.0
								</span>
							</motion.h1>
							<motion.p
								variants={heroIconAnimationVariants(1.0)}
								initial="initial"
								animate="animate"
								className="text-default-text text-xl"
							>
								Bring everyday finance to your portfolio
							</motion.p>
							<motion.section
								variants={heroIconAnimationVariants(0.6)}
								initial="initial"
								animate="animate"
								className="grid grid-cols-2 w-fit gap-2"
							>
								<button className="bg-black/95 px-4 py-2 rounded-md font-semibold text-white lg:text-lg lg:px-6 hover:bg-black hover:scale-105 hover:shadow shadow-black transition-all">
									Explore Zurvia
								</button>
								<ConnectButton />
							</motion.section>
						</section>
					</header>

					<motion.section
						initial={{ y: 60 }}
						transition={{ type: "spring", bounce: 0.25 }}
						whileInView={{ y: 0 }}
						viewport={{ once: true, amount: 0 }}
						className="bg-white rounded-t-3xl px-6 py-10 lg:py-16 lg:px-8 -mt-6 relative"
					>
						<motion.p
							initial={{ y: 60, opacity: 0 }}
							transition={{ type: "spring", bounce: 0.25 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							className="text-default-text text-2xl lg:text-3xl font-medium lg:w-1/2 mx-auto text-center lg:pb-6"
						>
							Zurvia is the DeFi finance app that empowers you to
							live off of DeFi, without selling it.
						</motion.p>

						<div className="flex flex-col gap-6 md:flex-row mt-8 lg:gap-8 h-fit">
							<div className="flex flex-col gap-6 lg:w-2/3 lg:gap-8">
								<motion.div
									initial={{ y: 60, opacity: 0 }}
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true, amount: 0.25 }}
									className="bg-zurvia-yellow grid lg:grid-cols-2 rounded-2xl"
								>
									<div className="flex flex-col gap-2 p-6 pt-8 lg:p-12">
										<h2 className="text-3xl text-default-text font-medium lg:text-4xl font-ibm_plex_sans">
											Borrow with DeFi
										</h2>
										<p className="text-[#944500]">
											Get a line of credit using your DeFi
											as collateral. Decentralized,
											flexible, and intuitive.
										</p>

										<Link
											href={"#"}
											className="text-default-text font-semibold flex gap-2 mt-4"
										>
											Unlock Credit{" "}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="20px"
												viewBox="0 -960 960 960"
												width="20px"
												fill="#000"
												className="relative top-0.5"
											>
												<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
											</svg>
										</Link>
									</div>
									<div
										id="borrow-graphic-rVBP-6fQ"
										className="bg-no-repeat bg-cover rounded-b-2xl"
									>
										<Image
											src={"/borrow-graphic-rVBP-6fQ.webp"}
											className="rounded-b-2xl h-full"
											width={522}
											height={424}
											alt=""
										/>
									</div>
								</motion.div>

								<motion.div
									initial={{ y: 60 }}
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									whileInView={{ y: 0 }}
									className="bg-[#eff3db] grid lg:grid-cols-2 rounded-2xl"
								>
									<div className="bg-no-repeat bg-cover rounded-l-2xl hidden lg:block">
										<Image
											src={
												"/growbtc-graphic-BYwcQB4p.webp"
											}
											className="rounded-l-2xl h-full"
											width={522}
											height={424}
											alt=""
										/>
									</div>
									<div className="flex flex-col gap-2 p-6 pt-8 lg:p-12">
										<h2 className="text-3xl text-default-text font-medium lg:text-4xl font-ibm_plex_sans">
											Grow Your DeFi
										</h2>
										<p className="text-[#4D5E0E]">
											Get a line of credit using your DeFi
											as collateral. Decentralized,
											flexible, and intuitive.
										</p>

										<Link
											href={"#"}
											className="text-default-text font-semibold flex gap-2 mt-4"
										>
											Start Earning{" "}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="20px"
												viewBox="0 -960 960 960"
												width="20px"
												fill="#000"
												className="relative top-0.5"
											>
												<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
											</svg>
										</Link>
									</div>
									<div
										id="growbtc-graphic-BYwcQB4p"
										className="bg-no-repeat bg-cover rounded-b-2xl lg:hidden"
									>
										<Image
											src={
												"/growbtc-graphic-BYwcQB4p.webp"
											}
											className="rounded-b-2xl h-full"
											width={522}
											height={424}
											alt=""
										/>
									</div>
								</motion.div>
							</div>

							<motion.div
								initial={{ y: 60 }}
								transition={{ type: "spring", bounce: 0.25 }}
								whileInView={{ y: 0 }}
								className="bg-[#FAE2DF] flex flex-col rounded-2xl lg:w-1/3 h-auto"
							>
								<div className="flex flex-col gap-2 p-6 pt-8 lg:p-12">
									<h2 className="text-3xl text-default-text font-medium lg:text-4xl font-ibm_plex_sans">
										Stability Backed By DeFi
									</h2>
									<p className="text-[#6B0036]">
										Get a line of credit using your DeFi as
										collateral. Decentralized, flexible, and
										intuitive.
									</p>

									<Link
										href={"#"}
										className="text-default-text font-semibold flex gap-2 mt-4"
									>
										Learn More{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="20px"
											viewBox="0 -960 960 960"
											width="20px"
											fill="#000"
											className="relative top-0.5"
										>
											<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
										</svg>
									</Link>
								</div>
								<div
									id="stability-graphic-CaEoUcmV"
									className="bg-no-repeat bg-cover rounded-b-2xl h-full bg-center"
								>
									<Image
										src={"/stability-graphic-CaEoUcmV.webp"}
										className="rounded-b-2xl h-full"
										width={504}
										height={424}
										alt=""
									/>
								</div>
							</motion.div>
						</div>
					</motion.section>

					<motion.section
						initial={{ y: 60 }}
						transition={{ type: "spring", bounce: 0.25 }}
						whileInView={{ y: 0 }}
						className="bg-[#f4f0ed] p-6 lg:py-12 flex flex-col gap-6 items-center"
					>
						<motion.h2
							initial={{ y: 30 }}
							transition={{ type: "spring", bounce: 0.25 }}
							whileInView={{ y: 0 }}
							className="text-[#FF004D] font-ibm_plex_sans font-medium text-3xl lg:text-4xl text-center"
						>
							Ready for the DeFi Age
						</motion.h2>

						<motion.div
							initial={{ y: 30 }}
							transition={{ type: "spring", bounce: 0.25 }}
							whileInView={{ y: 0 }}
							className="flex flex-wrap items-center justify-center w-full gap-4"
						>
							<p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#ff004d"
								>
									<path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
								</svg>{" "}
								permissionless
							</p>
							<p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#ff004d"
								>
									<path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
								</svg>{" "}
								Bank-free
							</p>
							<p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#ff004d"
								>
									<path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
								</svg>{" "}
								Intuitive
							</p>
							<p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#ff004d"
								>
									<path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
								</svg>{" "}
								Secure
							</p>
							<p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#ff004d"
								>
									<path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
								</svg>{" "}
								Decentralized
							</p>
						</motion.div>

						<button className="bg-black/95 px-4 py-2 mx-auto w-fit rounded-md font-medium text-white hover:bg-black hover:scale-105 hover:shadow shadow-black transition-all">
							Explore Zurvia
						</button>

						<div className="flex flex-col gap-24 md:px-24 mt-6 lg:gap-24">
							<div className="flex flex-col gap-4 md:flex-row lg:gap-20">
								<motion.img
									initial={{ y: 0, scale: 0.9, opacity: 0.8 }}
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									whileInView={{ y: 0, scale: 1, opacity: 1 }}
									src={
										"/0b8e4a2d3f5381c45e0c547e74bc71e37be05fbb-1870x1232.webp"
									}
									className="lg:w-3/5"
									width={1820}
									height={1232}
									alt=""
								/>
								<div className="lg:w-2/5 flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-0 justify-center">
									<h3 className="text-primary-red text-2xl font-medium lg:text-4xl">
										Borrow securely, spend confidently
									</h3>
									<p className="text-default-text lg:text-">
										Unlock liquidity in minutes without
										selling your DeFi. View your loan
										status, track your collateral ratio, and
										manage risk, all directly in the Zurvia
										app. Stay in control with real-time
										insight into your position.
									</p>
								</div>
							</div>

							<div className="flex flex-col gap-4 md:flex-row-reverse lg:gap-20">
								<motion.img
									initial={{ y: 0, scale: 0.9, opacity: 0.8 }}
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									whileInView={{ y: 0, scale: 1, opacity: 1 }}
									src={
										"/d4907bf8e0b4b724aa1d65948603f3b18f702ef9-1870x1216.webp"
									}
									className="lg:w-3/5"
									width={935}
									height={608}
									alt=""
								/>
								<div className="lg:w-2/5 flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-0 justify-center">
									<h3 className="text-primary-red text-2xl font-medium lg:text-4xl">
										Know yourself, know your wealth.
									</h3>
									<p className="text-default-text lg:text-">
										Your Zurvia wallet gives you a complete
										view of your DeFi-powered portfolio—BTC,
										MUSD, mats, NFTs, and more—all in one
										place. No complexity, no confusion. Just
										a clear, seamless portal to your onchain
										wealth.
									</p>
								</div>
							</div>

							<div className="flex flex-col gap-4 items-center justify-center text-center lg:flex-col-reverse">
								<motion.img
									initial={{ y: 0, scale: 0.9, opacity: 0.8 }}
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									whileInView={{ y: 0, scale: 1, opacity: 1 }}
									src={
										"/abd75d0571f689d3375c568d5eedc4404324305d-2816x1852.webp"
									}
									width={2816}
									height={1852}
									className="px-4 lg:px-24"
									alt=""
								/>
								<div className="flex flex-col gap-4">
									<h3 className="text-primary-red text-2xl font-medium lg:text-4xl text-center font-ibm_plex_sans">
										Explore to your DeFi&apos;s desire.
									</h3>
									<p className="text-default-text font-ibm_plex_sans">
										This is where your DeFi gets busy. Earn
										yield, vote on Zurvia&apos;s future, add
										liquidity, and much more, all from one
										place. It&apos;s your home base for using
										DeFi, not just holding it.
									</p>
								</div>
							</div>
						</div>
					</motion.section>

					<section className="bg-white py-24 flex flex-col gap-16 lg:py-24">
						<h2 className="text-center font-mono uppercase text-default-text text-sm">
							Friends who share our vision
						</h2>
						<Marquee autoFill={true}>
							<Image
								src={
									"/partners/6d1b65ca57cbcbd853e4fd635aaa352d1a38c2be-71x24.svg"
								}
								width={71}
								height={24}
								className="mx-6"
								alt=""
							/>
						</Marquee>
					</section>

					<motion.section
						initial={{ y: 60 }}
						transition={{ type: "spring", bounce: 0.25 }}
						whileInView={{ y: 0 }}
						className="bg-white px-6 lg:px-0 py-8"
					>
						<div className="px-6 pt-12 pb-80 rounded-3xl w-full bg-no-repeat text-center gcOsYZMtRU lg:px-24 lg:pt-12 bg-cover bg-center flex flex-col gap-4">
							<motion.h3
								initial={{ y: 30, opacity: 0 }}
								transition={{ type: "spring", bounce: 0.25 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true, amount: 1 }}
								className="font-ibm_plex_sans text-4xl text-default-text font-medium"
							>
								Experience Freedom
							</motion.h3>
							<motion.p
								initial={{ y: 30, opacity: 0 }}
								transition={{ type: "spring", bounce: 0.25 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true, amount: 1 }}
								className="text-center text-[#014a7a]"
							>
								Borrow, earn, and spend without selling a single
								sat. <br />
								No banks. No middlemen. <br />
								Just DeFi, working for you.
							</motion.p>
							<motion.button
								initial={{ y: 30, opacity: 0 }}
								transition={{ type: "spring", bounce: 0.25 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true, amount: 1 }}
								type="button"
								className="rounded-2xl bg-black/95 text-white px-6 py-3 w-fit mx-auto text-lg font-medium hover:bg-black hover:scale-105 hover:shadow shadow-black transition-[scale,shadow,bg]"
							>
								Get Started
							</motion.button>
						</div>
					</motion.section>

					<motion.section
						initial={{ y: 60 }}
						transition={{ type: "spring", bounce: 0.25 }}
						whileInView={{ y: 0 }}
						viewport={{ once: true, amount: 1 }}
						className="bg-white px-6 lg:pb-60 xl:px-16"
					>
						<Image
							src={"/faq-title-CNIoR6mx.svg"}
							className="scale-110"
							width={164}
							height={112}
							alt=""
						/>

						<div className="mt-6">
							{faqs.map((faq, index) => {
								return (
									<FaqCards
										key={index}
										title={faq["question"]}
										answer={faq["answer"]}
										isVisible={index === faqIndex}
										clickFunc={() => setFaqIndex(index)}
										fallBackFunc={() => setFaqIndex(null)}
									/>
								);
							})}
						</div>
					</motion.section>

					<motion.section
						initial={{ y: 30 }}
						transition={{ type: "spring", bounce: 0.25 }}
						whileInView={{ y: 0 }}
						viewport={{ once: true, amount: 1 }}
						className="bccekOxcUE p-10 pb-0 flex flex-col lg:flex-row-reverse lg:gap-5 lg:pr-20"
					>
						<div className="flex flex-col gap-6 mb-24 lg:mb-0 lg:justify-end lg:pb-10">
							<p className="font-ibm_plex_sans font-semibold text-4xl lg:text-[52px]">
								Shake up your inbox
							</p>
							<p className="text-2xl">
								Your DeFi. Your Future. Your Inbox.
							</p>

							<div className="text-lg grid lg:grid-cols-2 gap-3 mt-5">
								<input
									type="email"
									className="bg-white p-4 rounded-xl w-full truncate text-ellipsis"
									placeholder="Your email here..."
								/>
								<button className="bg-black p-4 text-center font-semibold text-white w-full rounded-2xl">
									Subscribe
								</button>
							</div>
						</div>

						<div className="mt-4 lg:w-4/5">
							<Image
								src={"/magic-8ball-CcZnWdIZ.png"}
								className="w-full lg:w-4/5"
								width={412}
								height={264}
								alt=""
							/>
						</div>
					</motion.section>

					<footer className="bg-black p-6 relative z-10 flex flex-col gap-8 w-full lg:p-24 gap-x-40 pb-24 lg:pb-40 pt-10">
						<motion.div
							initial={{ y: 60 }}
							transition={{ type: "spring", bounce: 0.25 }}
							whileInView={{ y: 0 }}
							className="flex flex-col lg:flex-row gap-4 lg:gap-x-20 justify-between"
						>
							<div className="lg:w-1/2 flex flex-col gap-4 lg:gap-8">
								<Image
									src={"/logo_bw.svg"}
									className="w-40 -ml-2"
									width={83}
									height={24}
									alt=""
								/>
								<p className="text-lg text-white/80 font-ibm_plex_sans">
									Zurvia is built by Adriel, as a startup that
									is dedicated to expanding DeFi with security
									as top priority. Creator of web3 based,
									eye-catching and responsive websites.
								</p>
								<section className="flex gap-6 items-center">
									{["x", "discord", "telegram", "reddit"].map(
										(x) => {
											return (
												<Link href={"#"} key={x}>
													<Image
														src={`/${x}.svg`}
														width={24}
														height={24}
														alt=""
													/>
												</Link>
											);
										}
									)}
								</section>
							</div>

							<div className="flex flex-col lg:flex-row gap-x-4 gap-y-8 mt-8 lg:mt-0 lg:w-3/5 justify-between">
								<FooterSection
									title={"Company"}
									children={[
										{ label: "Careers", href: "#" },
										{ label: "Contact", href: "#" },
									]}
								/>
								<FooterSection
									title={"Legal"}
									children={[
										{ label: "Privacy Policy", href: "#" },
										{
											label: "Terms of Service",
											href: "#",
										},
									]}
								/>
								<FooterSection
									title={"Feedback"}
									children={[
										{ label: "Report an Issue", href: "#" },
									]}
								/>
								<FooterSection
									title={"Resources"}
									children={[
										{ label: "Explorer", href: "#" },
										{ label: "Docs", href: "#" },
										{ label: "FAQs", href: "#" },
										{ label: "Blog", href: "#" },
									]}
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ y: 60 }}
							transition={{ type: "spring", bounce: 0.25 }}
							whileInView={{ y: 0 }}
							className="py-8 border-y border-[#3f3f3f] flex justify-between items-center text-lg text-white/80 mt-8"
						>
							<p className="">© 2025 Zurvia</p>
							<div className="flex gap-4">
								<Link href={"#"}>Terms</Link>
								<Link href={"#"}>Privacy</Link>
							</div>
						</motion.div>
					</footer>
				</>
			)}
		</>
	);
}
