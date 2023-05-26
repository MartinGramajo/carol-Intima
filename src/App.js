import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import NavReact from "./components/navReact/NavReact";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
      <NavReact />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

