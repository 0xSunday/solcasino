---
title: How to use useState
date: "01-31-2023"
image: using-use-state-hook.png
excerpt: Useing useState hook in reactjs
isFeatured: true
---

# Using the State Hook

Try the new React documentation.

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

The introduction page used this example to get familiar with Hooks:

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
```

We’ll start learning about Hooks by comparing this code to an equivalent class example.

# Equivalent Class Example

If you used classes in React before, this code should look familiar:

```JSX
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

The state starts as { count: 0 }, and we increment state.count when the user clicks a button by calling this.setState(). We’ll use snippets from this class throughout the page.

# Hooks and Function Components

As a reminder, function components in React look like this:

```jsx
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
};
```

or this

```jsx
function Example(props) {
  // You can use Hooks here!
  return <div />;
}
```

You might have previously known these as “stateless components”. We’re now introducing the ability to use React state from these, so we prefer the name “function components”.

Hooks don’t work inside classes. But you can use them instead of writing classes.

# What’s a Hook?

Our new example starts by importing the useState Hook from React:

```
import React, { useState } from 'react';

function Example() {
  // ...
}
```

What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

# Declaring a State Variable

In a class, we initialize the count state to 0 by setting this.state to { count: 0 } in the constructor:

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```

In a function component, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component:

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
```

What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.

Now that we know what the useState Hook does, our example should make more sense:

```jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
```

We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.
