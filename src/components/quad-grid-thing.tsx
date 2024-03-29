import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface QuadGridItem {
  content: string[];
  title: string;
  link: string;
  img: string;
}

interface QuadGridThingProps {
  items: [QuadGridItem, QuadGridItem, QuadGridItem, QuadGridItem];
}

const indexSpecificClasses = [
  "sm:place-self-end",
  "sm:self-end",
  "sm:justify-self-end",
  "sm:place-self-start",
];

export function QuadGridThing(props: QuadGridThingProps) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="w-fit self-center border-b border-primary text-center text-6xl font-bold">
          <a href={props.items[selectedItemIndex].link} target="_blank">
            {props.items[selectedItemIndex].title}
          </a>
        </h1>
        <span className="flex flex-col gap-4 indent-10 text-2xl">
          {props.items[selectedItemIndex].content.map((content) => (
            <p>{content}</p>
          ))}
        </span>
        <h1 className="w-fit self-center border-b border-primary text-center text-4xl font-semibold">
          My Role
        </h1>
        <span className="flex flex-col gap-4 indent-10 text-2xl">
          {props.items[selectedItemIndex].content.map((content) => (
            <p>{content}</p>
          ))}
        </span>
      </div>
      <div className="grid aspect-square grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2">
        {props.items.map((item, index) => (
          <Button
            className={cn(
              "grid aspect-square h-full w-full place-items-center object-contain text-3xl font-bold text-primary shadow-sm shadow-muted-foreground",
              indexSpecificClasses[index],
            )}
            style={{
              backgroundSize: "cover",
              backgroundImage: `url('${item.img}')`,
            }}
            onClick={() => setSelectedItemIndex(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </section>
  );
}
