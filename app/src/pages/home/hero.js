import { div, h1, h2, p } from "cradova";

export const homeHero = div(
  { className: "mc-hero-bg" },
  div(
    { className: "flex-y" },
    h1("Modern analytics", { className: "mc-hero-h1" }),
    h1("for the modern world", { className: "mc-hero-h1" }),
    p(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),
    p(`Suspendisse varius enim in eros elementum tristique.`)
  )
);
