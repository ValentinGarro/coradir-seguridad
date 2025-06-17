"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuMobile from "./components/menuMobile";  
import { useMediaQuery } from "@/hooks/useMediaQury";

export default function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const [isRedBg, setIsRedBg] = useState( pathname === "/contacto"); 
    const isMobile = useMediaQuery("(max-width: 768px)");
    useEffect(() => {
        if(pathname === "/contacto") return;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 10);
            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setShow(false); // Scrolling down
            } else {
                setShow(true); // Scrolling up
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]); 
    useEffect(()=>{
        if(pathname === "/contacto") return;
        if(!openMenu){
            setTimeout(()=>setIsRedBg(false), 500)
        }else{
            setIsRedBg(openMenu)
        }
    },[openMenu])
    return (
        <>
            <header
            className={`fixed top-0 left-0 p-4 w-full z-[9999] 
                ${show ? 'translate-y-0' : '-translate-y-full transition-transform duration-300'}
                ${isRedBg ? 'bg-red transition-' : ( scrolled ? 'backdrop-blur-md bg-black/20' : 'bg-transparent')}
            `}
            >
                <div className="container flex justify-between items-center">
                    <h1 className="text-white text-xl uppercase"><b >Coradir</b> <i className="text-white/80">Seguridad</i></h1>
                    <button 
                        className="flex flex-col gap-1 items-center justify-between w-10 min-h-9 p-2 py-2.5 rounded-full border-1 transition-all duration-300"
                        aria-label="Menu"
                        onClick={() => setOpenMenu(!openMenu)}
                        style={{borderColor: openMenu ? 'white' : 'transparent' }}
                    >
                        <span
                            className="burger_slide"
                            style={{
                                transform: openMenu
                                    ? 'rotate(45deg) translate( 25%, 150%)'
                                    : 'none',
                            }}
                        ></span>
                        <span
                            className="burger_slide"
                            style={{
                                opacity: openMenu ? 0 : 1,
                                transition: 'opacity 300ms',
                            }}
                        ></span>
                        <span
                            className="burger_slide"
                            style={{
                                transform: openMenu
                                    ? 'rotate(-45deg) translate( 25%, -150%)'
                                    : 'none',
                            }}
                        ></span>
                    </button>
                </div>
                <span className="block h-0.5 bg-white w-[99%] rounded-2xl mx-auto  mt-2" style={{display: isRedBg ? 'none' : 'block'}}></span> 
            </header>
            {isMobile && <MenuMobile openMenu={openMenu} />}
        </>
    );
}