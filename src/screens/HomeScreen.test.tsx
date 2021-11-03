import React from "react";
import { fireEvent, render, RenderAPI } from "@testing-library/react-native";
import { HomeScreen } from ".";

describe("HomeScreen UI has correct elements", () => {
  let componentTree: RenderAPI;

  beforeEach(() => {
    componentTree = render(<HomeScreen />);
  });

  test("should have a textinput for phrase", () => {
    const { queryByTestId } = componentTree;
    expect(queryByTestId("inputHome")).not.toBeNull();
  });

  test("should have a flatlist to render n-grams permutations", () => {
    const { queryByTestId } = componentTree;
    expect(queryByTestId("flatlistHome")).not.toBeNull();
  });

  test("should have a button to request for n-grams permutations", () => {
    const { queryByTestId } = componentTree;
    expect(queryByTestId("btnHome")).not.toBeNull();
  });
});
