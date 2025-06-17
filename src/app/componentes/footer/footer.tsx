"use client"
import Link from "next/link"
import { ourSites, products, socialMedia } from "../header.tsx/components/menuMobile"
import Image from "next/image"

export default function Footer() { 
    if(!ourSites || !products || !socialMedia){
        return null;
    }
    return (
        <footer className="flex flex-col items-start justify-start container bg-red p-10 text-white">
            <h4  className="text-xl w-full text-left font-bold" > Nuestros sitios   </h4>
            {
               ourSites.map((site, index) => ( 
                    <Link href={site.href} key={`site-${index}`} className="p-2 text-lg  text-left" aria-label={site.ariaLabel}>{site.label}</Link>
                ))
            } 
            <h4  className=" text-xl w-full text-left mt-5 font-bold" > Productos   </h4>                  
            {
                products.map((product, index) => (
                    <Link href={product.href} key={`product-${index}`} className="p-1 text-xl text-left flex items-center justify-between cursor-pointer" aria-label={product.ariaLabel}>{product.label}</Link>
                ))
            }   
            <h3 className="text-xl font-bold mt-5">Empresa </h3>
            <Link href="/contacto" className="text-lg" aria-label="Contacto">Contacto</Link>
            <Link href="/#" className="text-lg" aria-label="Sobre nosotros">Sobre nosotros</Link>
            <span className="flex items-center justify-start md:justify-start gap-3   text-white mt-4">
                {
                    socialMedia.map((social, index) => (
                        <a href={social.href} key={`social-${index}`} className="hover:shadow-[0_1px_5px_rgba(255,255,255,0.3)]">
                            <Image       
                                loading="lazy"
                                aria-label={social.ariaLabel}
                                src={social.img}
                                alt={social.alt}
                                width={600}
                                height={600}
                                className="w-6 h-6 xl:w-8 xl:h-8"
                            />
                        </a>
                    ))
                }
            </span> 
            <hr className="w-full h-[1px] bg-white my-5" />
            <p className="text-white text-xl uppercase w-full text-center mb-2"><b >Coradir S.A.</b>  </p>
            <p className="text-white text-xs uppercase w-full text-center ">© Todos los derechos reservados.</p>
        </footer>
    )
}