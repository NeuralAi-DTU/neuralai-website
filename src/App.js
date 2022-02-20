import React from "react";
import BlogPage from "./container/Blog_section/BlogPage";
import DevProjectPage from "./container/DevelopmentProjects/DevProjectPage";
import Landing from "./container/Landing/Landing";

export default function App() {
  return (
    <>
      <Landing />
      <DevProjectPage />
      <BlogPage />
    </>
  );
}
