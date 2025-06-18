"use client"
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function HeroSection() {
    useEffect   (() => {
        window.scrollTo(0, 0);
      }, []);
    const bannerRef = useRef(null);
    const paragraphRef = useRef(null); 
    const isInView = useInView(bannerRef, { amount: 0.5, once: false });
    return (
        <section className="flex flex-col justify-start items-center bg-white">
            < div
                className="w-full h-[50vh] flex items-end justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/img/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} 
            >
                <motion.h1 
                ref={bannerRef}
                    className="bg-red/30 rounded-bl-3xl border-red/30 border-bl-2 text-4xl font-bold ml-5 pl-5 py-2 pr-auto w-full text-left text-white"
                    initial={{ opacity: 0, x: "50%" }}
                    animate={isInView ? { opacity: 1, x: "0%" } : { opacity: 0, x: "50%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >PROTECCIÓN <br /> INTEGRAL PARA <br /> COMUNIDADES <br /> MÁS SEGURAS</motion.h1>
            </div> 
           <motion.p 
                ref={paragraphRef}
                initial={{ borderBottomLeftRadius: "0", borderTopRightRadius: "0"}}
                animate={isInView ? {  borderBottomLeftRadius: "24px", borderTopRightRadius: "24px" } : {  borderBottomLeftRadius: "0", borderTopRightRadius: "0" }}
                transition={{ 
                    duration: 0.8, 
                    ease: "easeOut", 
                }}
                className=" p-3 bg-red text-white text-center w-[80%]">
           Cuidamos tu tranquilidad, la de quienes te rodean y nos adaptamos a tus necesidades
           </motion.p>
        </section>
    )
}