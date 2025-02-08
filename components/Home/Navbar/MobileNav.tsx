"use client";
import { navLinks } from "@/constant/constant";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import NavMenuItems from "./NavMenuItems";
import Link from "next/link";
import Logo from "./Logo";

const SHEET_SIDES = ["left"] as const;

type MobileNav = (typeof SHEET_SIDES)[number];

const MobileNav = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant={"outline"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="max-w-[200px]">
            <SheetTitle>
              <Link href={"/"}>
                <Logo />
              </Link>
            </SheetTitle>
            <hr className="my-3" />
            <div className="h-full fixed">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col justify-start items-center">
                  {navLinks.map((link) => (
                    <NavMenuItems
                      key={link.id}
                      href={link.url}
                      label={link.label}
                    />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
};

export default MobileNav;
