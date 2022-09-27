import RouterApp from "./routers/Router-App";
import { AuthProvider } from "./auth/context/authContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  );
}
export default App;
