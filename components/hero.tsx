import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-col items-center gap-2 md:pb-8 py-16 pt-24 max-w-3xl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Front-end developer driven by learning and challenges.
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Button>Learn more</Button>
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </section>
  );
}
