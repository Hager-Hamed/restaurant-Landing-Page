import React from "react";
import "./App.css";
import NavBar from "./components/Navbars/Navbars";
import Loading from "./components/loading/loading";
import Numbers from "./components/numbers/numbers";
import AboutUs from "./components/AboutUs/AboutUs";
import FoodImage from "./components/FoodImage/FoodImage";
import OurStory from "./components/OurStory/OurStory";
import Explore from "./components/Explore/Explore";
import Testimonials from "./components/Testimonials/Testimonials";
import Frequently from "./components/Frequently/Frequently";
import Baked from "./components/Baked/Baked";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <>
        <NavBar />
        <div>
          <Loading />
          <Numbers />
          <AboutUs />
          <FoodImage />
          <OurStory />
          <Explore />
          <Testimonials />
          <Frequently />
          <Baked />
          <Subscribe />
          <Footer />
        </div>
      </>
    </div>
  );
};

export default App;
