import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { atom } from "nanostores";
import { Button } from "./ui/button";
import { useStore } from "@nanostores/react";

// Due to the nature of the atom we can only have one FocusableGrid component per page
const tileIndex = atom(0);

interface Index {
  index: number;
}

function FocusableGridTiles({
  className,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">>) {
  return (
    <div className={cn("grid grid-cols-2 gap-2", className)} {...props}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as any, { index }),
      )}
    </div>
  );
}

function FocusableGridTile({
  className,
  children,
  index,
  onClick,
  ...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Button>> &
  Index) {
  return (
    <Button
      className={cn(
        "grid aspect-square h-full w-full place-items-center bg-transparent object-contain text-3xl font-bold text-primary shadow-sm shadow-muted-foreground transition-transform duration-300 hover:scale-[1.01] hover:bg-transparent",
        className,
      )}
      onClick={(e) => {
        tileIndex.set(index);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

function FocusableGridContents({
  className,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">>) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

function FocusableGridContent({
  className,
  children,
  index,
  ...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">> & Index) {
  const tIndex = useStore(tileIndex);

  if (index !== tIndex) return null;

  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export function FocusableGrid({
  className,
  children,
  ...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"section">>) {
  useEffect(() => {
    return () => tileIndex.set(0);
  }, []);

  return (
    <section className={cn("grid grid-cols-2 gap-4", className)} {...props}>
      {children}
    </section>
  );
}

FocusableGrid.Contents = FocusableGridContents;
FocusableGrid.Content = FocusableGridContent;
FocusableGrid.Tiles = FocusableGridTiles;
FocusableGrid.Tile = FocusableGridTile;
