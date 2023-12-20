import React, { useContext } from "react";
import "./Happyc.css";
import Profile1 from "../../img/profile1.jpg";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import P1 from "../../img/p1.png";
import P2 from "../../img/p2.png";
import P3 from "../../img/p3.png";
import P5 from "../../img/p5.png";
import P6 from "../../img/p6.png";
import P7 from "../../img/p7.png";
import P8 from "../../img/p8.png";
import P9 from "../../img/p9.png";
import BG1 from "../../img/bg1.jpeg";

import client1 from "../../img/client1.jpg";
import client3 from "../../img/client3.jpg";
import client4 from "../../img/client4.jpg";
import client5 from "../../img/client5.jpg";
import client6 from "../../img/client6.jpg";
import client7 from "../../img/client7.jpg";
import client13 from "../../img/client13.jpg";

import client2 from "../../img/client2.png";
import client8 from "../../img/client8.png";
import client9 from "../../img/client9.png";
import client10 from "../../img/client10.png";
import client11 from "../../img/client11.png";
import client12 from "../../img/client12.png";
import client14 from "../../img/client14.png";
import client15 from "../../img/client15.png";
import client16 from "../../img/client16.png";
import client17 from "../../img/client17.png";
import client18 from "../../img/client18.png";
import client19 from "../../img/client19.png";
import client20 from "../../img/client20.png";
import { themeContext } from "../../Context";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Happyc = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="happyc"
      id="happyc"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="title"
        style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center" }}
      >
        Happy Clients
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={client1} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client2} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client3} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client4} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client5} alt="" className="img-fluid" />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={client6} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client7} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client8} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client9} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client10} alt="" className="img-fluid" />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={client11} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client12} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client13} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client14} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client15} alt="" className="img-fluid" />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row" style={{ marginTop: "25px" }}>
          <div className="col-1"></div>
          <div className="col-2">
            <img src={client16} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client17} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client18} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client19} alt="" className="img-fluid" />
          </div>
          <div className="col-2">
            <img src={client20} alt="" className="img-fluid" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Happyc;
