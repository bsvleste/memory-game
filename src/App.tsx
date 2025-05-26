import { GameBoard } from "@/components/GameBoard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { GameModal } from "@/components/GameModal";
import { DifficultySelector } from "./components/DifficultySelector";
export function App() {
  const gameComplted = false;
  const difficulty = "easr";
  if (!difficulty) return <DifficultySelector />;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-950 p-4 sm:gap-8 sm:p-8">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      <GameBoard />
      {gameComplted && (
        <GameModal moves={0} time={0} onRestart={() => {}} />
      )}{" "}
    </div>
  );
}
