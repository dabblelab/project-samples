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
