---
title: Putting Things Into Context
date: 2021-08-07
author: andrew davisson
---

If you are developing with React then you are very familiar with state and some larger state management tools such as Redux. When I was learning React I mainly worked on smaller projects that did not require anything other than local state. Still, I worked on learning how to implement Redux because I was positive it prove useful.

When I landed my first job though I quickly learned about contexts and how they can be used as a very simple way to manage larger states and how they can be a central way to provide functionality to several related components.
<br><br>

## Introduction

Contexts are a great way to provide a "global state" to several React components. Beyond that though, they also allow you to provide common functionality to any components that need it. Another great feature of contexts, is that they help you avoid prop drilling, which makes troubleshooting way easier.
<br><br>

## When to Use Contexts

At first, figuring out when to use contexts can be a little tricky, but it quickly becomes easy to find out where to use them and when to refactor existing functionality into contexts. Most applications will have user accounts, and those user accounts typically have a user profile page. Let's use this user profile page as an example. Just using local state a user profile page might have something like this going on:

    /* UserProfile.tsx */

    const UserProfile:React.FC = () => {
      const [data, setData] = useState<any>(null);
      const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
        fetch(/* fetch data from url */)
          .then(response => {
            setData(response)
            setLoading(false)
          })
      })

      if (loading) {
        return <Loading />
      }

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

While this is a very small example you can see that we have a few components that are using related data, and in some cases the same data. We also have a lot of props that we are passing, and if any of these components have child components then we are probably going to pass props several levels deep.

This is a great spot for a context.
<br><br>

## Creating a Context

There are two parts to creating a context, the Context (consumer) and the Context Provider. The Context Provider wraps components to **_provide_** functionality to those components and the child components down the component tree. The Context is **_consumed_** by those child components so that they can use the provided functionality.

Let's look at an example of what a context might look like for our user profile:

    /* UserProfileContext.tsx */

    // Defined the values and types that the context will provide
    export type UserProfileContextType = {
      firstName: string;
      lastName: string;
      email: string;
      age: number;
      description: string;
      hometown: string;
    }

    // Initialize the context
    const Context = React.createContext<UserProfileContextType>({
      firstName: "",
      lastName: "",
      email: "",
      age: null,
      description: "",
      hometown: "",
    })

    // Create the ContextProvider
    export const UserProfileContextProvider: ReactFC<PropsWithChildren<{initialValue: UserProfileContextType}>> = ({
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

    export default Context;

Here we have created a context that takes in a `firstName`, `lastName`, `email`, `age`, `description`, and `hometown` as the initial values and then exposes those values through the context provider.
<br><br>

## Using the Context

Alright, so let's start using this context. Our first step will be to wrap the components with the Context Provider. So now our `UserProfile` component will look like this:

    /* UserProfile.tsx */

    import { UserProfileContextProvider } from "./UserProfileContext";

    const UserProfile:React.FC = () => {
      const [data, setData] = useState<any>(null);
      const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
        fetch(/* fetch data from url */)
          .then(response => {
            setData(response)
            setLoading(false)
          })
      })

      if (loading) {
        return <Loading />
      }

      return (
        <UserProfileContextProvider initialValue={data}>
          <UserProfileHeader />
          <UserProfileTabs>
            <AboutUser />
            <UserSettings />
          </UserProfileTabs>
        </UserProfileContextProvider>
      )
    }

Look at that! Our `UserProfile` component is so much simpler, and we got rid of all of our props! The only thing we really changed is instead of passing the data down as props to each component, we provided the data to the `UserProfileContextProvider` through the `initialValue` prop and wrapped all of our components with the provider.

The next step is to use the data provided by the context provider in our child components. With React Hooks this is extremely easy. The hook we will use is called `useContext`. Let's take a look how we might do this in the `UserProfileHeader` component:

    /* UserProfileHeader.tsx */

    import { useContext } from "react";
    import UserProfileContext from "./UserProfileContext";

    const UserProfileHeader = () => {
      const userProfileContext = useContext(UserProfileContext);

      return (
        <div>
          <h1>{userProfileContext.firstName} {userProfileContext.lastName}</h1>
          <p>{userProfileContext.email}</p>
        </div>
      )
    }

That is all it takes! We say that we want to use the `UserProfileContext` and set it to the variable `userProfileContext`, and then those values are available to us. We could simplify it a little bit further as well with a little bit of destructuring:

    const { firstName, lastName, email } = useContext(UserProfileContext);

And then use it below like this:

    <h1>{firstName} {lastName}</h1>
    <p>{email}</p>

Nice! We can use this same pattern for all of the child components. Just load the context with the `useContext` hook and then use the values we need from it.
<br><br>

## Conclusion

Contexts have been incredibly useful for me in my job, and after learning how to use them properly I can see very few instances where I would need a larger state management tool like Redux. The trickiest part of learning contexts can be figuring out where they can best be used, but with some practice creating and using them it becomes very easy to identify.
