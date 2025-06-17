import Image from "next/image"
import BenefitsCard, { BenefitsCardProps } from "./benefitsCard"

export default function BenefitsSection() {
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
    return (
        <section className="flex flex-col items-start justify-start w-[70%] mx-auto gap-5 pb-10">
            <div className="z-10 relative w-full ">
                <h2 className="text-2xl font-bold text-red text-left ">BENEFICIOS<br/> CLAVE</h2>  
            </div>
            <section className="grid grid-cols-1 gap-5">
                {benefits.map((benefit, index) => (
                    <BenefitsCard key={index} {...benefit} hr={ index !== benefits.length-1 }/>
                ))}
            </section>
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
        </section>
    )
}