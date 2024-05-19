import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Page() {
  return (
    <main className="container py-32 flex items-center flex-col">
      <Badge variant="secondary">Website in maintenance</Badge>
      <h1 className="scroll-m-20 text-4xl mt-8 font-extrabold tracking-tight lg:text-5xl max-w-2xl text-center">
        Front-end developer driven by learning and challenges.
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground mt-6">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </p>
      <div className="mt-8 flex gap-4 items-center">
        <Button>Learn more</Button>
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </main>
  );
}
