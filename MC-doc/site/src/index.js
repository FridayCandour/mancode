import { Router } from "cradova";
import { forum } from "./pages/forum";
import { home } from "./pages/home";

Router.BrowserRoutes({
  "/forum": forum,
  "/": home,
});
