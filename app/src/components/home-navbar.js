import { div, img, nav, span } from "cradova";

export const HomeNav = nav(
  { className: "mc-h-nav" },
  div(
    { className: "flex gap-4" },
    img({ src: "transparent-logo-shot.webp", className: "top-logo" }),
    span("Vaultflow", { className: "t-ececec" })
  ),
  div(span)
);
