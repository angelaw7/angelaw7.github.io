const fade = (delay: number, duration?: number) => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: delay,
      duration: duration ? duration : 0.2,
    },
  },
});

const slideFromRight = {
  hidden: { x: "25%", opacity: 0, scale: 1 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const slideFromTop = {
  hidden: { y: "-25%", opacity: 0, scale: 1 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const pop = (delay: number) => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

export { fade, slideFromRight, slideFromTop, pop };
