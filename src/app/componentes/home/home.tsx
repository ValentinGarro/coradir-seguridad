import AntipanicButtonSection from "./components/antipanicButtonSection";
import BenefitsSection from "./components/benefitsSection";
import DiscoveredSection from "./components/discoveredSection";
import HeroSection from "./components/heroSection";
import SafeSection from "./components/safeSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <DiscoveredSection />
            <AntipanicButtonSection />
            <BenefitsSection />
            <SafeSection />
        </>
    )
}