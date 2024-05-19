import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-col items-center gap-2 md:pb-8 py-16 pt-24 max-w-3xl">
      <Badge className="my-2" variant="secondary">
        Website in development
      </Badge>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Front-end developer driven by learning and challenges.
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        I aim to create websites that are clean, well-organized, and provide an
        excellent user experience.
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Link href="/">
          <Button>Learn more</Button>
        </Link>
        <Link
          href="https://github.com/joeribreedveld"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
}
