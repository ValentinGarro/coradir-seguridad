import Image from "next/image";
import { JSX } from "react";

export interface BenefitsCardProps {
    icon: string;
    alt: string;
    title: JSX.Element;
    description: string;
    hr?: boolean;
}
export default function BenefitsCard({ icon, alt, title, description, hr }: BenefitsCardProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
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
        </div>
    )
}