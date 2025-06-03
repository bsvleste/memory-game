import { motion } from "motion/react";
import { Card } from "./Card";
import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { CardProps, Difficulty } from "@/types";
import { cn } from "@/lib/utils";
type GameboardProps = {
  cards: CardProps[];
  onCardClick: (id: number) => void;
  difficulty: Difficulty;
};
const GRID_CONFIG = {
  [EASY]: "",
  [MEDIUM]: "sm:grid-cols-5",
  [HARD]: "sm:grid-cols-5 md:grid-cols-6",
};

export function GameBoard({ cards, onCardClick, difficulty }: GameboardProps) {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className={cn(
        "grid grid-cols-4",
        GRID_CONFIG[difficulty],
        "gap-2 rounded-xl bg-zinc-800 p-2",
      )}
    >
      {cards.map((card: CardProps) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
}
