import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const CARD_STYLE = {
  base: "backface-hidden absolute flex h-full w-full items-center justify-center rounded-2xl border-2",
  back: " bg-pink-600   border-white/20",
  front: " rotate-y-180 border-pink-500/50 bg-zinc-200 text-4xl ",
};
type CardProps = {
  emoji: string;
  onClick: () => void;
  isFlipped: boolean;
  isMatched: boolean;
};
export function Card({ emoji, onClick, isFlipped, isMatched }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="relative h-16 w-16 cursor-pointer xs:h-20 xs:w-20 sm:h-24 sm:w-24"
    >
      <div
        className={cn(
          "preserve-3d h-full w-full transition-transform duration-500",
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={cn(CARD_STYLE.base, CARD_STYLE.back)}>
          <Sparkles className="h-8 w-8 animate-pulse text-zinc-100" />
        </div>
        <div
          className={cn(
            CARD_STYLE.base,
            CARD_STYLE.front,
            isMatched && "cursor-default border-zinc-100 bg-transparent",
          )}
        >
          {emoji}
        </div>
      </div>
    </div>
  );
}
