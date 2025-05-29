import { EMOJIS } from "@/constants";
import { CardProps } from "@/types";
import { useEffect, useState } from "react";

export const createShuffledCards = () => {
  return [...EMOJIS, ...EMOJIS]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
};
export function useMemoryGame() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardProps[]>([]);
  const initializedGame = () => setCards(createShuffledCards());
  useEffect(initializedGame, []);
  function handleCardClick(id: number) {
    const clickedCard = cards.find((card) => card.id === id)!;
    if (
      flippedCards.length === 2 ||
      clickedCard.isMatched ||
      clickedCard.isFlipped
    ) {
      return;
    }
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card,
      ),
    );
    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);
    if (newFlippedCards.length === 2) {
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
      }, 500);
    }
  }
  return {
    cards,
    resertGame: initializedGame,
    handleCardClick,
  };
}
