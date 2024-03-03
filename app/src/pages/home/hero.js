import { a, button, div, h1, h2, p, span } from "cradova";

export const homeHero = div(
  { className: "mc-hero-bg" },
  div(
    { className: "flex flex-y mc-hero-top" },
    h1("Modern technologies", { className: "mc-hero-h1" }),
    div(
      { className: "m-y-auto" },
      h1("for vibrant engineers", { className: "mc-hero-h1" }),
      p(
        `Mancode is a place where vibrant developers collaborate and sell technologies.`
      ),
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
        button("Talk to an expert", { className: "btn mc-bg mc-b" })
      )
    )
  )
);
