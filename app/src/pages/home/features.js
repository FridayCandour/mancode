import { a, button, div, h1, p, span } from "cradova";
import { BlogCarousel } from "../../components/carousel";

export const homeFeature = div(
  { className: "mc-hero-feature" },
  div(
    { className: "m-y-auto flex flex-y flex-center mc-hero-top" },
    div(
      { className: "m-y-auto flex flex-y flex-center m-top-12r" },
      h1("Features that", { className: "mc-hero-h1" }),
      h1("work for your ", { className: "mc-hero-h1" }),
      h1("future.", { className: "mc-hero-h1" }),
      p(
        "Check out an incredible ecosystem of vibrant Engineers and technologies.",
        { className: "m-top-24" }
      )
    )
  ),
  BlogCarousel
);
