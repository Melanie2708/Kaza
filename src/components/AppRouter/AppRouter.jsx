import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import PageNotFound from "../../pages/PageNotFound/PageNotFound.jsx";
import Logement from "../../pages/Logement/Logement.jsx";

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
