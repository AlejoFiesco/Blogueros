import FormLogIn from "../../formLogin/form-login";
import GoogleButton from "../../googleButton/GoogleButton";
import "./login.css";

const LogIn = () => {
  return (
    <div className="container-log">
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
      <GoogleButton />
    </div>
  );
};

export default LogIn;
