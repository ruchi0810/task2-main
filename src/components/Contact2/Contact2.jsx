import React, { useContext, useRef, useState } from "react";
import "./Contact2.css";
import emailjs from "@emailjs/browser";
import Forming from "../../img/formimg.png";
import { themeContext } from "../../Context";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Contact2 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-4" >
            <img src={Forming} alt="" />
          </div>
          <div className="col-4 ">
            <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Full Name"
                />

                <select name="country" className="user">
                  <option value="restaurant"> India</option>
                  <option value="cafe"> Austrelia</option>
                  <option value="pubs">South Africa</option>
                  <option value="bars">Canada</option>
                  <option value="coctails">UK</option>
                  <option value="party">USA</option>
                  <option value="bakery">Viyatnam</option>

                  {/* Add more options as needed */}
                </select>

                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="State*"
                />
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Brand"
                />
                <select name="role" className="user">
                  <option value="restaurant"> Manager</option>
                  <option value="cafe"> Founder</option>
                  <option value="pubs">CEO</option>
                  <option value="bars">CA</option>
                  <option value="coctails">Chef</option>
                  <option value="party">IT manager</option>
                  <option value="bakery">other</option>

                  {/* Add more options as needed */}
                </select>

                <input type="submit" value="Send Query" className="button" />
                <span>{done && "Thanks for Contacting me"}</span>
                <div
                  className="blur c-blur1"
                  style={{ background: "var(--purple)" }}
                ></div>
              </form>
            </div>
          </div>
          <div className="col-4">
            <div className="c-right">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Email"
                />
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="+91"
                />
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="City*"
                />
                <select name="restaurant" className="user">
                  <option value="restaurant"> Restaurant</option>
                  <option value="cafe"> cafe</option>
                  <option value="pubs">pubs</option>
                  <option value="bars">bard</option>
                  <option value="coctails">coctails</option>
                  <option value="party">party</option>
                  <option value="bakery">backery</option>

                  {/* Add more options as needed */}
                </select>

                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="No of Outlets*"
                />

                <span>{done && "Thanks for Contacting me"}</span>
                <div
                  className="blur c-blur1"
                  style={{ background: "var(--purple)" }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
