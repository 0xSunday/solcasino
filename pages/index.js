import FeaturedPost from "@/components/homePage/FeaturedPost";
import Hero from "@/components/homePage/Hero";
import NavBar from "@/components/NavBar";

import { Fragment } from "react";
import { getFeaturedPosts } from "../lib/post-util";

export default function Home(props) {
  return (
    <div className="h-[100vh] sm:bg-gradient-to-tr bg-gradient-to-br from-primary via-[#0A2647] to-primary  sm:px-16 pb-10 px-6 ">
      <NavBar con={false} cont={true} />
      <Hero />
      {/* <FeaturedPost posts={props.posts} /> */}
    </div>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}
