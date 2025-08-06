import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Advisory from "@/components/Advisory";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Advisory />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
