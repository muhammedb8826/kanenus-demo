import {Routes, Route} from "react-router-dom";

import NavBar from "./compnents/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
