import React, { useState, useEffect, useContext } from "react";
import "./app.css";
import { Container } from "@mantine/core";
import axios from "axios";
import Header from "./Comp/Header/Header";
import ThemeMode from "./Comp/ThemeMode/ThemeMode";
import Words from "./Comp/Words/Words";
import ColorSchemeContext from "./Comp/ColorSchemeContext";

function App() {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === "dark";
  const [category, setCategory] = useState("en");
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (err) {}
  };
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);
  return (
    <div className={dark ? "dark my-app" : "light my-app"}>
      <Container>
        <Header
          changeWord={setWord}
          word={word}
          category={category}
          setCategory={setCategory}
        />
        <Words meanings={meanings} word={word} />
        <ThemeMode />
      </Container>
    </div>
  );
}

export default App;
