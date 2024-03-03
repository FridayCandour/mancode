import { a, button, div, img, nav, span } from "cradova";

export const HomeNav = nav(
  { className: "mc-h-nav" },
  div(
    {
      className: "flex flex-center gap-4",
      onclick() {
        location.pathname = "/";
      },
    },
    img({ src: "transparent-logo-shot.webp", className: "top-logo" }),
    span("Mancode", { className: "t-ececec bold pointed fs-18" })
  ),
  div(
    { className: "flex flex-center gap-24 all-t-ececec m-y-auto all-pointed" },
    a({ href: "/sign-up" }, span("Products")),
    a({ href: "/sign-up" }, span("Pricing")),
    a({ href: "/sign-up" }, span("About us")),
    a(
      { href: "/sign-up", className: "hide-mobile" },
      button("Create your profile", { className: "btn f-t-0B081C" })
    ),
    a(
      { href: "/talk", className: "hide-mobile" },
      button("Talk to an expert", { className: "btn-anti mc-b" })
    )
  )
);
