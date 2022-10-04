import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import * as Yup from "yup";
import { AuthErrorCodes } from "firebase/auth";

export default function FormLogIn() {
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  //validate
  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { logIn } = useAuth();

  const logInWithEmailPassword = async () => {
    console.log("dentro de logInWithEmailPassword");
    await logIn(values.email, values.password);
    if (AuthErrorCodes.WRONG_PASSWORD) alert("Wrong the password");
    if (AuthErrorCodes.INVALID_EMAIL) setError("Wrong the email");
    resetForm();
    navigate("/user");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: logInWithEmailPassword,
  });
  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;

  return (
    <form className="container-form" onSubmit={handleSubmit}>
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
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && <p>{errors.email}</p>}
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
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && <p>{errors.password}</p>}
      </div>
      <input type="submit" className="btn btn-primary" value="Login" />
      {error && <p>{error}</p>}
    </form>
  );
}
