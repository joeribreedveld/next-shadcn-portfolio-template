import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Appie Family",
    description:
      "Shared grocery list app for households. Let your family add items to the list and see them in real-time.",
    image:
      "https://source.unsplash.com/a-mother-unpacking-local-food-in-zero-waste-packaging-from-bag-with-help-of-daughter-in-kitchen-at-home-mG9ACs8XFTE",
    website: "https://appie.joeribreedveld.com/",
    github: "https://github.com/joeribreedveld/appie-family2",
  },
  {
    title: "Martial Arts Amsterdam",
    description:
      "An online platform for discovering and promoting martial arts dojos and workshops in Amsterdam.",
    image:
      "https://source.unsplash.com/boy-doing-karate-routines-during-golden-hour-igLzPKOvZNw",
    website: "https://martialartsamsterdam.com/",
    github: "https://github.com/joeribreedveld/martial-arts-amsterdam",
  },
  {
    title: "Hair Calendar",
    description:
      "Track your hair wash days and adjust your hair routine based on a personalized calendar.",
    image:
      "https://source.unsplash.com/a-woman-getting-her-hair-cut-by-a-hair-stylist-Md_DhaFsnCQ",
    website: "https://haircalendar.vercel.app",
    github: "https://github.com/joeribreedveld/hair-calendar",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20 md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4">
      {projects.map((project, index) => (
        <Card key={index} className="w-full flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={project.image}
              alt="Project"
              width={128}
              height={128}
              className="rounded-lg w-full aspect-[3/2] object-cover"
            />
            <ul className="flex gap-4">
              <li>
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="mt-6">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="mt-6">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
