import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { AuthContext } from "../../AuthContext";

function Signup() {
  const { setItemInLS } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const response = await axios.post("http://localhost:5000/api/user/signup", {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });

    const res_data = response.data;

    setItemInLS(res_data.token);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="text-center mb-4">
          <h2 className="signup-title">Create Trading Account</h2>
          <p className="text-muted">Start your investment journey with us</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">
              <FaUser className="input-icon" /> Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              <FaEnvelope className="input-icon" /> Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Field */}
          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">
              <FaPhone className="input-icon" /> Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter 10-digit mobile number"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              <FaLock className="input-icon" /> Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock className="input-icon" /> Confirm Password
            </label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign Up
          </button>

          <div className="text-center">
            <p className="mb-0">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
