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
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Appie Family",
    description:
      "Shared grocery list app for households. Let your family add items to the list and see them in real-time.",
    image:
      "https://source.unsplash.com/a-mother-unpacking-local-food-in-zero-waste-packaging-from-bag-with-help-of-daughter-in-kitchen-at-home-mG9ACs8XFTE",
    website: "https://appie.joeribreedveld.com/",
    github: "https://github.com/joeribreedveld/appie-family2",
    visibility: "private",
  },
  {
    title: "Martial Arts Amsterdam",
    description:
      "An online platform for discovering and promoting martial arts dojos and workshops in Amsterdam.",
    image:
      "https://source.unsplash.com/boy-doing-karate-routines-during-golden-hour-igLzPKOvZNw",
    website: "https://martialartsamsterdam.com/",
    github: "https://github.com/joeribreedveld/martial-arts-amsterdam",
    visibility: "private",
  },
  {
    title: "Hair Calendar",
    description:
      "Track your hair wash days and adjust your hair routine based on a personalized calendar.",
    image:
      "https://source.unsplash.com/a-woman-getting-her-hair-cut-by-a-hair-stylist-Md_DhaFsnCQ",
    website: "https://haircalendar.vercel.app",
    github: "https://github.com/joeribreedveld/hair-calendar",
    visibility: "public",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4 md:pb-8 lg:pb-20">
      {projects.map((project, index) => (
        <Card key={index} className="w-full flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <div>
              <Badge variant="secondary" className="w-fit capitalize mt-2">
                {project.visibility}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={project.image}
              alt="Project"
              width={128}
              height={128}
              className="rounded-lg w-full aspect-[3/2] object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
