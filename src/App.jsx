import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import RoomDetails from "./components/RoomDetails";
import Rooms from "./components/Rooms";
import SiteFooter from "./components/SiteFooter";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const App = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms/:roomSlug" element={<RoomDetails />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <SiteFooter />
  </>
);

export default App;
