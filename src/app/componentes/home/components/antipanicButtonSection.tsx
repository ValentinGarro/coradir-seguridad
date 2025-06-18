"use client"
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function AntipanicButtonSection() {
    const lineRef = useRef(null);
    
    const isInView = useInView(lineRef, { amount: 0.5, once: false});
    
    return (
        <section className="flex flex-col justify-start items-start xl:flex-row-reverse bg-white w-[70%] xl:w-[90%] xl:px-20 container mx-auto pb-10 gap-5">  
            <div className="z-10 relative w-full flex flex-col items-start gap-5 xl:w-[70%]">
                <h2 className="text-2xl font-bold text-red text-left xl:text-5xl">BOTONES<br/> ANTIPÁNICO</h2>  
                <motion.div 
                  ref={lineRef} 
                  className="block border-r-4 border-b-4 xl:border-b-8 xl:border-r-8 border-red  absolute -top-20 xl:-top-25 right-9 xl:right-1/6   max-w-30 max-h-[6em] xl:max-h-[8em] xl:max-w-[20em]" 
                  initial={{ width: 0, height: 0 }}
                  animate={isInView ? { width: "20em", height: "8em" } : { width: 0, height: 0 }}
                  transition={{  
                    ease: "easeOut", 
                    width: { duration: isInView ? 1.5 : 0.5  , delay: isInView ? 1 : 0    }, 
                    height: { duration: 1, delay: isInView ? 0 : 1 }, 
                    
                  }}
                />
                <p className="text-lg text-left text-black xl:text-3xl">
                    Más de 43.000 personas ya cuentan con la protección de
                    nuestros botones ante emergencias de violencia.<br/><br/>
                    Proveemos una herramienta de <b>contención, cuidado y prevención.</b>
                </p> 
            </div>
            <div  
                className="relative w-fit xl:w-[50%] mx-auto"
            >
                <Image  
                    src="/img/mendozav.png" 
                    alt="Imagen del boton de seguridad" 
                    width={1000} 
                    height={1000} 
                    className="relative w-50 h-80 object-contain xl:object-contain xl:object-top z-20 xl:w-full xl:h-[30em]"
                />
                <span  className="z-10 block  rounded-bl-3xl bg-red-light w-50 h-76 xl:h-full xl:w-[60%] xl:-bottom-8 absolute bottom-0 xl:left-10 -left-5"></span>
                
            </div>
            
        </section>
    )
}