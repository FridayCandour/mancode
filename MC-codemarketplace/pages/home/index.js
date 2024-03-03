import { Screen, div, img } from "cradova";
import "../../styles/index.css";
import "../../styles/style.css";

export const home = new Screen({
  name: "Mancode: Search and Discovery · Mancode",
  template() {
    return div(
      img({ src: "l-logo.webp", className: "top-logo" })
      // h5("Mancode")
    );
  },
});
