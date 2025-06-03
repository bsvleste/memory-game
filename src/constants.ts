
export const EASY= 'easy'
export const MEDIUM= 'medium'
export const HARD= 'hard'
export const EMOJIS = ["🇿🇲", "🇿🇦", "🇻🇳", "🇻🇨", "🇹🇹", "🇺🇬","🇹🇼",'🏴󠁧󠁢󠁳󠁣󠁴󠁿','🇺🇾','🇸🇬',"🇽🇰","🇸🇷","🇲🇽","🇵🇸","🇧🇷"] as const;
export const PAIR_COUNTS = {
  [EASY]: 6,
  [MEDIUM]: 10,
  [HARD]: 15,
}
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
