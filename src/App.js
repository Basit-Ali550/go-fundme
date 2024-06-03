import Footer from "./components/Footer/Footer";
import "./App.css";
import Discover from "./components/Discover/Discover";
import Featured from "./components/Featured /Featured";
import Covered from "./components/Covered/Covered";
import Role from "./components/Role/Role";
import DetailPage from "./components/Detailpage/DetailPage";
import Team from "./components/Team/Team";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charity from "./components/Charity /Charity";
import Nav from "./components/Nav/Nav";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FundRaiser from "./components/FundRaiser/FundRaiser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/howitwork" element={<HowItWorks />} />
          <Route path="/charity" element={<Charity />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
