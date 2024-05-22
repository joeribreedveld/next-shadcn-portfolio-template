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
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="flex items-center py-4 px-4 md:container w-full">
      <div className="w-full justify-start items-center">
        <Link href="/" className="flex items-center">
          <h3 className="text-lg font-semibold tracking-tight">
            Joeri Breedveld
          </h3>
        </Link>
      </div>
      <NavigationMenu className="w-full items-center justify-center hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(navigationMenuTriggerStyle())}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(navigationMenuTriggerStyle())}
            >
              <Link href="/experience">Experience</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full justify-end items-center hidden md:flex">
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
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
          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">
                Joeri Breedveld
              </h3>
            </Link>
          </SheetTrigger>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <SheetTrigger asChild>
                <Link href="/">Project</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/about">About</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/experience">Experience</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/contact">Contact</Link>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
