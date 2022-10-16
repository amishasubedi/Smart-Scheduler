import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarInfo from "../Calendar/CalendarInfo";
import "./Login.css";

export default function (props) {
  return (
    <div className="background">
      <div className="shape">
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="button">
                  LOGIN
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                <a href="#">
                  <h4>Forgot password?</h4>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
