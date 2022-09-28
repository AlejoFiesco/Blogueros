import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export default function UserPage() {
  const { userData, logOut, loading } = useAuth();
  const navigate = useNavigate();

  console.log(userData);
  const handleClose = async () => {
    await logOut();
    navigate("/");
  };
  if (loading) return <h1>Cargando ...</h1>;
  return (
    <div>
      <h1>Hola 👋 {userData.email}</h1>
      <button onClick={handleClose}>Logout</button>
    </div>
  );
}
