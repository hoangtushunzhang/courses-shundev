import { navLinks } from "@/constant/constant";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItems from "./NavMenuItems";

const Navbar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavMenuItems
              href={link.url}
              key={link.id}
              label={link.label}
            ></NavMenuItems>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
