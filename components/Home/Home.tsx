import About from "./About/About";
import ClientReview from "./ClientReview/ClientReview";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Header from "./Navbar/Header";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-50">
        <Header />
      </div>
      <Hero />
      <About />
      <Feature />
      <Services />
      <ClientReview />
      <Team />
    </div>
  );
};

export default Home;
