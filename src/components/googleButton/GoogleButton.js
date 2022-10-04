import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function GoogleButton() {
  const { logInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleLogIn = async () => {
    await logInWithGoogle();
    navigate("/user");
  };
  return <button onClick={handleLogIn}>Google LogIn</button>;
}
