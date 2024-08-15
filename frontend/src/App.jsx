import { useState } from "react";
import "./App.css";
import MenuLateral from "./components/MenuLateral/MenuLateral";
import Content from "./components/Content/Content";

function App(children) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <MenuLateral />
      <Content />
    </div>
  );
}

export default App;
