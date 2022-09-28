// import { useAuth } from "../../../hooks/useContext";
import FormLogIn from "../../formLogin/form-login";
import "./login.css";

const LogIn = () => {
  return (
    <div>
      <div className="container-log">
        <div className="row">
          <div className="col-md-6">
            <div className="login-form">
              <h1>Log In</h1>
              <FormLogIn />
              <div className="content-link">
                <p className="p-link">
                  Don't have an account?{" "}
                  <a className="a-link" href="/register">
                    Sign Up
                  </a>
                </p>
                <p className="p-link">
                  Forgot Password{" "}
                  <a className="a-link" href="/forgot-password">
                    Click Me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
