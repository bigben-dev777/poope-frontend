import About from "@/views/landing/about";
import Banner from "@/views/landing/banner";
import Blog from "@/views/landing/blog";
import Faq from "@/views/landing/faq";
import Hero from "@/views/landing/hero";
import Roadmap from "@/views/landing/roadmap";
import Tokenomic from "@/views/landing/tokenomics";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Tokenomic />
      <Roadmap />
      <Faq />
      <Blog />
      <Banner />
    </>
  );
};

export default Landing;
