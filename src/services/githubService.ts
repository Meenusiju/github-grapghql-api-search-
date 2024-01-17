import { gql } from '@apollo/client';

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 50) {
      edges {
        node {
          ... on Repository {
            url
            name
            nameWithOwner
            description
            id
            owner {
              login 
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
export const GET_REPOSITORY_DETAILS = gql`
  query GetRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      owner {
        id
        login
        avatarUrl
      }
      createdAt
      updatedAt
      nameWithOwner
      description
      stargazers {
        totalCount
      }
      viewerSubscription,
      watchers {
        totalCount
      }
      primaryLanguage {
        name
      },
    }
  }
`;