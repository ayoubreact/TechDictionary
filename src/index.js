import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MantineProvider, GlobalStyles } from "@mantine/core";
import ColorSchemeContext from "./Comp/ColorSchemeContext";
import { useLocalStorageValue } from "@mantine/hooks";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function Index() {
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: "et3lem",
    defaultValue: "light",
  });

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, onChange: setColorScheme }}
    >
      <MantineProvider theme={{ colorScheme }}>
        <GlobalStyles />
        <App />
      </MantineProvider>
    </ColorSchemeContext.Provider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
