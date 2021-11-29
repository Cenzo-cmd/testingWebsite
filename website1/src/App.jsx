import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Intro } from "./components/intro";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Features } from "./components/features";
import { Testimonials } from "./components/testimonials"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Intro data={landingPageData.Intro} />  
         
      <Features data={landingPageData.Features} />
       
      
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      {/* <Services data={landingPageData.Services} /> */}
     
      <Gallery data={landingPageData.Gallery}/>
      {/* shop */}
      {/* <About data={landingPageData.About} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
