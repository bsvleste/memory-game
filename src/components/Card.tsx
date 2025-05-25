import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const CARD_STYLE = {
  base: "backface-hidden absolute flex h-full w-full items-center justify-center rounded-2xl border-2",
  back: " bg-pink-600   border-white/20",
  front: " rotate-y-180 border-pink-500/50 bg-zinc-200",
};
type CardProps = {
  emoji: string;
};
export function Card({ emoji }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  function handleFlipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div onClick={handleFlipCard} className="relative h-16 w-16 cursor-pointer">
      <div
        className={cn(
          "preserve-3d h-full w-full transition-transform duration-500",
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={cn(CARD_STYLE.base, CARD_STYLE.back)}>
          <Sparkles className="h-6 w-6 text-zinc-100" />
        </div>
        <div className={cn(CARD_STYLE.base, CARD_STYLE.front)}>{emoji}</div>
      </div>
    </div>
  );
}
