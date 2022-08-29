import * as React from "react";
import { createRoot } from "react-dom/client";
// import Counter from "./Counter_old";
import Counter from "./Counter";

const rootNode = document.getElementById("root");
const reactRoot = createRoot(rootNode!);

// reactRoot.render(<Counter_old title="ClassComponentCounter" />);
reactRoot.render(<Counter title="FunctionComponentCounter" />);
