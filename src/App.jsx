import { ReactLenis } from "lenis/react";
import { useState } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/ui/Cursor";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Layout>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </Layout>
    </ReactLenis>
  );
}

export default App;
