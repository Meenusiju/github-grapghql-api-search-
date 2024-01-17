import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from ".";

describe("SearchInput", () => {
  it("Should render SearchInput component", () => {
    const onChangeMock = jest.fn();
    render(<SearchInput value="" onChange={onChangeMock} />);

    expect(
      screen.getByPlaceholderText("Search for repositories eg: react project")
    ).toBeInTheDocument();
  });

  it("Should handle input change", () => {
    const onChangeMock = jest.fn();
    render(<SearchInput value="" onChange={onChangeMock} />);

    fireEvent.change(
      screen.getByPlaceholderText("Search for repositories eg: react project"),
      {
        target: { value: "test" },
      }
    );

    expect(onChangeMock).toHaveBeenCalledWith("test");
  });
});
