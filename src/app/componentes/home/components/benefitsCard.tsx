"use client"
import Image from "next/image";
import { JSX } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export interface BenefitsCardProps {
    icon: string;
    alt: string;
    title: JSX.Element;
    description: string;
    hr?: boolean;
}
export default function BenefitsCard({ icon, alt, title, description, hr }: BenefitsCardProps) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.5, once: false });
    return (
        <motion.div 
            ref={cardRef} 
            className="flex flex-col justify-center items-center gap-5"
            initial={{ scale: 0.7 }}
            animate={isInView ? { scale: 1 } : {   }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Image
                src={icon}
                alt={alt}
                width={1000}
                height={1000}
                className="w-40 h-40 object-contain"
            />
            <h3 className="text-2xl font-bold text-white bg-red px-5 py-2 rounded-tr-2xl rounded-bl-2xl text-center">{title}</h3>
            <p className="text-lg text-black text-center w-[70%]">{description}</p>
            {hr && <hr className="w-full h-[0.5px] bg-black"/>}
        </motion.div>
    )
}