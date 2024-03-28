import type React from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface QuadGridItem {
  content: React.ReactNode;
  title: string;
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
      <div className="flex flex-col gap-2 self-center">
        <h1 className="text-3xl font-bold">
          {props.items[selectedItemIndex].title}
        </h1>
        <p>{props.items[selectedItemIndex].content}</p>
      </div>
      <div className="grid aspect-square grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2">
        {props.items.map((item, index) => (
          <Button
            className={cn(
              "grid aspect-square h-full w-full place-items-center object-contain text-3xl font-bold shadow-sm shadow-muted-foreground sm:h-[90%] sm:w-[90%]",
              indexSpecificClasses[index],
            )}
            style={{
              objectFit: "cover",
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
