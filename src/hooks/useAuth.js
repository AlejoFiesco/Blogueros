import { authContext } from "../auth/context/authContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
