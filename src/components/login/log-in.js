import "./login.css";
import { Link } from 'react-router-dom';

const LogIn = () => (
  <div className="container-log row col-md-6 login-form">
    <h1>Log In</h1>
    <form>
      <div className="form-group">
        <label htmlFor="inputName">Email</label>
        <input
          type="text"
          className="input-control"
          id="inputName"
          aria-describedby="TeHelp"
          placeholder="Your Name ..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="input-control"
          id="inputPassword"
          placeholder="Your password ..."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
    <div className="content-link">
      <p className="p-link">
        <span>Don't have an account?</span>
        < Link to="/sign-up" className="a-link">Sign up</Link>
      </p>
      <p className="p-link">
        <span>Forgot Password</span>
        < Link to="/forgot-password" className="a-link">Click me</Link>
      </p>
    </div>
  </div>
);

export default LogIn;
