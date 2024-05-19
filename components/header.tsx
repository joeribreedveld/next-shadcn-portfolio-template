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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center py-4 px-4 md:container">
      <div className="w-full justify-start items-center">
        <h3 className="text-xl md:text-lg font-semibold tracking-tight">
          Joeri Breedveld
        </h3>
      </div>
      <NavigationMenu className="w-full items-center justify-center hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Experience
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full justify-end items-center hidden md:flex">
        <Button>Contact</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild className="w-full flex justify-end items-center">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <Link className="flex items-center gap-2" href="#">
            <h3 className="text-xl md:text-lg font-semibold tracking-tight">
              Joeri Breedveld
            </h3>
          </Link>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Project</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Experience</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
