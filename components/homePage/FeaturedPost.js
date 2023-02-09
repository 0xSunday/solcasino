import React from "react";
import PostGrid from "../posts/PostGrid";
import classes from "./FeaturedPost.module.css";
const FeaturedPost = (props) => {
  return (
    <section className="my-9 sm:my-16 ">
      <h1 className="font-1 font-poppins sm:pb-10  pb:-5 font-semibold sm:text-[52px] text-[35px] text-yellow-300 ss:leading-[100px] leading-[75px] text-center">
        POSTS
      </h1>
      <div className="">
        <PostGrid posts={props.posts} />
      </div>
    </section>
  );
};

export default FeaturedPost;
