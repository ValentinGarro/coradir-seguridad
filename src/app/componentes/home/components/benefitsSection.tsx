"use client"
import Image from "next/image"
import BenefitsCard, { BenefitsCardProps } from "./benefitsCard"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function BenefitsSection() {
    const lineRef = useRef(null);
    const isImageInView = useInView(lineRef, { amount: 0.5, once: false });
    const benefits:BenefitsCardProps[] = [
        { 
            icon: "/icons/i-05.png", 
            alt: "Icono de respuesta inmediata", 
            title: <>RESPUESTA <br/> INMEDIATA</>, 
            description: "Comunicación directa con centros de monitoreo ante cualquier incidente." 
        },
        { 
            icon: "/icons/i-04.png", 
            alt: "Icono de geolocalización precisa", 
            title: <>GEOLOCALIZACIÓN <br/> PRECISA</>, 
            description: "Ubicación en tiempo real para una rápida intervención." 
        },
        { 
            icon: "/icons/i-03.png", 
            alt: "Icono de diseño discreto", 
            title: <>DISEÑO DISCRETO,<br/> COMPACTO Y <br/> RESISTENTE</>, 
            description: "Fácil de portar, pasa desapercibido y se adapta a distintos entornos sin llamar la atención." 
        },
        { 
            icon: "/icons/i-02.png", 
            alt: "Icono de integración sencilla", 
            title: <>INTEGRACIÓN <br/> SENCILLA</>, 
            description: "Compatible con sistemas de seguridad existentes en su institución." 
        },
    ]
    const linkRef = useRef(null);
    const isInView = useInView(linkRef, { amount: 0.5, once: false });
    return (
        <section className="relative flex flex-col items-start justify-start w-[70%] xl:w-full xl:max-w-[1800px] mx-auto gap-5 pb-10">
            {/* Desaparece en desktop */}
            <motion.div 
                className="border-l-4 border-t-4 border-red absolute xl:relative -top-20 max-w-[2em] max-h-[4em] xl:hidden"
                initial={{ width:0, height:0 }}
                animate={isImageInView ? { width:"8em", height:"16em", left:"0" } : { }}
                transition={{   
                    ease: "easeOut", 
                    height: { duration: 1 , delay: isImageInView ? 1 : 0  }, 
                    width: { duration:  1, delay:isImageInView ? 0 : 1 }, 
                    left: { duration:  1, delay:isImageInView ? 0 : 1 }, 
                    }}
                
            />
            {/* Aparece en desktop */}
            <motion.div 
                className="border-l-8 border-b-8 border-red absolute -top-2  left-[20em] hidden xl:block"
                initial={{ width:0, height:0 }}
                animate={isImageInView ? { width:"14em", height:"8em" } : { }}
                transition={{   
                    ease: "easeOut", 
                    width: { duration: 1 , delay: isImageInView ? 1 : 0  }, 
                    height: { duration:  1, delay:isImageInView ? 0 : 1 }, 
                    }}
                
            />
            <div className=" w-full xl:pl-[35em]" ref={lineRef}>
                <h2 className="text-2xl font-bold text-red text-left xl:text-5xl xl:mt-20  ">BENEFICIOS<br/> CLAVE</h2>  
            </div>
            <section className="grid grid-cols-1 gap-5 w-full xl:mx-auto xl:grid-cols-4 xl:py-20">
                {benefits.map((benefit, index) => (
                    <BenefitsCard key={index} {...benefit} hr={ index !== benefits.length-1 }/>
                ))}
            </section>
            <motion.div
                ref={linkRef}
                initial={{ scale: 1 }}
                animate={isInView ? { scale: 1.1   } : { scale: 1  }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }} 
                className="w-full xl:hidden"
            > 
                <button className="flex items-center justify-center gap-2 text-red font-bold w-full py-1  border-1 border-red-light rounded-3xl my-10">
                    FOLLETO 
                    <Image 
                        src="/icons/i_01.png" 
                        alt="Icono de folleto" 
                        width={1000} 
                        height={1000}
                        className="w-12 h-12"
                    />
                </button>
            </motion.div>
        </section>
    )
}