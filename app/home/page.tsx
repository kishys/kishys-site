import Footer from "@/components/footer";
import FadeIn from "@/components/fade-in";
import Template from "@/components/template";
import Background from "./components/background";
import Hero from "./components/hero";

export default function page() {
  return (
    <>
      <Background />
      <Template>
        <FadeIn>
          <Hero />
          <Footer />
        </FadeIn>
      </Template>
    </>
  );
}
