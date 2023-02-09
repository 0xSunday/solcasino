---
title: What is React
date: "01-31-2023"
image: what-is-react.png
excerpt: A detail blog about reactjs
isFeatured: true
---

# What is React?

**React** is a **JavaScript library** for building interactive **user interfaces**.

By user interfaces, we mean the elements that users see and interact with on-screen.

![React working process](https://nextjs.org/static/images/learn/foundations/user-interface.png)

By library, we mean React provides helpful functions to build UI, but leaves it up to the developer where to use those functions in their application.

Part of React’s success is that it is relatively unopinionated about the other aspects of building applications. This has resulted in a flourishing ecosystem of third-party tools and solutions.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}
```

It also means, however, that building a complete React application from the ground up requires some effort. Developers need to spend time configuring tools and reinventing solutions for common application requirements.
