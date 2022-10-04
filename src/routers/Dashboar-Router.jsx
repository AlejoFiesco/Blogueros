import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MotionRoute from "../layout/motion-route";
import { Header } from "../components/header/Header";
import { Follows } from "../components/pages/follows/Follows";
import { MenuMobile } from "../components/menu/Menu-Mobile";
import { Profile } from "../components/profile/Profile";

export const DashboarRouter = () => {
  const post = {
    title: "Post Blogueros",
    content:
      "Descripción del post Descripción del postDescripción del postDescripción del postDescripción del postDescripción del postDescripción del postDescripción del post",
    visibility: "public",
    comments: 3,
    date: "23 Sep 2022",
    userTag: "alejo123",
  };

  const [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <Header handleShowMenu={handleShowMenu} />
      <div>
        {show && <MenuMobile handleShowMenu={handleShowMenu} />}
        <Routes>
          <Route
            path="post"
            element={<MotionRoute element="post" post={post} />}
          />
          <Route path="newpost" element={<MotionRoute element="newpost" />} />
          <Route path="follows" element={<Follows />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};
