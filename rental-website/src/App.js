import React, { useRef } from "react";
import "./App.css";
import Welcome from "./components/welcome";
import Explore from "./components/explore";
import Footer from "./components/footer";
import About from "./components/about";

function App() {

  
  let about = useRef(null);
  let explore = useRef(null);
  const scrollAbout = () => {
    window.scrollTo({
      top: about.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollExplore = () => {
    window.scrollTo({
      top: explore.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Welcome />
      <Explore explore={explore}  />
      <About about={about} />
      <Footer scrollAbout={() => scrollAbout() } scrollExplore={() => scrollExplore()} />
    </>
  );
}

export default App;
