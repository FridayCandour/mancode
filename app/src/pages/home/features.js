import { a, button, div, h1, p, span } from "cradova";
import { BlogCarousel } from "../../components/carousel";

export const homeFeature = div(
  { className: "mc-hero-feature" },
  div(
    { className: "m-y-auto flex flex-y flex-center gap-24 mc-hero-top" },
    h1("for vibrant engineers", { className: "mc-hero-h1" }),
    div(
      { className: "m-y-auto flex flex-y flex-center gap-4" },
      h1("Modern technologies", { className: "mc-hero-h1" }),
      h1("for vibrant engineers", { className: "mc-hero-h1" }),
      p(`A place where vibrant developers collaborate and sell technologies.`),
      p(`Join now for the next-gen coding experience!.`)
    )
  ),
  BlogCarousel
);
