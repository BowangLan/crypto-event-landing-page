export const INITIAL_STATE = {
  opacity: 0,
  x: -80,
};

export const SHOW_STATE = {
  opacity: 1,
  x: 0,
};

export const TRANSITION = {
  duration: 0.6,
  ease: "easeOut",
  delay: 0.1
};

export const SectonVariants = {
  hidden: INITIAL_STATE,
  show: {
    ...SHOW_STATE,
    transition: TRANSITION,
  },
};
