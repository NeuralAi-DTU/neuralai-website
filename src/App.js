import React from "react";
import Banner from "./container/Banner/Banner";
import BlogPage from "./container/Blog_section/BlogPage";
import Landing from "./container/Landing/Landing";
import Navbar from "./container/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Landing />
      <BlogPage />
    </>
  );
}
