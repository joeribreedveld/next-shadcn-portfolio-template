import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="px-4 md:container py-12">
      <ul className="flex flex-wrap gap-4 justify-center">
        <li>
          <Button variant="outline">
            <Instagram className="h-4 w-4 mr-2" />
            @joeri.bv
          </Button>
        </li>
        <li>
          <Button variant="outline">
            <Github className="h-4 w-4 mr-2" />
            @joeribreedveld
          </Button>
        </li>
        <li>
          <Button variant="outline">
            <Linkedin className="h-4 w-4 mr-2" />
            @joeribreedveld
          </Button>
        </li>
        <li>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            joeri.breedveld123@gmail.com
          </Button>
        </li>
      </ul>
    </footer>
  );
}
