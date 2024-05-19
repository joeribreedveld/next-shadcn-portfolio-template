import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 md:container h-24 flex items-center justify-between">
      <p className="text-sm text-muted-foreground">Made by Joeri Breedveld</p>
      <ul className="flex gap-4">
        <li>
          <Link href="#">
            <Instagram className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Github className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Linkedin className="h-6 w-6" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Mail className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
