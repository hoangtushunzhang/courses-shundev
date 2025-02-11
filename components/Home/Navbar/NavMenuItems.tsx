import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface NavMenuItemsProps {
  label: string;
  href: string;
}

const NavMenuItems = ({ label, href }: NavMenuItemsProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          href={href}
          onClick={handleClick}
          className={navigationMenuTriggerStyle()}
        >
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavMenuItems;
