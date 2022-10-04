import { useFormik } from "formik";
import * as Yup from "yup";
// import { TextInput } from "../../textInput/TextInput";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { signup } = useAuth();

  const registerSubmit = async () => {
    setError("");
    await signup(values.email, values.password);
    resetForm();
    navigate("/user");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: registerSubmit,
  });
  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = formik;
  return (
    <div className="container-log">
      <h1>Sign up</h1>
      {error && <p>{error}</p>}
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="input-control"
            type="email"
            placeholder="Tu email ..."
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            className="input-control"
            type="password"
            placeholder="Tu password ..."
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          {errors.password && touched.password && <p>{errors.password}</p>}
        </div>
        <input type="submit" className="btn btn-primary" value="Registrarme" />
      </form>
      <div className="content-link">
        <p className="p-link">
          Return{" "}
          <a className="a-link" href="/">
            LogIn
          </a>
        </p>
      </div>
    </div>
  );
};
