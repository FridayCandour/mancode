import { a, button, div, h1, img, p, span } from "cradova";
import { BlogCarousel } from "../../components/carousel";

import heoroimg from "../../../assets/showcase.png";

export const homeHero = div(
  { className: "mc-hero-bg" },
  div(
    { className: "m-y-auto flex flex-y flex-center gap-24 mc-hero-top" },
    div(
      { className: "m-y-auto flex flex-y flex-center gap-4" },
      div(
        {
          className: "t-ececec pointed mc-hero-ticker",
        },
        div(
          { className: "ticker" },
          span("We just raised $20M in Series B "),
          a("Learn more", { href: "/launch" })
        )
      ),
      h1("Modern technologies", { className: "mc-hero-h1" }),
      h1("for vibrant engineers", { className: "mc-hero-h1" }),
      p(`A place where vibrant developers collaborate and sell technologies.`),
      p(`Join now for the next-gen coding experience!.`)
    ),
    div(
      {
        className: "flex flex-center gap-24 all-t-ececec m-y-auto all-pointed",
      },
      a(
        { href: "/sign-up" },
        button("Create your profile", { className: "btn f-t-0B081C" })
      ),
      a(
        { href: "/talk" },
        button("Talk to an expert", { className: "btn-anti mc-b" })
      )
    ),
    img({ src: heoroimg, className: "mc-hero-img" }),
    p("Trusted by teams at over 1,000 of the world’s leading organizations", {
      className: "m-top-180",
    })
  ),
  BlogCarousel
);
