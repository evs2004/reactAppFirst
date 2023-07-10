import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import TimerForApp from "./TimerForApp";
import TimerPersist from "./TimerPersist";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <Timer></Timer>
    <TimerForApp></TimerForApp>
    <TimerPersist></TimerPersist>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
