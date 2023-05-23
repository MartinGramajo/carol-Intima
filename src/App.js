import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./esp/pages/Home";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
