import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Description from "@/sections/Description";
import Projects from "@/sections/Projects";

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Description />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
