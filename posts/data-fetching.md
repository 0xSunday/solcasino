---
title: Data fetching in Nextjs
date: "02-01-2023"
image: data-fetching.png
excerpt: SSR, SSG, CLR rendering ways in Nextjs
isFeatured: true
---

# Next.js

Next.js is a React-based full-stack framework that enables functionalities like pre-rendering of web pages. Unlike traditional react app where the entire app is loaded on the client, Next.js allow the web page to be rendered on the server, which is great for performance and SEO. You can learn more about Next.js

Next.js provides three data fetching methods and based on these methods, it renders content differently. (You can learn about different rendering methods

- getStaticProps
- getStaticPaths
- getServerSideProps

# getStaticProps

It preloads all of the data needed for a given page and renders pages ahead of the user’s request at build time. For speedier retrieval, all of the data is cached on a headless CMS. For better SEO performance, the page is pre-rendered and cached. If no other data fetching method is specified, Next.js will use this by default. It is used to implement Static Site Generation and Incremental Site Regeneration.

Properties of getStaticProps:

- It can only be exported from the page file, not the component file.
- It only runs on build time.
- It runs on every subsequent request in development mode.
- Its code is completely excluded from the client-side bundle.

```jsx
import React from "react";

export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  let allAlbums = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allAlbums: allAlbums.map((album) => album.title),
    },
  };
};

const Albums = ({ allAlbums }) => {
  return (
    <div>
      <h1>All Albums</h1>
      {allAlbums.map((album, idx) => (
        <div key={idx}>{album}</div>
      ))}
    </div>
  );
};

export default Albums;
```

# getStaticPaths

If a page uses getStaticProps and has dynamic routes, it must declare a list of paths that will be statically generated. Next.js will statically pre-render all the paths defined by getStaticPaths when we export a function named getStaticPaths from a page.

```jsx
import React from "react";

export const getStaticProps = async (ctx) => {
  // ctx will contain request parameters
  const { params } = ctx;

  // We will destructure id from the parameters
  const userId = params.id;

  // Fetching user data
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const userData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      user: userData,
    },
  };
};

export const getStaticPaths = () => {
  // Specifying all the routes to be
  // pre-rendered by next js
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "6" } },
      { params: { id: "7" } },
      { params: { id: "8" } },
      { params: { id: "9" } },
      { params: { id: "10" } },
    ],
    fallback: false,
  };
};

const User = ({ user }) => {
  return (
    <>
      <h1>User {user.id}</h1>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
    </>
  );
};

export default User;
```

Properties of getStaticPaths:

- It can only be exported from a page file.
- It is meant for dynamic routes.
- Page must also implement getStaticProps.
- It runs only at build time in production.
- It runs on every request in development mode.

# getServerSideProps

It will pre-render the page on every subsequent request. It is slower as compared to getStaticProps as the page is being rendered on every request. getServerSideProps props return JSON which will be used to render the page all this work will be handled automatically by Next.js. It could be used for calling a CMS, database, or other APIs directly from getServerSideProps. It is used to implement Server Side Rendering.

Properties of getServerSideProps:

- It runs on every subsequent request in development as well as production mode.
- Its code is excluded from the client-side bundle.
- It can only be exported from page file.

```jsx
import React from "react";

export const getServerSideProps = async (ctx) => {
  // ctx is the context object which contains the request,
  // response and props passed to the page.

  // fetching data from jsonplaceholder.
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let allPosts = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allPosts: allPosts.map((post) => post.title),
    },
  };
};

const Posts = ({ allPosts }) => {
  return (
    <div>
      <h1>All Posts</h1>
      {allPosts.map((post, idx) => (
        <div key={idx}>{post}</div>
      ))}
    </div>
  );
};

export default Posts;
```

## When to use which data fetching method:

f your page’s content is static or doesn’t change frequently then you should go for getStaticProps as it builds pages on build time hence increasing performance. If your page has dynamic routes then getStaticPaths should be used along with getStaticProps.

But if your website contains a page whose data changes very frequently then you must use getServerSideProps as it fetches fresh data on every request.

to create next app in

```
npx create-next-app@latest myproject

```

When we open our project in a code editor, we see a straightforward project structure. For the scope of this tutorial, we will only focus on /pages directory. We’ll first cleanup the /pages/index.js file. Then we’ll create two new pages albums, posts, and a dynamic routes page /users/[id].
