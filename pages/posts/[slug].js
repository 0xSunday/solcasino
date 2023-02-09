import NavBar from "@/components/NavBar";
import PostDetails from "@/components/posts/PostDetails";
import React from "react";
import { getPostData, getPostsFiles } from "../../lib/post-util";
const postDetails = (props) => {
  return (
    <section className="bg-primary xl:px-0 sm:px-16 px-6 ">
      <NavBar con={true} cont={false} />
      <PostDetails post={props.post} />
    </section>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// export function getStaticProps(context) {
//   const { params } = context;
//   const { slug } = params;
//   const PostData = getPostData(slug);

//   return {
//     props: {
//       postdetails: PostData,
//     },
//     revalidata: 1200,
//   };
// }

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

// export function getStaticPaths() {
//   const postFileName = getPostsFiles();
//   const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ""));
//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug } })),
//     fallback: false,
//   };
// }

export default postDetails;
