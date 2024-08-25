import React from "react";
import bg from "./assets/bg.png";

import Navbar from "./Navbar";
import DraggableDialog from "./DraggableDialog";
const Home = () => {
  return (
    <div className="flicker">
      <Navbar />
      <div className="hero">
        <h1 className="title">
          Kapil's <br /> Portfolio
        </h1>
        <div className="roles">
          <p>&gt; Electronics and Communication Engineer</p>
          <p>&gt; Full Stack Developer</p>
          <p>&gt; Data Scientist</p>
          <p>&gt; Designer</p>
        </div>
        <img src={bg} className="bg" alt="background" />
      </div>
      <DraggableDialog />
    </div>
  );
};

export default Home;
