import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { SEARCH_REPOSITORIES, GET_REPOSITORY_DETAILS } from "./githubService";
import Home from "../pages/home";

const mocks = [
  {
    request: {
      query: SEARCH_REPOSITORIES,
      variables: { queryString: "yourSearchString" },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: {
                url: "repository-url",
                name: "repository-name",
              },
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_REPOSITORY_DETAILS,
      variables: { owner: "owner-name", name: "repository-name" },
    },
    result: {
      data: {
        repository: {
          name: "repository-name",
          owner: {
            id: "owner-id",
            login: "owner-login",
          },
        },
      },
    },
  },
];

it("Should render component with correct data", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  await (() => {
    expect(screen.getByText("repository-name")).toBeInTheDocument();
    expect(screen.getByAltText("owner-login")).toBeInTheDocument();
  });
});
