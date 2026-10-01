import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import CasesSection from "./components/CasesSection";
import ProductRow from "./components/ProductRow";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

/**
 * Tony Apple — genuine Apple accessories, Duy Tân, Hanoi.
 *
 * Words come from content.json through <T/>, colours and type from
 * theme.css. Motion: Lenis smooth scroll, a split-text load sequence in the
 * hero, a pinned horizontal case rail, and scroll-triggered reveals through
 * the product rows.
 */
export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ground text-ink font-body">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <CasesSection />
          <ProductRow
            id="power"
            eyebrowKey="power.eyebrow"
            titleKey="power.title"
            subKey="power.sub"
            itemsKey="power.items"
            image="/images/charger.jpg"
          />
          <ProductRow
            id="audio"
            eyebrowKey="audio.eyebrow"
            titleKey="audio.title"
            subKey="audio.sub"
            itemsKey="audio.items"
            image="/images/earbuds.jpg"
            reverse
          />
          <Visit />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
