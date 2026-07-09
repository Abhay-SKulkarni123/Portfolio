import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <>
            <Background />

            <Navbar />

            <Hero />

            <About />

            <Projects />

            <Skills />

            <Experience />

            <Contact />

            <Footer />
        </>
    );
}

export default MainLayout;