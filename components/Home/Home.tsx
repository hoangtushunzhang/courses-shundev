import { Button } from "@/components/ui/button";
import Navbar from "./Navbar/Navbar";
import MobileNav from "./Navbar/MobileNav";
import { HiLightningBolt } from "react-icons/hi";
import Link from "next/link";
import Logo from "./Navbar/Logo";


const Home = () => {
  return (
    <section className="flex items-center justify-between border-b px-20 py-3 shadow-sm">
      <Link href={"/"} className="hidden lg:block">
        <Logo />
      </Link>
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
      <div className="flex items-center gap-5 justify-between">
        <div className="mr-20 hidden lg:block">
          <Navbar />
        </div>
        {/* {Button} */}
        <div className="flex items-center space-x-4 ">
          <Button className="bg-blue-800 hover:bg-blue/600 text-white rounded-xl shadow-lg px-6 py-3 flex items-center gap-2">
            <HiLightningBolt className="w-4 h-4" />
            Create Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
