import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    handleRegister,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    logInusingGoogle,
    error,
    toggleLogin,
    isLogin,
  } = useAuth();
  return (
    <div>
      <div
        className="container mt-4  w-50"
        style={{ background: `linear-gradient(to right, #70e1f5, #ffd194) ` }}
      >
        <h3 className="mt-5 text-center text-dark fw-bolder ">
          {isLogin ? "Register" : "Login"} Form
        </h3>

        <form onSubmit={handleRegistration}>
          <input
            style={{ width: "100%", marginBottom: "20px" }}
            onChange={handleEmailChange}
            className="input-felid"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <br />
          <input
            style={{ width: "100%", marginBottom: "20px" }}
            onChange={handlePasswordChange}
            className="input-felid"
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <div className="mb-3 form-check">
            <input
              onChange={toggleLogin}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label fw-bolder" for="exampleCheck1">
              {isLogin
                ? "Already login?click text to go for login form"
                : " New User? click text to go Register form"}
            </label>
          </div>
          <div className="text-danger">{error}</div>
          <br />

          <button
            onClick={handleRegister}
            className="btn btn-info border-0 mt-2 mb-2"
            type="submit"
            style={{
              background: `linear-gradient(to right, #b993d6, #8ca6db)`,
            }}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </form>

        <div>
          <button
            className="btn-light mb-3 border-0 rounded text-nowrap"
            onClick={logInusingGoogle}
            style={{ backgroundColor: "#DBF9FC" }}
          >
            <i className="fab fa-google text-warning"></i> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
