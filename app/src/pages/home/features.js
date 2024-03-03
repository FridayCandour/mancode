import { a, button, div, h1, h2, h4, img, p, span } from "cradova";
import codeicon from "../../../assets/code.png";
import itemimg from "../../../assets/item.png";

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
    ),
    div(
      { className: "flex mc-body-features" },
      div(
        { className: "item" },
        img({ src: codeicon }),
        h1("Analytics Dashboard"),
        p(
          "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
        ),
        a("View dashboard")
      ),
      div(
        { className: "item" },
        img({ src: codeicon }),
        h1("Analytics Dashboard"),
        p(
          "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
        ),
        a("View dashboard")
      ),
      div(
        { className: "item" },
        img({ src: codeicon }),
        h1("Analytics Dashboard"),
        p(
          "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
        ),
        a("View dashboard")
      ),
      div(
        { className: "item" },
        img({ src: codeicon }),
        h1("Analytics Dashboard"),
        p(
          "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
        ),
        a("View dashboard")
      )
    ),
    div(
      { className: "mc-body-features-big" },
      div({ className: "item" }, img({ src: itemimg })),
      div(
        { className: "item" },
        img({ src: codeicon }),
        h1("Analytics Dashboard"),
        p(
          "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
        ),
        a("View dashboard")
      )
    ),
    div(
      { className: "mc-body-features-big2" },
      h1("Our powerful analytics provides invaluable insights."),
      p(
        "Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. "
      ),
      a(
        { href: "/talk" },
        button("Talk to an expert", { className: "btn-anti mc-b" })
      )
      //
    )
  )
);
