import { motion } from "motion/react";
import { Brain, Sparkles, Zap } from "lucide-react";
import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { Difficulty } from "@/types";

const DIFFICULTIES = [
  {
    type: EASY,
    label: "Easy",
    icon: Sparkles,
    color: "from-green-400 to-emerald-700",
  },
  {
    type: MEDIUM,
    label: "Medium",
    icon: Brain,
    color: "from-blue-400 to-indigo-700",
  },
  {
    type: HARD,
    label: "Hard",
    icon: Zap,
    color: "from-purple-400 to-purple-700",
  },
];
type DifficultySelectorProps = {
  onSelect: (difficulty: Difficulty) => void;
};
export function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-950 p-4 sm:gap-8 sm:p-8">
      <motion.div
        {...ANIMATIONS.fadeInUp}
        className="flex w-full flex-col gap-6"
      >
        <h2 className="mb-2 text-center text-2xl font-bold text-zinc-200 sm:mb-4 sm:text-3xl">
          Select Difficulty
        </h2>

        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-2">
          {DIFFICULTIES.map(({ type, label, icon: Icon, color }) => (
            <button
              key={label}
              className={`flex h-20 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b ${color} text-xl font-bold sm:h-32 sm:w-32`}
              onClick={() => onSelect(type as Difficulty)}
            >
              <Icon className="h-6 w-6" /> {label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
