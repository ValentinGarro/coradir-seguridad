import Link from "next/link";

export default function SafeSection() {
    return (
        <section className="flex flex-col items-start justify-start container mx-auto gap-5 pb-10">
            <h2 className="text-4xl text-white bg-red p-8 text-left w-full"><b className="border-b-3 border-white">SOMOS</b> <i>SEGURIDAD</i></h2> 
            <section className="w-[70%] mx-auto flex flex-col items-center justify-center gap-5 text-xl">
                <p className="text-black text-left">
                    En <b>CORADIR S.A.</b> trabajamos desde hace más de 30 años desarrollando soluciones tecnológicas que fortalecen la seguridad ciudadana. 
                </p>
                <p className="text-black text-left">
                    Nuestra trayectoria nos posiciona como un referente confiable en el sector, con <b>más de 43.000 dispositivos de seguridad entregados</b> en planes estratégicos de protección urbana.
                </p>
                <p className="text-red text-left">
                    Cada dispositivo, cada solución implementada, es el resultado de un compromiso sostenido con la innovación, la calidad y la efectividad real en el territorio.
                </p>
                <p className="text-black font-bold text-left">
                    El centro de protección y monitoreo responde de forma inmediata ante cualquier emergencia, alertando al contacto o entidad adecuada según las necesidades de la persona afectada
                </p>
                <Link href="/contacto" className="text-red font-bold text-center border-1 border-red-light rounded-3xl cursor-pointer py-3 w-full">¡SABER MÁS!</Link>
            </section>
            
        </section>
    )
}