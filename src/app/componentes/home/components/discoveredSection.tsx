"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function DiscoveredSection() {
    const linkRef = useRef(null);
    const titleRef = useRef(null);
    const isInView = useInView(linkRef, { amount: 0.5, once: false });
    const isTitleInView = useInView(titleRef, { amount: 0.5, once: false });
    return (
        <section className="flex flex-col justify-start items-start bg-white w-[80%] mx-auto py-10 gap-5"> 
            <div className="">
                <h2 className="text-3xl font-black text-red text-left  ">DESCUBRÍ</h2>  
                <motion.div
                    ref={titleRef}
                    initial={{ width: 0 }}
                    animate={isTitleInView ? { width: ["80%", "20%", "100%"], } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-1 bg-red"
                />
            </div>
            <div className="py-3 px-8 bg-red-light text-white rounded-tr-2xl rounded-bl-2xl">
                <h3 className="text-2xl font-bold mb-5">Dispositivos de alarmas personales</h3>
                <p className="text-lg mb-8"> Nuestro sistema de alarmas personales está diseñado para ofrecer una respuesta
                    inmediata en situaciones de emergencia, garantizando la seguridad de los ciudadanos
                    y facilitando la labor de las fuerzas de seguridad.
                </p>
            </div>
            <div className="relative z-20 flex justify-end items-end w-full -mt-20 ">
            <motion.div
                ref={linkRef}
                initial={{ scale: 1 }}
                animate={isInView ? { scale: 1.1   } : { scale: 1  }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="z-10 absolute text-center top-10 left-5 py-2 bg-red text-white rounded-xl w-[60%] text-xl cursor-pointer"
            >
                 <Link href="/contacto">¡SABER MÁS!</Link>
            </motion.div>
                <Image 
                    src="/img/boton seguridad.png" 
                    alt="Imagen del boton de seguridad" 
                width={1000} 
                height={1000} 
                className="w-50 h-50 object-cover object-[10%_50%] "
                />
            </div>
           
        </section>
    )
}