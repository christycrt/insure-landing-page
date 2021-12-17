import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Home />
    </div>
  );
};

export default App;
