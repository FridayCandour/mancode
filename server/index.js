import { JetPath } from "jetpath";
new JetPath({
  publicPath: { dir: "./asset_files", route: "/src" },
  // source: "routes",
  displayRoutes: "UI",
  documentation: {
    color: "#03001c",
    name: "Mancode.cc doc",
  },
  cors: {
    allowHeaders: ["Content-Type"],
  },
}).listen();
