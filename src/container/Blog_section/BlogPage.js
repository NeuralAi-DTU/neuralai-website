import React from "react";
import Heading from "../../common/Header/Heading";
import Blog_section from "./Blog_section";
import classes from "./BlogPage.module.css";

function BlogPage(props) {
  return (
    <div className={classes.blogPage}>
      <Heading title="BLOGS" subTitle="Blogs" color="#E95D76" />
      <Blog_section />
    </div>
  );
}

export default BlogPage;
