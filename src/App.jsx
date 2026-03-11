import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewsBoard from "./Components/NewsBoard";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<NewsBoard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;