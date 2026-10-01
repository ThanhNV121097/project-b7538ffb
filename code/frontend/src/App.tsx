import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Showcase from "./components/Showcase";
import Catalogue from "./components/Catalogue";
import Trust from "./components/Trust";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import useLenis from "./components/useLenis";

/**
 * Tony Apple — genuine Apple accessories, 19 Duy Tân, Hà Nội.
 * Composes the one-page design: load-sequence hero, category marquee,
 * pinned product showcase, catalogue, trust, visit and footer.
 */
export default function App() {
  useLenis();
  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Showcase />
        <Catalogue />
        <Trust />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
