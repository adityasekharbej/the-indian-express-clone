import "./App.css";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { Menu } from './components/Menu';

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
       {toggle ? (
        <HomePage handleToggle={handleToggle} />
      ) : (
        <Menu handleToggle={handleToggle} />
      )}
    </div>
  );
}

export default App;
