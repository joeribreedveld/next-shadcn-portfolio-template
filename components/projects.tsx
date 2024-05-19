import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="mx-auto py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20 md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4">
      {[...Array(6)].map((index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>Project title</CardTitle>
            <CardDescription>Project description</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/placeholder.jpg"
              alt="Project"
              width={150}
              height={150}
              className="rounded-lg w-full"
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
