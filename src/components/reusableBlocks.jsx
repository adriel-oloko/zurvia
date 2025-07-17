import { useRef, useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link";

export function FaqCards ({title, answer, index, clickFunc, isVisible, fallBackFunc}) {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null)

    let rotate = 'rotate-90'
    isVisible? rotate = '-rotate-90': null;

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen]);

    const faqClickFunc = () => {
        if (isVisible) {
            fallBackFunc()
        } else {
            clickFunc()
        }
        setIsOpen(prev => !prev)

        console.log('red')
    }

    return (
        <motion.div
          initial={{ y: 60 }}
          transition={{ type: "spring", bounce: 0.25 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 1 }}

        className="">
            <button type="button" onClick={ faqClickFunc } className="flex justify-between items-center hover:bg-gray-200 focus:bg-gray-100 hover:focus:bg-gray-200 font-ibm_plex_sans px-6 py-8 border-b border-solid border-gray-300 text-black w-full">
                <p className="font-ibm_plex_sans font-semibold lg:text-xl">{ title }</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="000" className={`${rotate} transition-all relative top-0.25`}><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>
            </button>

            <AnimatePresence initial={false}>
                { isVisible &&
                <motion.div
                    initial={{ height: '0' }}
                    animate={{ height }}
                    exit={{ height: '0' }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    key="box"

                    className="overflow-hidden"
                    >
                    <p ref={contentRef} className="px-6 py-8 text-black lg:text-lg">{ answer }</p>
                </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}

export function FooterSection ({title, children}) {
    return (
        <div className="">
            <h2 className="text-white font-semibold font-ibm_plex_sans text-xl">{ title }</h2>
            <div className="flex flex-col gap-2 mt-2">
                { children.map((child, index) => {
                    return (
                        <Link key={index} href={child.href} className="font-semibold text-lg text-[#626262]">{ child.label }</Link>
                    )
                })}
            </div>
        </div>
    )
}


export function Loader() {
  return (
    <AnimatePresence initial={false}>
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <div className="animate-[ping_1.5s_ease-out_infinite] bg-gray-100 rounded-full size-24"></div>
      </motion.div>
    </AnimatePresence>
  );
}
