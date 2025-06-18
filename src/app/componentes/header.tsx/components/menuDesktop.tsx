"use client"
import Link from "next/link";
import { ourSites, products } from "./menuMobile";
import { motion } from "framer-motion";
export default function MenuDesktop({isRedBg}: {isRedBg: boolean}) {
    return (
        <div className="flex justify-start  items-start gap-5 text-white text-xl ">
            <a href="#" target="_blank" aria-label="Nuestra empresa" className="cursor-pointer hover:border-b-1 hover:border-white w-40">Nuestra empresa</a>
            <div className="flex flex-col justify-start items-start gap-3 w-40">
                <span className={`cursor-pointer  ${isRedBg ? 'border-b-1 border-white' : ''}`}>Nuestros sitios</span>
                <motion.div 
                initial={{ height: 0 , opacity: 0 ,display: 'none'}}
                animate={isRedBg ? { height: 'auto',opacity: 1 ,display: 'flex'} : {  }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex flex-col items-start gap-2 w-40"
                >
                    {
                        ourSites.map((site, index) => ( 
                            <Link href={site.href} key={`site-${index}`} className="cursor-pointer text-[18px] h-8 hover:border-b-1 hover:border-white" aria-label={site.ariaLabel}>{site.label}</Link>
                        ))
                    }
                </motion.div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 w-40">
                <span className={`cursor-pointer  ${isRedBg ? 'border-b-1 border-white' : ''}`}>Productos</span>
                <motion.div 
                initial={{ height: 0 , opacity: 0 ,display: 'none'}}
                animate={isRedBg ? { height: 'auto',opacity: 1 ,display: 'flex'} : {  }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start gap-2  w-44"
                >
                    {
                        products.map((site, index) => ( 
                            <Link href={site.href} key={`site-${index}`} className="cursor-pointer text-[18px] hover:border-b-1 hover:border-white" aria-label={site.ariaLabel}>{site.label}</Link>
                        ))
                    }
                </motion.div>
            </div>
            <Link 
                href="/contacto" 
                className="px-5 py-2 -mt-2 bg-red  rounded-xl cursor-pointer border-1 border-red hover:border-white transition-all duration-300 ease-in-out" 
                aria-label="Comunicate con nosotros"
            >Comunicate con nosotros</Link>
        </div>
    );
}