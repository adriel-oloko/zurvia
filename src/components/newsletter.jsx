import { motion } from 'motion/react'
import Image from 'next/image'

export default function Newsletter() {
    return (
        <motion.section initial={{ y: 30 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 1 }} className="relative bccekOxcUE p-10 pb-0 flex flex-col lg:flex-row-reverse lg:gap-5 lg:pr-20">
            <Image src={'/newsletter-background-DO6MO7Jf.webp'} className="object-cover object-bottom absolute inset-0 z-0" fill sizes="100vw" alt="" />
            <div className="flex flex-col gap-6 mb-24 lg:mb-0 lg:justify-end lg:pb-10 relative z-10">
                <p className="font-ibm_plex_sans font-semibold text-4xl lg:text-[52px]">Shake up your inbox</p>
                <p className="text-2xl">Your DeFi. Your Future. Your Inbox.</p>

                <div className="text-lg grid lg:grid-cols-2 gap-3 mt-5">
                    <input type="email" className="bg-white p-4 rounded-xl w-full truncate text-ellipsis" placeholder="Your email here..." />
                    <button name="Subscribe" className="bg-black p-4 text-center font-semibold text-white w-full rounded-2xl">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="mt-4 lg:w-4/5 relative z-10">
                <Image src={'/magic-8ball-CcZnWdIZ.png'} className="w-full lg:w-4/5" width={412} height={264} alt="" />
            </div>
        </motion.section>
    )
}
