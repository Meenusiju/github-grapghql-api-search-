import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardRepository from ".";

describe("CardRepository", () => {
  const mockRepo = {
    node: {
      name: "My test repo",
      description: "Test Description",
      owner: {
        login: "testuser",
      },
    },
  };

  test("renders CardRepository component", () => {
    render(<CardRepository repo={mockRepo} />);

    expect(screen.getByText("My test repo")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("testuser")).toBeInTheDocument();
  });
});
