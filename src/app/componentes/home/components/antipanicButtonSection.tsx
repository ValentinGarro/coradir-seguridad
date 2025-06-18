"use client"
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
export default function AntipanicButtonSection() {
    const lineRef = useRef(null);
    const imageRef = useRef(null);
    const isInView = useInView(lineRef, { amount: 0.5, once: false });
    const isImageInView = useInView(imageRef, { amount: 0.5, once: false });
    return (
        <section className="flex flex-col justify-start items-start bg-white w-[70%] mx-auto pb-10 gap-5">  
            <div className="z-10 relative w-full ">
                <h2 className="text-2xl font-bold text-red text-left ">BOTONES<br/> ANTIPÁNICO</h2>  
                <motion.div 
                  ref={lineRef} 
                  className="block border-r-4 border-b-4 border-red  absolute -top-20 right-9" 
                  initial={{ width: 0, height: 0 }}
                  animate={isInView ? { width: "80px", height: "96px" } : { width: 0, height: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut", 
                    width: { delay: isInView ? 0.7 : 0 }, 
                  }}
                />
            </div>
            <p className="text-lg text-left text-black">
                Más de 43.000 personas ya cuentan con la protección de
                nuestros botones ante emergencias de violencia.
                Proveemos una herramienta de contención, cuidado y prevención.
            </p> 
            <div
                ref={imageRef} 
                className="relative w-fit mx-auto"
            >
                <Image 
                    src="/img/mendozav.png" 
                    alt="Imagen del boton de seguridad" 
                    width={1000} 
                    height={1000} 
                    className="relative w-50 h-80 object-contain z-20"
                />
                <span className="z-10 block  rounded-bl-3xl bg-red-light w-50 h-76  absolute -bottom-3 -left-5"></span>
                <motion.div 
                    className="block border-l-4 border-t-4 border-red absolute top-[90%] "
                    initial={{ width:0, height:0  ,left:"-24px" }}
                    animate={isImageInView ? { width:"24px", height:"72px", left:"-40px" } : { }}
                    transition={{
                        duration: 0.8,
                        width:  isImageInView ? { delay: 0   } : { },
                        left:     isImageInView ? { delay: 0.3 } : { },
                        height:   isImageInView ? { delay: 0.5 } : { }
                      }}
                />
            </div>
            
        </section>
    )
}