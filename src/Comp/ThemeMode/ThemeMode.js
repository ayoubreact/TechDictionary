import React, { useContext } from "react";
import { Affix, ActionIcon } from "@mantine/core";
import ColorSchemeContext from "../ColorSchemeContext";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
function ThemeMode() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === "dark";
  return (
    <div>
      <Affix
        position={{ bottom: 20, right: 20 }}
        onClick={() => colorSchemeContext.onChange(dark ? "light" : "dark")}
      >
        <ActionIcon color="blue" size="xl" radius="xl" variant="filled">
          {dark ? <FiSun size={25} /> : <FaMoon size={25} />}
        </ActionIcon>
      </Affix>
    </div>
  );
}

export default ThemeMode;
