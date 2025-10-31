import { motion } from "motion/react"

motion
export default function Explore() {
    return (
        <motion.section initial={{ y: 60 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0 }} className="bg-[#f4f0ed] p-6 lg:py-12 flex flex-col gap-6 items-center">
            <motion.h2 initial={{ y: 30 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0 }} className="text-[#FF004D] font-ibm_plex_sans font-medium text-3xl lg:text-4xl text-center">
                Ready for the DeFi Age
            </motion.h2>

            <motion.div initial={{ y: 30 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0 }} className="flex flex-wrap items-center justify-center w-full gap-4">
                <p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff004d">
                        <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
                    </svg>
                    permissionless
                </p>
                <p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff004d">
                        <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
                    </svg>
                    Bank-free
                </p>
                <p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff004d">
                        <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
                    </svg>
                    Intuitive
                </p>
                <p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff004d">
                        <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
                    </svg>
                    Secure
                </p>
                <p className="flex gap-2 uppercase font-sans text-gray-500 text-sm items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff004d">
                        <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z" />
                    </svg>
                    Decentralized
                </p>
            </motion.div>

            <button name="Explore Zurvia" className="bg-black/95 px-4 py-2 mx-auto w-fit rounded-md font-medium text-white hover:bg-black hover:scale-105 hover:shadow shadow-black transition-all">
                Explore Zurvia
            </button>

            <div className="flex flex-col gap-24 md:px-24 mt-6 lg:gap-24">
                <div className="flex flex-col gap-4 md:flex-row lg:gap-20">
                    <motion.img
                        initial={{ y: 0, scale: 0.9, opacity: 0.8 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                        }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        src={'/0b8e4a2d3f5381c45e0c547e74bc71e37be05fbb-1870x1232.webp'}
                        className="lg:w-3/5"
                        width={1820}
                        height={1232}
                        alt="Zurvia Borrow User Interface"
                    />
                    <div className="lg:w-2/5 flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-0 justify-center">
                        <h3 className="text-primary-red text-2xl font-medium lg:text-4xl">Borrow securely, spend confidently</h3>
                        <p className="text-default-text lg:text-">Unlock liquidity in minutes without selling your DeFi. View your loan status, track your collateral ratio, and manage risk, all directly in the Zurvia app. Stay in control with real-time insight into your position.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row-reverse lg:gap-20">
                    <motion.img
                        initial={{ y: 0, scale: 0.9, opacity: 0.8 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                        }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        src={'/d4907bf8e0b4b724aa1d65948603f3b18f702ef9-1870x1216.webp'}
                        className="lg:w-3/5"
                        width={935}
                        height={608}
                        alt="Zurvia profile user interface"
                    />
                    <div className="lg:w-2/5 flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-0 justify-center">
                        <h3 className="text-primary-red text-2xl font-medium lg:text-4xl">Know yourself, know your wealth.</h3>
                        <p className="text-default-text lg:text-">Your Zurvia wallet gives you a complete view of your DeFi-powered portfolio—BTC, MUSD, mats, NFTs, and more—all in one place. No complexity, no confusion. Just a clear, seamless portal to your onchain wealth.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center text-center lg:flex-col-reverse">
                    <motion.img
                        initial={{ y: 0, scale: 0.9, opacity: 0.8 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                        }}
                        whileInView={{ y: 0, scale: 1, opacity: 1 }}
                        src={'/abd75d0571f689d3375c568d5eedc4404324305d-2816x1852.webp'}
                        width={2816}
                        height={1852}
                        className="px-4 lg:px-24"
                        alt="zurvia explore user interface"
                    />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-primary-red text-2xl font-medium lg:text-4xl text-center font-ibm_plex_sans">Explore to your DeFi&apos;s desire.</h3>
                        <p className="text-default-text font-ibm_plex_sans">This is where your DeFi gets busy. Earn yield, vote on Zurvia&apos;s future, add liquidity, and much more, all from one place. It&apos;s your home base for using DeFi, not just holding it.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
