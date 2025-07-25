import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componets/Header";
import Hero from "./Componets/Hero";
import CategorySection from "./Componets/CategorySection";
import Locations from "./Componets/Location";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";
import CarSeatDisplay from "./Componets/Displayset";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mat" element={<CarSeatDisplay />} />

        </Routes>
        <CategorySection />
        <Locations />
        {/* <Contact /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
