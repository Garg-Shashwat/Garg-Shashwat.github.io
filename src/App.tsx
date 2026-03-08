import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Description from "@/sections/Description";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Description />
      <Projects />
      <TechStack />
      <Experience />

      <Footer />
    </main>
  );
}

export default App;
