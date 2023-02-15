import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//     <React.StrictMode>
//         <h1>This works!</h1>
//     </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1>This works!</h1>);