import { motion } from "motion/react";
import { Card } from "./Card";
import { ANIMATIONS } from "@/constants";
import { CardProps } from "@/types";
type GameboardProps = {
  cards: CardProps[];
  onCardClick: (id: number) => void;
};

export function GameBoard({ cards, onCardClick }: GameboardProps) {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className="grid grid-cols-4 gap-2 rounded-xl bg-zinc-800 p-2"
    >
      {cards.map((card: CardProps) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
}
