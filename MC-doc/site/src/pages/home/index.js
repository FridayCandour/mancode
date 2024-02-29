import { Router, Screen, div, h1 } from "cradova";

export const home = new Screen({
  name: "Mancode forum",
  template() {
    return div(h1("Mancode forum"));
  },
});
