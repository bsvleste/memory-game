import { ANIMATIONS } from "@/constants";
import { motion } from "motion/react";

type GameModalProps = {
  moves: number;
  time: number;
  onRestart: () => void;
};

export function GameModal({ moves, time, onRestart }: GameModalProps) {
  return (
    <motion.div
      {...ANIMATIONS.fadeInDown}
      className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div className="max-w-sm rounded-xl bg-white p-6 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-2xl">
          🎉 Congratulations! 🎉
        </h2>
        <p className="mb-6 text-lg">
          You completed the game in <br />
          <b>{moves} moves</b> and <b>{time}</b>!
        </p>
        <button
          onClick={onRestart}
          className="rounded-lg bg-pink-500 px-6 py-3 font-medium text-zinc-200 transition-opacity hover:opacity-80"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
}
