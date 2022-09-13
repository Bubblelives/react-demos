import { useState } from "react";
import "./App.css";
import Routes from "@/router/router.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
