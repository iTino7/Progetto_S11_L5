import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
