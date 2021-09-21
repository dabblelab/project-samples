# Project Setup for nextjs

With technologies like

-Redux
-Typescript
-Tailwindcss
-Jest
-ReactTestingLibrary

## Create a nextjs project with typescript

Run the command

```term
yarn create next-app --typescript
```

## Install tailwind

```term
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## Create tailwind config

```term
npx tailwindcss init -p
```

## Add purge functionality of tailwind

```term
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
```

## Add tailwind imports to css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Add redux toolkit and react-redux

```term
yarn add @reduxjs/toolkit react-redux
```

## Create state folder and files in root dir like this

```
state/
  store.ts
  hooks.ts
```

## Add this in store.ts

```
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
```

## Add this in hooks.ts file

```
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## Change `pages/_app.tsx`

```tsx
import "../styles/globals.css";
import { store } from "../state/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```

## Create a components dir and create a counter component

```
components/
  counter/
    index.tsx
    useCounter.ts
    counterSlice.ts
```

## Add This to counter/index.tsx

```ts
import React from "react";
import useCounter from "./useCounter";

const Counter: React.FC<{}> = () => {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div className="p-5 mt-10 w-60 shadow-2xl bg-gray-100 rounded-md">
      <h3 className="text-center p-5">{count}</h3>
      <div className="flex justify-center items-center">
        <button className="p-5" onClick={handleIncrement}>
          +
        </button>
        <button className="p-5" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

## Add This to counter/useCounter.ts

```ts
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const useCounter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleIncrement = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(increment());
  };

  const handleDecrement = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(decrement());
  };

  return { count, handleIncrement, handleDecrement };
};

export default useCounter;
```

## Add This to counterSlice.ts

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../state/store";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

// thunk actions
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
```

## Statefull components

The above component which we created is a statefull component meaning
it has it's own state.

## StateLess components

There are going to be components which will not have there own state
those are called stateless components. They are bare bones react components

## My thoughts

I think we should keep all components flat inside components directory
A component is statefull if it has a componentSlice.ts file. This state
will be managed by redux toolkit.

All the actions will be exported from the slice files of statefull components

I also like to create custom hooks for logic that will be use inside
a component, if component gets large it's really helpful

For example i created `useCounter.ts` hook in the above component.

## Our components tree should look like this

```term
components/
    heading/
      index.tsx
    counter/
      index.tsx
      counterSlice.ts
      useCounter.ts
```

Here counter is statefull component but heading is stateless.

Even if the component is stateless if it's getting large it's
a good idea to split the logic into `useComponent` custom hook.

## Use the counter in Home page to make sure it works

Make sure you call the Counter, and page looks like this

```ts
const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Counter />
      </div>
    </div>
  );
};
```

## Run your application

Run this command and make sure the app is working properly

```term
yarn dev
```

## Setting up jest

Now we will setup testing in our project using jest & react-testing-library

Install these packages

```term
yarn add -D jest ts-jest @types/jest babel-jest @testing-library/react @testing-library/jest-dom identity-obj-proxy react-test-renderer
```

create a jest config file

```term
yarn ts-jest config:init
```

replace the newly created jest config file with this

```js
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
```

Create two files as such

```js
// __mocks__/fileMock.js

module.exports = "test-file-stub";
```

```js
// __mocks__/styleMock.js

module.exports = {};
```

Setup custom matchers by creating a file `jest.setup.js`.
add this to the jest config file

```js
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
```

then add this to `jest.setup.js`

```js
import "@testing-library/jest-dom/extend-expect";
```

## Let's write our first test

Create a dir named `__test__` in the root
add `home.test.ts`

add this in file

```js
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages";
import { store } from "../state/store";
import { Provider } from "react-redux";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const heading = screen.getByRole("heading", {
      name: /Welcome/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
```

## Run the jest

```term
yarn test
```

## If the test fails

Make it pass yourself!
GoodLuck!

## Thanks for reading the post i hope you learned something useful
