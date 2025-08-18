import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { AuthContext } from "../../AuthContext";

function Login() {
  const { setItemInLS } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
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
    setError("");

    try {
      const response = await axios.post(
        "https://trade-nova-backend.onrender.com/api/user/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 200) {
        const res_data = await response.data;
        // localStorage.setItem("token", res_data.token);
        setItemInLS(res_data.token);
      }

      console.log("login verification done properly");
      // // Store the token in localStorage
      // localStorage.setItem("authToken", response.data.token);

      // Redirect to dashboard or home page
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="text-center mb-4">
          <h2 className="login-title">Welcome Back</h2>
          <p className="text-muted">
            Login in to continue to your trading account
          </p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
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

          {/* Password Field */}
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              <FaLock className="input-icon" /> Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
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
            <div className="text-end mt-2">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Log In
          </button>

          <div className="text-center">
            <p className="mb-0">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
