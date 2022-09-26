import { Routes, Route } from "react-router-dom";
import MotionRoute from "./layout/motion-route";
import LogIn from "./components/pages/login/log-in";
import "./App.css";
import { Follows } from "./components/pages/follows/Follows";

function App() {
  const post = {
    title: "Post Blogueros",
    content: "Descripción del post Descripción del postDescripción del postDescripción del postDescripción del postDescripción del postDescripción del postDescripción del post",
    visibility: "public",
    comments: 3,
    date: "23 Sep 2022",
    userTag: "alejo123"
  };

  return (
    <Routes>
      <Route path="/" element={<MotionRoute element="login"/>} />
      <Route path="/post" element={<MotionRoute element="post" post={ post }/>} />
      <Route path="/newpost" element={<MotionRoute element="newpost"/>} />
      <Route index element={<LogIn />} />
      <Route path="follows" element={<Follows />} />
    </Routes>
  );
}
export default App;
