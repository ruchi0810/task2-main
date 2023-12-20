import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience3.css";
import Pizza from "../../img/pizza.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Experience3 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    // <div className="experience" id="experience">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-xl">
    //         <div className="row">
    //           <div className="col-xl">
    //             <div
    //               className="card c1-card"
    //               style={{
    //                 width: "90%",
    //                 height: "90%",
    //                 borderRadius: "10%",
    //               }}
    //             >
    //               <h5
    //                 className="card-title"
    //                 style={{
    //                   marginTop: "50px",
    //                   fontWeight: "bold",
    //                   textAlign: "center",
    //                 }}
    //               >
    //                 7+
    //               </h5>
    //               <h5>outlets</h5>
    //             </div>
    //           </div>
    //           <div className="col-xl">
    //             <div
    //               className="card c1-card"
    //               style={{
    //                 width: "90%",
    //                 height: "90%",
    //                 borderRadius: "10%",
    //               }}
    //             >
    //               <h5
    //                 className="card-title"
    //                 style={{
    //                   marginTop: "50px",
    //                   fontWeight: "bold",
    //                   textAlign: "center",
    //                 }}
    //               >
    //                 7+
    //               </h5>
    //               <h5>outlets</h5>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-xl">
    //             <div
    //               className="card c1-card"
    //               style={{
    //                 width: "90%",
    //                 height: "90%",
    //                 borderRadius: "10%",
    //               }}
    //             >
    //               <h5
    //                 className="card-title"
    //                 style={{
    //                   marginTop: "50px",
    //                   fontWeight: "bold",
    //                   textAlign: "center",
    //                 }}
    //               >
    //                 7+
    //               </h5>
    //               <h5>outlets</h5>
    //             </div>
    //           </div>
    //           <div className="col-xl">
    //             <div
    //               className="card c1-card"
    //               style={{
    //                 width: "90%",
    //                 height: "90%",
    //                 borderRadius: "10%",
    //               }}
    //             >
    //               <h5
    //                 className="card-title"
    //                 style={{
    //                   marginTop: "50px",
    //                   fontWeight: "bold",
    //                   textAlign: "center",
    //                 }}
    //               >
    //                 7+
    //               </h5>
    //               <h5>outlets</h5>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-xl">
    //         <div
    //           className="heading"
    //           style={{ color: "002365", fontSize: "36px" }}
    //         >
    //           What is repos
    //         </div>
    //         <div className="description" style={{ color: "black" }}>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
    //           itaque omnis. Soluta, dolore qui deleniti repellat dolores cumque
    //           magnam exercitationem commodi quas quos, architecto, nemo mollitia
    //           quisquam quis consectetur labore?
    //         </div>
    //         <button type="button" class="btn btn-primary btn-lg">
    //           Know more
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="experience" id="experience">
      <div className="container">
        <div className="row">
          {/* Left Part: Grid of Square Cards */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card c1-card">
                  <h5 className="card-title" style={{ marginTop: "28%" }}>
                    7+
                  </h5>
                  <h5>outlets</h5>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card c1-card">
                  <h5 className="card-title" style={{ marginTop: "28%" }}>
                    7+
                  </h5>
                  <h5>outlets</h5>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card c1-card">
                  <h5 className="card-title" style={{ marginTop: "28%" }}>
                    7+
                  </h5>
                  <h5>outlets</h5>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card c1-card">
                  <h5 className="card-title" style={{ marginTop: "28%" }}>
                    7+
                  </h5>
                  <h5>outlets</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Part: Heading, Description, and Button */}
          <div className="col-lg-6">
            <div
              className="heading"
              style={{ color: "#002365", fontSize: "40px" }}
            >
              What is repos?
            </div>
            <div
              className="description"
              style={{ color: "black", marginTop: "15px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
              itaque omnis. Soluta, dolore qui deleniti repellat dolores cumque
              magnam exercitationem commodi quas quos, architecto, nemo mollitia
              quisquam quis consectetur labore? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt minus fugiat deserunt ipsum
              impedit ex rem quia quasi qui temporibus eveniet possimus ipsam ea
              aliquid vitae, laboriosam iste accusantium delectus?
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg "
              style={{ backgroundColor: "#002365", marginTop: "15px" }}
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience3;
