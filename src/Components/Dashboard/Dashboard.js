import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, #70e1f5, #ffd194) `,
        height: "100vh",
      }}
    >
      <div className="row">
        <div
          className="col-md-2 col-sm-4 sidebar1 "
          style={{ height: "100vh" }}
        >
          <br />
          <div className="left-navigation">
            <ul className="list">
              <li>
                <h2>DashBoard</h2>

                <br />
                <button className=" btn-light rounded-pill border-0 mt-2 w-50">
                  <Link to="" className="nav-link text-black">
                    Users
                  </Link>
                </button>

                <br />
                <button className=" btn-light rounded-pill border-0 mt-2 w-50">
                  <Link to="" className="nav-link text-black">
                    charts
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-10 col-sm-8 main-content h-100">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
