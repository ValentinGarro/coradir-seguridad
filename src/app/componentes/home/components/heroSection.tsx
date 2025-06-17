export default function HeroSection() {
    return (
        <section className="flex flex-col justify-start items-center bg-white">
            <div
                className="w-full h-[50vh] flex items-end justify-center"
                style={{
                    backgroundImage: "url('/img/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            > 
                <h1 className="bg-red/30 rounded-bl-3xl border-red/30 border-bl-2 text-4xl font-bold ml-5 pl-5 py-2 pr-auto w-full text-left text-white">PROTECCIÓN <br /> INTEGRAL PARA <br /> COMUNIDADES <br /> MÁS SEGURAS</h1>
            </div> 
           <p className=" p-3 bg-red text-white rounded-bl-3xl rounded-tr-3xl text-center w-[80%]">
           Cuidamos tu tranquilidad, la de quienes te rodean y nos adaptamos a tus necesidades
           </p>
        </section>
    )
}