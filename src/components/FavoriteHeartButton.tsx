"use client";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@/lib/Icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FavoriteHeartButton() {
  const [favorited, setFavorited] = useState(false);
  return (
    <Button
      onClick={() => setFavorited(!favorited)}
      variant='link'
      size='icon'
    >
      <HeartIcon
        className={cn(
          "size-4 stroke-primary",
          favorited ? "stroke-0 fill-red-500" : "stroke-1"
        )}
      />
    </Button>
  );
}
