import "./login.css";

const LogIn = () => (
  <div>
    <div className="container-log">
      <div className="row">
        <div className="col-md-6">
          <div className="login-form">
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
                Don't have an account?{" "}
                <a className="a-link" href="/sign-up">
                  Sign Up
                </a>
              </p>
              <p className="p-link">
                Forgot Password{" "}
                <a className="a-link" href="/register">
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

export default LogIn;
