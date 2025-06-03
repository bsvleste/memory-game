import { EMOJIS, PAIR_COUNTS } from "@/constants";
import { CardProps, Difficulty } from "@/types";
import { useEffect, useState } from "react";
import { useTimer } from "./use-timer";

export const createShuffledCards = (difficulty: Difficulty) => {
  const pair_count = PAIR_COUNTS[difficulty];
  const gameEmojis = EMOJIS.slice(0, pair_count);
  return [...gameEmojis, ...gameEmojis]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
};
export const checkGameCompleted = (cards: CardProps[]) => {
  return cards.every((card) => card.isMatched);
};
export function useMemoryGame(difficulty: Difficulty) {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardProps[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const { time, resetTime } = useTimer(gameStarted && !gameCompleted);

  function initializedGame() {
    setCards(createShuffledCards(difficulty));
    resetTime();
    setMoves(0);
    setGameCompleted(false);
    setGameStarted(false);
    setFlippedCards([]);
  }
  useEffect(initializedGame, [difficulty, resetTime]);
  function handleCardClick(id: number) {
    const clickedCard = cards.find((card) => card.id === id)!;
    if (
      flippedCards.length === 2 ||
      clickedCard.isMatched ||
      clickedCard.isFlipped
    ) {
      return;
    }
    if (!gameStarted) setGameStarted(true);
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card,
      ),
    );
    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);
    if (newFlippedCards.length === 2) {
      setMoves((prevMove) => prevMove + 1);
      const [firsCard, secondCard] = newFlippedCards;
      const isMatched = firsCard.emoji === secondCard.emoji;

      setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (card.id === firsCard.id || card.id === secondCard.id) {
            return {
              ...card,
              isFlipped: isMatched,
              isMatched,
            };
          }
          return card;
        });
        setCards(updatedCards);
        setFlippedCards([]);
        if (isMatched && checkGameCompleted(updatedCards)) {
          setGameCompleted(true);
        }
      }, 500);
    }
  }
  return {
    cards,
    resetGame: initializedGame,
    handleCardClick,
    moves,
    time,
    resetTime,
    gameCompleted,
  };
}
