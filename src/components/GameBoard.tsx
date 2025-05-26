import { motion } from "motion/react";

import { Card } from "./Card";
import { ANIMATIONS } from "@/constants";

const EMOJIS = ["😀", "🧁", "🤡", "🍭", "🍨", "🍹"] as const;
const CARDS = [...EMOJIS, ...EMOJIS]
  .sort(() => Math.random() - 0.5)
  .map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
export function GameBoard() {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      className="grid grid-cols-4 gap-2 rounded-xl bg-zinc-800 p-2"
    >
      {CARDS.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </motion.div>
  );
}
