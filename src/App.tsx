import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Description from "@/sections/Description";
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

      <Footer />
    </main>
  );
}

export default App;
