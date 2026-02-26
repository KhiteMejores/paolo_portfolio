import "./Component css/hero.css";
import "./App.css";
import "./Component css/navigation.css";
import "./Component css/profile.css";
import "./Component css/post.css";
import "./Component css/about_me.css";
import "./Component css/contact_me.css";
import "./Component css/network.css"
import Home from "./Home.jsx";
import About from "./Components/About.jsx";
import ContanMe from "./Components/ContactMe.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="ContactMe" element={<ContanMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
