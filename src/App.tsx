import { GameBoard } from "@/components/GameBoard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { GameModal } from "@/components/GameModal";
export function App() {
  const gameComplted = false;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-900 p-4">
      <ScoreBoard moves={0} time={0} onRestart={() => {}} />
      <GameBoard />
      {gameComplted && (
        <GameModal moves={0} time={0} onRestart={() => {}} />
      )}{" "}
    </div>
  );
}
