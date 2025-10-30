import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FooterSection } from "./reusableBlocks";


export default function Footer() {
	return (
		<footer className="bg-black p-6 relative z-10 flex flex-col gap-8 w-full lg:p-24 gap-x-40 pb-24 lg:pb-40 pt-10">
			<motion.div
				initial={{ y: 60 }}
				transition={{ type: "spring", bounce: 0.25 }}
				whileInView={{ y: 0 }}
				className="flex flex-col lg:flex-row gap-4 lg:gap-x-20 justify-between">
				<div className="lg:w-1/2 flex flex-col gap-4 lg:gap-8">
					<Image
						src={"/logo_bw.svg"}
						className="w-40 -ml-2"
						width={83}
						height={24}
						alt=""
					/>
					<p className="text-lg text-white/80 font-ibm_plex_sans">
						Zurvia is built by Adriel, as a startup that is
						dedicated to expanding DeFi with security as top
						priority. Creator of web3 based, eye-catching and
						responsive websites.
					</p>
					<section className="flex gap-6 items-center">
						{["x", "discord", "telegram", "reddit"].map((x) => {
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
						})}
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
						children={[{ label: "Report an Issue", href: "#" }]}
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
				className="py-8 border-y border-[#3f3f3f] flex justify-between items-center text-lg text-white/80 mt-8">
				<p className="">© 2025 Zurvia</p>
				<div className="flex gap-4">
					<Link href={"#"}>Terms</Link>
					<Link href={"#"}>Privacy</Link>
				</div>
			</motion.div>
		</footer>
	);
}
