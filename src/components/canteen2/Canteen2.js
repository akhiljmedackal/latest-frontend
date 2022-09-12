import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import c2 from "../Assets/breakfast.jpeg";
import c3 from "../Assets/lunch1.jpeg";
import c4 from "../Assets/snacks.jpeg";
import c5 from "../Assets/desert.jpeg";
import "./Canteen2.css";
import { Link } from "react-router-dom";

const Canteen1 = () => {
  return (
    <div class="canteen1">
      <Navbar />
      <h3>Canteen-2</h3>
      <div class="row justify-content-center mt-5 mb-5">
        <div class="col-sm-6">
          <div class="row justify-content-center mb-3">
            <div class="col-sm-4">
              <Link to={`/canteen2/breakfast`}>
                <div class="card canteen1-card shadow-lg p-3 mb-5 bg-white rounded">
                  <img class="card-img-top" src={c2} alt="Card image cap" />
                  <div class="card-body ">
                    <div className="color">
                      {" "}
                      <p class="card-text text-center">BreakFast</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-sm-4">
              <Link to={`/canteen2/lunch`}>
                <div class="card canteen1-card shadow-lg p-3 mb-5 bg-white rounded">
                  <img class="card-img-top" src={c3} alt="Card image cap" />
                  <div class="card-body ">
                    <div className="color">
                      {" "}
                      <p class="card-text text-center">Lunch</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-sm-4">
              <Link to={`/canteen2/snacks`}>
                <div class="card canteen1-card shadow-lg p-3 mb-5 bg-white rounded">
                  <img class="card-img-top" src={c4} alt="Card image cap" />
                  <div class="card-body ">
                    <div className="color">
                      {" "}
                      <p class="card-text text-center">Snacks</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-sm-4">
              <Link to={`/canteen2/deserts`}>
                <div class="card canteen1-card shadow-lg p-3 mb-5 bg-white rounded">
                  <img class="card-img-top" src={c5} alt="Card image cap" />
                  <div class="card-body ">
                    <div className="color">
                      <p class="card-text text-center">Deserts</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Canteen1;
