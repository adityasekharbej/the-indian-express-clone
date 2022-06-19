import "./App.css";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { Menu } from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
// import { AuthProvider } from "./contexts/AuthContext";

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
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
