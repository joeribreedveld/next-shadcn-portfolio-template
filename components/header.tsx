"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center py-4 container">
      <div className="w-full flex justify-start items-center">
        <h3 className="text-xl font-semibold tracking-tight">
          Joeri Breedveld
        </h3>
      </div>
      <NavigationMenu className="w-full flex items-center justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full flex justify-end items-center">
        <Button>Contact</Button>
      </div>
    </header>
  );
}
