'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AnimatePresence, motion, scale } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export function DesktopNavLink ({link, text, icon, children, isClient}) {
    const router = useRouter(null)

    const childElemRef = useRef(null)

    const clickEvent = (link) => {
        if (children && isClient) {
            document.querySelectorAll('.MnUDrkYKud').forEach(element => {
                element.classList.add('invisible', 'opacity-0')
                element.classList.remove('visible', 'opacity-100')
            });

            childElemRef.current.classList.add('visible', 'opacity-100')
            childElemRef.current.classList.remove('invisible', 'opacity-0')
        } else {
            router.push(link)
        }
    }

    return (
        <div className="relative">
            <div className="hidden scale-1 visible opacity-100"></div>
            <button onClick={ () => clickEvent(link) } className="text-black fill-black px-4 py-2 rounded-full hover:bg-black hover:text-white hover:fill-white font-inter font-semibold hover:transition-colors flex focus:bg-black/5 focus:hover:bg-black">
                { text }
                { children && <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" className="rotate-90 relative -top-0.25 -right-1.75"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg> }
            </button>

            {(children) && 
            <div ref={childElemRef} className="MnUDrkYKud absolute bg-white border border-solid border-gray-200 shadow shadow-gray-200 rounded z-10 left-4 top-14 p-2 flex gap-2 flex-nowrap opacity-0 transition-all duration-500 invisible">
                { children.map((child, index) => {
                    return (
                        <a key={index} href={child.href} className="text-black font-semibold text-nowrap flex items-center p-2 rounded hover:bg-gray-50">{ child.label } { icon && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="000" className="-rotate-45 relative top-0.25"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg> }</a>
                    )
                }) }
            </div>
            }
        </div>
    )
}

export function MobileNavSection () {
    const [visibleIndex, setVisibleIndex] = useState(null)
    const navChildren = [
        { label: 'Mainnet', link: '#' },
        { label: 'Ecosystem', link: '#' },
        { label: 'Features', children: [
            {label: 'Borrow', href: '#'},
            {label: 'MUSD', href: '#'}
        ]},
        { label: 'Build', children: [
            {label: 'Github', href: '#'},
            {label: 'Passport Plugin', href: '#'},
            {label: 'Audits', href: '#'},
            {label: 'Docs', href: '#'}
        ]},
        { label: 'Learn', children: [
            {label: 'Blog', href: '#'},
            {label: 'FAQs', href: '#'}
        ]},
    ]
    return (
        <motion.div
          initial={{ opacity: 0.5, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}

          transition={{ type: "spring", bounce: 0.25 }}
        className="absolute inset-0 bg-white z-40 flex flex-col gap-6 justify-center max-h-screen p-6 text-left">
            {navChildren.map((children, index) => {
                if (children.link) {
                    return (
                        <Link key={index} href={children.link} className="font-semibold text-4xl font-ibm_plex_sans">{ children.label }</Link>
                    )
                } else {
                    let rotate = 'rotate-90';
                    visibleIndex === index? rotate = '-rotate-90': null;
                    return (
                        <div key={index} className="lhRsrdTAPN flex flex-col">
                            <div className="">
                                <button onClick={ () => visibleIndex === index? setVisibleIndex(null): setVisibleIndex(index)} className="font-semibold text-4xl font-ibm_plex_sans fill-black text-black focus:text-black/50 focus:fill-black/50 text-left flex items-center">{ children.label }
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" className={`${visibleIndex === index? '-rotate-90': 'rotate-90'} transition-all relative top-0.25`}><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg></button>
                            </div>
                            <AnimatePresence initial={false}>
                                { visibleIndex === index && <motion.div
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: '100px', marginTop: 16 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="kCRgdatDLn flex flex-col gap-2 transition duration-1000 max-h-fit">
                                    { children.children.map((el, index) => {
                                        return (
                                            <Link key={index} href={el.href} className="text-xl flex gap-1 items-center">{ el.label } { visibleIndex === 3 && <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="000" className="-rotate-45 relative top-0.25"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg> }</Link>
                                        )
                                    })} 
                                </motion.div>}
                            </AnimatePresence>
                        </div>
                    )
                }
            })}

            <ConnectButton />
        </motion.div>
    )
}