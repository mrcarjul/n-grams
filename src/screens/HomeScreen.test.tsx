import React from "react";

// Note: testing-library must be required after react-native.
import { fireEvent, render } from "@testing-library/react-native";
import { HomeScreen } from ".";

describe("HomeScreen UI has correct elements", () => {
  const { queryByTestId } = render(<HomeScreen />);
  test("should have a textinput for phrase", () => {
    expect(queryByTestId("inputHome")).not.toBeNull();
  });

  test("should have a flatlist to render n-grams permutations", () => {
    expect(queryByTestId("flatlistHome")).not.toBeNull();
  });

  test("should have a button to request for n-grams permutations", () => {
    expect(queryByTestId("btnHome")).not.toBeNull();
  });
});
