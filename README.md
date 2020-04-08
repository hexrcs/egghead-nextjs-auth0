# egghead-nextjs-auth0
Demo code for the Auth0 lessons of the [Introduction to Next.js 9 collection](https://egghead.io/playlists/introduction-to-next-js-9-9c01?af=dkm3m8) on Egghead.io

## [Set up Auth0 in a Next.js app for user Authentication](https://egghead.io/lessons/react-set-up-auth0-in-a-next-js-app-for-user-authentication?pl=introduction-to-next-js-9-9c01&af=dkm3m8)

Auth0 is a great service for adding an authentication layer in our Next.js project, so we don't need to worry about security ourselves. Best of all, their free plan allows us to have 7000 active users with unlimited logins, sufficient for a vast majority of projects.

In this lesson, we'll set up Auth0 so that we can secure a `/secret` page in the next video. We'll learn how to create a new Auth0 tenant for our Next.js app, and how to properly set up the environment variables with both `.env` and `next.config.js` files, to make sure our Auth0 client secret is stored safely, and how to initialize Auth0 in our project with the `@auth0/nextjs-auth0` node module.

During the setup process, we'll also learn how to conditionally set environment variables using the `PHASE` constants of Next.js so that we can have different values for `development` or `production` modes (e.g. `localhost:3000` vs. `example.org`). As a bonus, we'll see how we can generate a random password with OpenSSL locally in the terminal as well.

## [Implement user Authentication in a Next.js app with Auth0](https://egghead.io/lessons/next-js-implement-user-authentication-in-a-next-js-app-with-auth0?pl=introduction-to-next-js-9-9c01&af=dkm3m8)

With the Auth0 set up in our Next.js project, the next step is to integrate the authentication flow into our app.

In this lesson, we'll set up the API routes Auth0 needs to handle the auth process - `/api/login`, `/api/logout` and `/api/callback`. Then, we'll use the `getServerSideProps` lifecycle method in Next.js to authenticate users on the server-side. Finally, we'll update our `/secret` page component to have different states depending on the login session status of a visitor.

After this lesson, you will understand how to implement the user authentication logic in a Next.js app with Auth0.

