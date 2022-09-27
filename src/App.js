import { Routes, Route } from "react-router-dom";
import MotionRoute from "./layout/motion-route";

import LogIn from "./components/pages/login/log-in";
import { Follows } from "./components/pages/follows/Follows";
import { Post } from "./components/posts/post";
import { NewPost } from "./components/posts/new-post";
import { AuthProvider } from "./context/authContext";
import "./App.css";

function App() {
  const post = {
    title: "Post Blogueros",
    content:
      "Descripción del post Descripción del postDescripción del postDescripción del postDescripción del postDescripción del postDescripción del postDescripción del post",
    visibility: "public",
    comments: 3,
    date: "23 Sep 2022",
    userTag: "alejo123",
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MotionRoute />}>
          <Route index element={<LogIn />} />
          <Route path="/post" element={<Post post={post} />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="follows" element={<Follows />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
export default App;
