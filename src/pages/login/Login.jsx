import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../../api";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import Footer from "../../components/footer/Footer";

function Login() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res.data.token);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <form onSubmit={handleLogin} className="login">
        <div className="logo_login">
          <img src={logo} alt="" />
        </div>
        <label className="label_input">
          Email Address*
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </label>
        <label className="label">
          Password*
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <div className="remember">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <button>Forgot Password?</button>
        </div>
        <div className="login_btn">
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Login"}
          </button>
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Login;
