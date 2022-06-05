import * as React from "react";
import { render } from "react-dom";
import { DeleteBurrito } from "./DeleteBurrito";
import { ConfirmationServiceProvider } from "./ConfirmationService";

import "./styles.css";

function App() {
  return (
    <ConfirmationServiceProvider>
      <DeleteBurrito />
    </ConfirmationServiceProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
