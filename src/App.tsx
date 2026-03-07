import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Description from "@/sections/Description";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6">
        <Description />
        <TechStack />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
