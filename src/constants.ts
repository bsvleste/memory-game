
export const EMOJIS = ["😀", "🧁", "🤡", "🍭", "🍨", "🍹"] as const;
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0,y: 100 },
    animate: { opacity: 1,y: 0},
  },
  fadeInDown: {
    initial: { opacity: 0,y: -100 },
    animate: { opacity: 1,y: 0},
  },
}as const
