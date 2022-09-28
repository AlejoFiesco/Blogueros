import { useAuth } from "../../../hooks/useAuth";

export default function UserPage() {
  const { userData, logOut, loading } = useAuth();

  console.log(userData);
  const handleClose = async () => {
    await logOut();
  };
  if (loading) return <h1>Cargando ...</h1>;
  return (
    <div>
      <h1>Hola 👋 {userData.email}</h1>
      <button onClick={handleClose}>Logout</button>
    </div>
  );
}
