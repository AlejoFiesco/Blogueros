// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { TextInput } from "../../textInput/TextInput";
import { useState } from "react";
// And now we can use these
export const SignupForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const { name, email, password } = user;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          className="input-control"
          type="name"
          placeholder="Tu nombre ..."
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="input-control"
          type="email"
          placeholder="Tu email ..."
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          className="input-control"
          type="password"
          placeholder="Tu password ..."
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Registrarme" />
    </form>
  );
};
