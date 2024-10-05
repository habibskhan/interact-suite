import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import "./styles/common.scss";
import MetaDecorator from "./components/MetaDecorator/MetaDecorator";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ToastContainer } from "react-toastify";

// AOS styles
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      // disable: window.innerWidth < 1279,
      // once: true,
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <MetaDecorator
        metaTitle="Interact Suite"
        metaDesc="Interact Suite"
        canonicalLink={window.location}
      />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// git push origin beta
