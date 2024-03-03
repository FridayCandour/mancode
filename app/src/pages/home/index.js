import { Screen, div } from "cradova";

import "../../styles/index.css";
import "../../styles/style.css";
import "../../styles/home.css";
import { HomeNav } from "../../components/home-navbar";

export const home = new Screen({
  name: "Mancode: Let’s build from here · Mancode",
  template() {
    return div(HomeNav);
  },
});
