import { motion } from "motion/react";
import Image from "next/image";
import { FaqCards } from "./reusableBlocks";

export default function FAQs() {
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

	return (
		<motion.section
			initial={{ y: 60 }}
			transition={{ type: "spring", bounce: 0.25 }}
			whileInView={{ y: 0 }}
			viewport={{ once: true, amount: 1 }}
			className="bg-white px-6 lg:pb-60 xl:px-16">
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
	);
}
