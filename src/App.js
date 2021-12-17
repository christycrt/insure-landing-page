import "./styles/app.scss";

import Advertise from "./components/Advertise";
import Dropdown from "./components/Dropdown";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import { useState } from "react";

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
      <Service />
      <Advertise />
    </div>
  );
};

export default App;
