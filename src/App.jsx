import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewsBoard from "./Components/NewsBoard";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/news" element={<NewsBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;