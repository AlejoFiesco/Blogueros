import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { userData, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!userData) return <Navigate to="/" />;
  return <>{children}</>;
}
