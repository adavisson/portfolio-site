---
title: Putting Things Into Context
date: 2021-08-01
author: andrew davisson
---

If you are working as a React developer, then you are very familiar with state and some larger state management tools such as Redux. When I was learning React I mainly worked on smaller projects that did not require anything other than local state. Still, I worked on learning how to implement Redux because I was positive it prove useful.

When I landed my first job though I quickly learned about contexts and how they can be used as a very simple way to manage states and be a central way to provide functionality to several related components.
<br><br>

## Introduction

Contexts are a great way to provide a "global state" to several React components. Beyond that though, they also allow you to provide common functionality to any components that need it. Another great feature of contexts, is they help you avoid prop drilling which makes troubleshooting way easier.
<br><br>

## When to Use Contexts

At first, figuring out when to use contexts can be a little tricky, but it quickly becomes easy to find out where to use them and when to refactor exiting functionality into contexts. Since every coding example ever uses a blog let's not change that and use a blog as an example. Blogs have user. Just using local state a user profile page might have something like this going on:

--Account.tsx--

    const UserProfile:React.FC = () => {
      // fetch user data

      return (
        <UserProfileHeader
          firstName={data.firstName}
          lastName={data.lastName}
          email={data.email} />
        <UserProfileTabs>
          <AboutUser
            firstName={data.firstName}
            lastName={data.lastName}
            email={data.email}
            age={data.age}
            description={data.description}
            hometown={hometown} />
          <UserSettings settings={data.settings} />
        </UserProfileTabs>
      )
    }

While this is a very small example you can see that we have a few components that are using related data and in some cases the same data. We also have a lot of props we are passing, and if any of these components have child components then we are probably going to pass props several levels deep.

This is a great spot for a context.
<br><br>

## Creating a Context

There are two parts to a context, the Context and the Context Provider. The Context Provider wraps the components to **_provide_** functionality to those components and the child components down the component tree. The Context is **_consumed_** by those child components so that they can use the provided functionality.

Let's look at an example of what a context might look like for our user profile

---UserProfileContext.tsx---

    export type UserProfileContextType = {
      firstName: string;
      lastName: string;
      email: string;
      age: number;
      description: string;
      hometown: string;
    }

    const Context = React.createContext<UserProfileContextType>({
      firstName: "",
      lastName: "",
      email: "",
      age: null,
      description: "",
      hometown: "",
    })

    export cosnt UserProfileContextProvider: ReactFC<PropsWithChildren<{initialValue: UserProfileContextType}>> = ({
      initialValue,
      children
    }) => {
      const { firstName, lastName, email, age, description, hometown } = initialValue;

      return (
        <Context.Provider
          value={{
            firstName,
            lastName,
            email,
            age,
            description,
            hometown,
          }}
        >
          {children}
        </Context.Provider>
      )
    }

Here we have created a context that takes in a `firstName`, `lastName`, `email`, `age`, `description`, and `hometown` as the initial values and then exposes those values through the context provider.
<br><br>

## Using the Context
