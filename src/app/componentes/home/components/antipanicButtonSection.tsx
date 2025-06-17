import Image from "next/image";

export default function AntipanicButtonSection() {
    return (
        <section className="flex flex-col justify-start items-start bg-white w-[70%] mx-auto pb-10 gap-5">  
            <div className="z-10 relative w-full ">
                <h2 className="text-2xl font-bold text-red text-left ">BOTONES<br/> ANTIPÁNICO</h2>  
                <span className="block border-r-4 border-b-4 border-red h-24 w-20 absolute -top-20 right-9"></span>
            </div>
            <p className="text-lg text-left text-black">
                Más de 43.000 personas ya cuentan con la protección de
                nuestros botones ante emergencias de violencia.
                Proveemos una herramienta de contención, cuidado y prevención.
            </p>
            <div className="relative w-fit mx-auto">
                <Image 
                    src="/img/mendozav.png" 
                    alt="Imagen del boton de seguridad" 
                    width={1000} 
                    height={1000} 
                    className="relative w-50 h-80 object-contain z-20"
                />
                <span className="z-10 block  rounded-bl-3xl bg-red-light w-50 h-76  absolute -bottom-3 -left-5"></span>
                <span className="block border-l-4 border-t-4 border-red h-18 w-6 absolute -bottom-10 -left-10"></span>
            </div>
        </section>
    )
}