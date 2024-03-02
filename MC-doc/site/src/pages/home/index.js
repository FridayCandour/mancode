import { Router, Screen, div, h1 } from "cradova";

export const home = new Screen({
  name: "Mancode",
  template() {
    return div(h1("Mancode"));
  },
});
