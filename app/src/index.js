import { Router } from "cradova";
import { home } from "./pages/home";

import "./styles/index.css";
import "./styles/style.css";
import "./styles/home.css";
import "./components/index.css";

Router.BrowserRoutes({
  "/": home,
});
