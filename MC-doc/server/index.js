import { JetPath } from "jetpath";
new JetPath({
  publicPath: { dir: "asset_files", route: "src" },
  source: "routes",
  displayRoutes: "UI",
}).listen();
