import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Home from "./pages/Home/Home.jsx";
import Routes from "@/router/router.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
