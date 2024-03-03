import { div, h1, h2 } from "cradova";

export const homeHero = div(
  { className: "mc-hero-bg" },
  div(
    { className: "flex-y" },
    h1("Modern analytics"),
    h1("for the modern world")
  )
);
