import { Screen, div } from "cradova";

import { HomeNav } from "../../components/home-navbar";
import { homeHero } from "./hero";
import { homeFeature } from "./features";

export const home = new Screen({
  name: "Mancode: Let’s build from here · Mancode",
  template() {
    return div(HomeNav, homeHero, homeFeature);
  },
});
