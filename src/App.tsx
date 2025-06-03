import { GameBoard } from "@/components/GameBoard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { GameModal } from "@/components/GameModal";
import { DifficultySelector } from "./components/DifficultySelector";
import { useMemoryGame } from "./hooks/use-memory-game";
import { Difficulty } from "./types";
import { useState } from "react";
export function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const { cards, handleCardClick, moves, time, resetGame, gameCompleted } =
    useMemoryGame(difficulty || "easy");
  function handleRestart() {
    setDifficulty(null);
    resetGame();
  }
  if (!difficulty) return <DifficultySelector onSelect={setDifficulty} />;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-950 p-4 sm:gap-8 sm:p-8">
      <ScoreBoard moves={moves} time={time} onRestart={handleRestart} />
      <GameBoard
        cards={cards}
        onCardClick={handleCardClick}
        difficulty={difficulty}
      />
      {gameCompleted && (
        <GameModal moves={moves} time={time} onRestart={handleRestart} />
      )}{" "}
    </div>
  );
}
