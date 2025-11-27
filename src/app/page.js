import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Values } from "./components/Values";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Values />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
