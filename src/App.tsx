import { GameBoard } from "@/components/GameBoard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { GameModal } from "@/components/GameModal";
import { DifficultySelector } from "./components/DifficultySelector";
import { useMemoryGame } from "./hooks/use-memory-game";
export function App() {
  const { cards, handleCardClick } = useMemoryGame();
  const gameComplted = false;
  const difficulty = "easr";
  if (!difficulty) return <DifficultySelector />;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-950 p-4 sm:gap-8 sm:p-8">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
      {gameComplted && (
        <GameModal moves={0} time={0} onRestart={() => {}} />
      )}{" "}
    </div>
  );
}
