import Link from "next/link";
import Image from "next/image";
export default function DiscoveredSection() {
    return (
        <section className="flex flex-col justify-start items-start bg-white w-[80%] mx-auto py-10 gap-5"> 
            <h2 className="text-3xl font-black text-red text-left border-b-4 border-red">DESCUBRÍ</h2>  
            <div className="py-3 px-8 bg-red-light text-white rounded-tr-2xl rounded-bl-2xl">
                <h3 className="text-2xl font-bold mb-5">Dispositivos de alarmas personales</h3>
                <p className="text-lg mb-8"> Nuestro sistema de alarmas personales está diseñado para ofrecer una respuesta
                    inmediata en situaciones de emergencia, garantizando la seguridad de los ciudadanos
                    y facilitando la labor de las fuerzas de seguridad.
                </p>
            </div>
            <div className="relative z-20 flex justify-end items-end w-full -mt-20 ">
                <Link href="/contacto" className="z-10 absolute text-center top-10 left-5 py-2 bg-red text-white rounded-xl w-[60%] text-xl cursor-pointer">¡SABER MÁS!</Link>
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