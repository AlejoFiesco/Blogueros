import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function FormLogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { logIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }
    await logIn(email, password);
    navigate("/user");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputName">Email</label>
        <input
          type="text"
          className="input-control"
          id="inputName"
          aria-describedby="TeHelp"
          placeholder="Your Name ..."
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="input-control"
          id="inputPassword"
          placeholder="Your password ..."
          name="password"
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Login" />
      {error && <p>{error}</p>}
    </form>
  );
}
