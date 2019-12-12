# Turing web app boilerplate
This is a boilerplate repository for future Turing Tech front-end projects.
This project currently includes an example GraphQL setup (w/ cookie Auth), a global state management setup & REST cookie auth setup.
You probably won't need all of the above. See sections below for steps on how to slim down the app.

Deployed on [zeit](now.sh) using `now.sh`, link [here](https://turing-boilerplate.now.sh/).

## Technologies used
- ▲ Next.js
- 💅 Styled-components
- ∞ Immer
- 🐻 Zustand
- Ⓐ Apollo
- 🎀 Eslint + Prettier

## Using GraphQL?
There are examples on how GraphQL integrates with Next.js in `utils/apollo.js`, and the `components/apollo-example/` folder.
You can use both `graphql-tag` to write queries in JS files, or `import-graphql` to write queries in separate files.
Both have patterns examples in e.g. `components/apollo-example/Submit.js`.

Think about whether you will need global state management, or Apollo's cache is sufficient for your use case.

If global state is obsolete:
- remove `stores/`, `utils/stateUtils.js` & `components/state-example/` from the project tree.
- Remove `zustand` & `immer` from `package.json`.

Furthermore:
- Remove the REST cookie examples in `pages/` folder, namely `api/`, `login.js`, `profile.js`, `index.js`.
- Rename `apolloIndex.js` to `index.js`.

## Using REST?
There are examples on how `zustand` & `immer` is used for global state management in `stores/`, `utils/stateUtils.js` & `components/state-example/`.
Zustand's init in `stateUtils` already integrates `immer` & access to global state through `redux dev tools`.

Think whether you'll need global state management for your use case.

If global state is obsolete:
- Remove `stores/`, `utils/stateUtils.js` & `components/state-example/` from the project tree.
- Remove `zustand` & `immer` from `package.json`.

To remove GraphQL setup, follow these steps:
- Remove `components/apollo-example`, `utils/apollo.js` & `graphql` folder.
- Remove `pages/apolloIndex.js` & `pages/client-only.js`.
- Remove `graphql-tag` & `import-graphql` from `.babelrc`.
- Change `dev` script in `package.json` to only contain `next`.
- Remove `@apollo/react-hooks`, `@apollo/react-ssr`, `apollo-cache-inmemory`, `apollo-client`, `apollo-link-context`, `apollo-link-http`, `graphql`, `graphql-tag`, `babel-plugin-graphql-tag` & `babel-plugin-import-graphql` from `package.json`.

Take a look at how cookies are handled in `pages/index.js`, `pages.login.js`, `auth.js`

## Why Next.js?
 See [this](https://www.reddit.com/r/reactjs/comments/au5z1u/does_nextjs_will_be_soon_obsolete/ehgxu5p/?context=1) comment from the lead maintainer of `Next.js`.
