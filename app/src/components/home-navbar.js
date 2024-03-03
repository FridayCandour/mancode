import { button, div, img, nav, span } from "cradova";

export const HomeNav = nav(
  { className: "mc-h-nav" },
  div(
    { className: "flex gap-4" },
    img({ src: "transparent-logo-shot.webp", className: "top-logo" }),
    span("Mancode", { className: "t-ececec" })
  ),
  div(
    { className: "flex flex-center gap-24 all-t-ececec m-y-auto" },
    span("Features"),
    span("Pricing"),
    span("About us"),
    button("Download the app", { className: "btn f-t-0B081C" }),
    button("Talk to an expert", { className: "btn mc-bg mc-b" })
  )
);
