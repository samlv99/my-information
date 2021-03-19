import React from "react";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";


// components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousels/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import Skills from "./pages/skills/skills.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "realative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
        <hr />
        <Skills />
        </Slide>
      </Container>
    </div>
  );
};

export default App;
