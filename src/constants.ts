import { Press_Start_2P } from "next/font/google";

export const INITIAL_NAME = "hidden";
export const SHOW_NAME = "show";

export const INITIAL_STATE = {
  opacity: 0,
  x: -80,
};

export const SHOW_STATE = {
  opacity: 1,
  x: 0,
};

export const make_transition = (delay: number) => ({
  duration: 0.6,
  ease: "easeOut",
  delay,
});

export const make_fade_in = (delay: number) => ({
  [INITIAL_NAME]: {
    opacity: 0,
    x: -80,
  },
  [SHOW_NAME]: {
    opacity: 1,
    x: 0,
    transition: make_transition(delay),
  },
});

export const font_press = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const BUY_TICKET_URL =
  "https://www.eventbrite.com/e/techstars-startup-weekend-ottawa-2021-tickets-166066000543?aff=ebdssbdestsearch";
