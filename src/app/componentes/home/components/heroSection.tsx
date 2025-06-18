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
    const isInView = useInView(bannerRef, { amount: 0.5, once: false });
    return (
        <section className="flex flex-col justify-start items-center bg-white">
            < div
                className="w-full h-[50vh] xl:h-[100vh] flex items-end xl:items-center max-w-[1800px] justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/img/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} 
            >
                <motion.h1 
                ref={bannerRef}
                    className="bg-red/30 rounded-bl-3xl border-red/30 border-bl-2 text-4xl xl:text-6xl xl:py-5 font-bold ml-5 pl-5 xl:ml-20 xl:pl-20 py-2 pr-auto w-full text-left text-white"
                    initial={{ opacity: 0, x: "50%" }}
                    animate={isInView ? { opacity: 1, x: "0%" } : { opacity: 0, x: "50%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >PROTECCIÓN <br className="xl:hidden"/> INTEGRAL<br className="hidden xl:block"/> PARA <br className="xl:hidden"/> COMUNIDADES <br /> MÁS SEGURAS</motion.h1>
            </div> 
           <p className=" p-3 terxt-lg bg-red text-white text-center rounded-tr-2xl container rounded-bl-2xl w-[80%] xl:w-[40%] xl:!-mt-70 xl:!mb-35 xl:text-xl">
           Cuidamos tu tranquilidad, la de quienes te rodean y nos adaptamos a tus necesidades
           </p>
        </section>
    )
}