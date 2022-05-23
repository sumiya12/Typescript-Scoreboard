import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
