import { Router, Screen, div, h1 } from "cradova";

const forum = new Screen({
  name: "Mancode forum",
  template() {
    return div(h1("Mancode forum"));
  },
});

Router.BrowserRoutes({
  "/forum": forum,
  "/": forum,
});
