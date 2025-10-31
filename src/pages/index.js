/* eslint-disable react/no-children-prop */
import { DesktopNavLink } from '@/components/navComponents'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Loader } from '@/components/reusableBlocks'
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { AnimatePresence, motion } from 'motion/react'
import { MobileNavSection } from '@/components/navComponents'

import { WandSparkles, Zap, ShieldCheck, RefreshCw } from 'lucide-react'

import dynamic from 'next/dynamic'
const About = dynamic(() => import('@/components/about'), { ssr: false })
const Explore = dynamic(() => import('@/components/explore'), { ssr: false })
const FAQs = dynamic(() => import('@/components/faqs'), { ssr: false })
const Newsletter = dynamic(() => import('@/components/newsletter'), {
    ssr: false,
})
const Footer = dynamic(() => import('@/components/footer'), { ssr: false })

export async function getStaticProps() {
    return { props: {} } // SSG build-time render
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [isChildVisible, setIsChildVisible] = useState([false, false, false])
    const [isClient, setIsClient] = useState(true)

    const [mobileNav, setMobileNav] = useState(false)

    const clickFunc = (index) => {
        let list = [false, false, false]
        list[index] = true
        setIsChildVisible(list)
        console.log(isChildVisible)
    }

    const screenTap = () => {
        document.querySelectorAll('.MnUDrkYKud').forEach((element) => {
            element.classList.add('invisible', 'opacity-0')
            element.classList.remove('visible', 'opacity-100')
        })
    }

    const heroIconAnimationVariants = (delay) => {
        return {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    //duration: 1,
                    //delay: delay,
                    ease: 'easeInOut',
                },
            },
        }
    }

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading && <Loader />}
            <header className="p-6 min-h-[110vh] bg-no-repeat bg-cover relative flex flex-col justify-center items-center">
                <Image src={'/gradient-bg-GgcszqHZ.webp'} className="absolute inset-0 min-h-full object-cover" fill priority quality={85} alt="" />
                <AnimatePresence initial={false}>{mobileNav && <MobileNavSection />}</AnimatePresence>

                <nav className="flex justify-between items-center w-full absolute p-6 top-0 z-50">
                    <Image src={'/logo.svg'} className="w-32 relative -top-0.5" width={83} height={24} alt="Logo" />

                    <div className="hidden lg:flex gap-4">
                        <DesktopNavLink link={'#'} text={'Mainnet'} isClient={isClient} />
                        <DesktopNavLink link={'#'} text={'Ecosystem'} isClient={isClient} />
                        <DesktopNavLink
                            text={'Features'}
                            isVisible={[isChildVisible[0], 0]}
                            clickFunc={() => clickFunc(0)}
                            children={[
                                { label: 'Borrow', href: '#' },
                                { label: 'MUSD', href: '#' },
                            ]}
                            isClient={isClient}
                        />

                        <DesktopNavLink
                            text={'Build'}
                            isVisible={isChildVisible[1]}
                            clickFunc={() => clickFunc(1)}
                            icon={true}
                            children={[
                                { label: 'Github', href: '#' },
                                { label: 'Passport Plugin', href: '#' },
                                { label: 'Audits', href: '#' },
                                { label: 'Docs', href: '#' },
                            ]}
                            isClient={isClient}
                        />
                        <DesktopNavLink
                            text={'Learn'}
                            isVisible={isChildVisible[2]}
                            clickFunc={() => clickFunc(2)}
                            children={[
                                { label: 'Blog', href: '#' },
                                { label: 'FAQs', href: '#' },
                            ]}
                            isClient={isClient}
                        />
                    </div>
                    <div>
                        <button name="Menu Toggle" onClick={() => (mobileNav ? setMobileNav(false) : setMobileNav(true))} className="lg:hidden">
                            {mobileNav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="000" className="relative top-1">
                                    <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000" className="relative top-1">
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
                        <motion.div variants={heroIconAnimationVariants(0.6)} initial="initial" animate="animate" className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md top-0 inset-x-0 mx-auto">
                            <ShieldCheck />
                        </motion.div>
                        <motion.div variants={heroIconAnimationVariants(0.8)} initial="initial" animate="animate" className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md top-0 inset-x-0 mx-auto">
                            <RefreshCw />
                        </motion.div>
                    </div>

                    <div className="w-full flex justify-between absolute top-20 md:top-60 px-8 md:px-0">
                        <motion.div variants={heroIconAnimationVariants(0.4)} initial="initial" animate="animate" className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                            <Zap />
                        </motion.div>
                        <motion.div variants={heroIconAnimationVariants(1.0)} initial="initial" animate="animate" className="size-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                            <WandSparkles />
                        </motion.div>
                    </div>
                </div>

                <section onClick={isClient ? screenTap : undefined} className="text-center flex flex-col gap-4 items-center -mt-24 md:mt-24 relative">
                    <motion.p variants={heroIconAnimationVariants(0.6)} initial="initial" animate="animate" className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 font-medium font-inter shadow-md shadow-[#f7931a10]">
                        100% transparent
                    </motion.p>
                    <motion.h1 variants={heroIconAnimationVariants(0.8)} initial="initial" animate="animate" className={'font-sans bg-linear-to-r from-white via-black to-white text-transparent bg-clip-text text-4xl lg:text-5xl xl:text-6xl lg:px-24 lg:w-4/5 mx-auto font-bold relative z-10'}>
                        Discover the financial uplifiting power of
                        <br />
                        <span className="px-6 py-2 text-white border-solid bg-[#f7931a] backdrop-blur-3xl relative -z-0 mt-0.75 inline-block">Web3.0</span>
                    </motion.h1>
                    <motion.p variants={heroIconAnimationVariants(1.0)} initial="initial" animate="animate" className="text-default-text text-xl font-inter">
                        Bring everyday finance to your portfolio
                    </motion.p>
                    <motion.section variants={heroIconAnimationVariants(0.6)} initial="initial" animate="animate" className="grid grid-cols-2 w-fit gap-2">
                        <button name="Explore Zurvia" className="bg-black/95 px-4 py-2 rounded-md font-semibold text-white lg:text-lg lg:px-6 hover:bg-black hover:scale-105 hover:shadow shadow-black transition-all">
                            Explore Zurvia
                        </button>
                        <ConnectButton />
                    </motion.section>
                </section>
            </header>

            <About />

            <Explore />

            <section className="bg-white py-24 flex flex-col gap-16 lg:py-24">
                <h2 className="text-center font-mono uppercase text-default-text text-sm">Friends who share our vision</h2>
                <Marquee autoFill={true}>
                    <Image src={'/partners/6d1b65ca57cbcbd853e4fd635aaa352d1a38c2be-71x24.svg'} width={71} height={24} className="mx-6" alt="ledger" />
                </Marquee>
            </section>

            <motion.section initial={{ y: 60 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0 }} className="bg-white px-6 lg:px-0 py-8">
                <div className="relative px-6 pt-12 pb-80 rounded-3xl w-full bg-no-repeat text-center lg:px-24 lg:pt-12 bg-cover bg-center flex flex-col gap-4">
                    <Image src={'/maze-background-DNA5qxlH.webp'} className="absolute inset-0 h-full object-cover object-center rounded-3xl" width={1440} height={652} alt="" />
                    <motion.h3 initial={{ y: 30, opacity: 0 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 1 }} className="font-ibm_plex_sans text-4xl text-default-text font-medium relative z-10">
                        Experience Freedom
                    </motion.h3>
                    <motion.p initial={{ y: 30, opacity: 0 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 1 }} className="text-center text-[#014a7a] relative z-10">
                        Borrow, earn, and spend without selling a single sat. <br />
                        No banks. No middlemen. <br />
                        Just DeFi, working for you.
                    </motion.p>
                    <motion.button initial={{ y: 30, opacity: 0 }} transition={{ type: 'spring', bounce: 0.25 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 1 }} type="button" className="relative z-10 rounded-2xl bg-black/95 text-white px-6 py-3 w-fit mx-auto text-lg font-medium hover:bg-black hover:scale-105 hover:shadow shadow-black transition-[scale,shadow,bg]">
                        Get Started
                    </motion.button>
                </div>
            </motion.section>

            <FAQs />

            <Newsletter />

            <Footer />
        </>
    )
}
