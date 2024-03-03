import { a, button, div, h1, h2, p, span } from "cradova";
import { BlogCarousel } from "../../components/carousel";

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
          div(
            { className: "ticker__item" },
            span("We just raised $20M in Series B"),
            a("Learn more")
          )
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
    BlogCarousel
  )
);
