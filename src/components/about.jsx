import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
	return (
		<motion.section
			initial={{ y: 60 }}
			transition={{ type: "spring", bounce: 0.25 }}
			whileInView={{ y: 0 }}
			viewport={{ once: true, amount: 0 }}
			className="bg-white rounded-t-3xl px-6 py-10 lg:py-16 lg:px-8 -mt-6 relative">
			<motion.p
				initial={{ y: 60, opacity: 0 }}
				transition={{ type: "spring", bounce: 0.25 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				className="text-default-text text-2xl lg:text-3xl font-medium lg:w-1/2 mx-auto text-center lg:pb-6">
				Zurvia is the DeFi finance app that empowers you to live off of
				DeFi, without selling it.
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
						className="bg-zurvia-yellow grid lg:grid-cols-2 rounded-2xl">
						<div className="flex flex-col gap-2 p-6 pt-8 lg:p-12">
							<h2 className="text-3xl text-default-text font-medium lg:text-4xl font-ibm_plex_sans">
								Borrow with DeFi
							</h2>
							<p className="text-[#944500]">
								Get a line of credit using your DeFi as
								collateral. Decentralized, flexible, and
								intuitive.
							</p>

							<Link
								name="Unlock Credit"
								href={"#"}
								className="text-default-text font-semibold flex gap-2 mt-4">
								Unlock Credit
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#000"
									className="relative top-0.5">
									<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
								</svg>
							</Link>
						</div>
						<div
							id="borrow-graphic-rVBP-6fQ"
							className="bg-no-repeat bg-cover rounded-b-2xl">
							<Image
								src={"/borrow-graphic-rVBP-6fQ.webp"}
								className="rounded-b-2xl h-full lg:rounded-none lg:rounded-r-2xl"
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
						className="bg-[#eff3db] grid lg:grid-cols-2 rounded-2xl">
						<div className="bg-no-repeat bg-cover rounded-l-2xl hidden lg:block">
							<Image
								src={"/growbtc-graphic-BYwcQB4p.webp"}
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
								Get a line of credit using your DeFi as
								collateral. Decentralized, flexible, and
								intuitive.
							</p>

							<Link
								name="Start Earning"
								href={"#"}
								className="text-default-text font-semibold flex gap-2 mt-4">
								Start Earning
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 -960 960 960"
									width="20px"
									fill="#000"
									className="relative top-0.5">
									<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
								</svg>
							</Link>
						</div>
						<div
							id="growbtc-graphic-BYwcQB4p"
							className="bg-no-repeat bg-cover rounded-b-2xl lg:hidden">
							<Image
								src={"/growbtc-graphic-BYwcQB4p.webp"}
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
					className="bg-[#FAE2DF] flex flex-col rounded-2xl lg:w-1/3 h-auto">
					<div className="flex flex-col gap-2 p-6 pt-8 lg:p-12">
						<h2 className="text-3xl text-default-text font-medium lg:text-4xl font-ibm_plex_sans">
							Stability Backed By DeFi
						</h2>
						<p className="text-[#6B0036]">
							Get a line of credit using your DeFi as collateral.
							Decentralized, flexible, and intuitive.
						</p>

						<Link
							name="Learn More"
							href={"#"}
							className="text-default-text font-semibold flex gap-2 mt-4">
							Learn More
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#000"
								className="relative top-0.5">
								<path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
							</svg>
						</Link>
					</div>
					<div
						id="stability-graphic-CaEoUcmV"
						className="bg-no-repeat bg-cover rounded-b-2xl h-full bg-center">
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
	);
}
