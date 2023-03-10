import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Main } from "./components/MainContent";
import { News } from "./components/News";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="grid">
        <Main />
        <News />
      </div>
      <div className="footer">
        <List />
      </div>
    </div>
  );
}

export default App;
