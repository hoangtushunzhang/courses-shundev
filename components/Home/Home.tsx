import Hero from "./Hero/Hero";
import Header from "./Navbar/Header";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 w-full z-50">
        <Header />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
