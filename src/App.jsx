import "./Component css/hero.css";
import "./App.css";
import "./Component css/navigation.css";
import "./Component css/profile.css";
import "./Component css/post.css";
import Home from "./Home.jsx";
import About from "./Components/About.jsx";
import WorkMe from "./Components/Work&Me.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Work&Me" element={<WorkMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
