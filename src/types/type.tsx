export interface RepositoryOwner {
  login?: string;
}

export interface RepositoryStargazers {
  totalCount?: number;
}

export interface Repository {
  url?: string;
  name?: string;
  nameWithOwner?: string;
  description?: string;
  id?: string;
  owner?: RepositoryOwner;
  stargazers?: RepositoryStargazers;
}

export interface SearchNode {
  node?: Repository;
}

export interface SearchEdge {
  edges?: SearchNode[];
}

export interface SearchRepositoriesResponse {
  search?: SearchEdge;
}

export interface RepositoryOwnerDetails {
  id?: string;
  login?: string;
  avatarUrl?: string;
}

export interface RepositoryDetailsStargazers {
  totalCount?: number;
}

export interface RepositoryDetailsWatchers {
  totalCount?: number;
}

export interface RepositoryDetailsPrimaryLanguage {
  name?: string;
}

export interface RepositoryDetails {
  name?: string;
  owner?: RepositoryOwnerDetails;
  createdAt?: string;
  updatedAt?: string;
  nameWithOwner?: string;
  description?: string;
  stargazers?: RepositoryDetailsStargazers;
  viewerSubscription?: string;
  watchers?: RepositoryDetailsWatchers;
  primaryLanguage?: RepositoryDetailsPrimaryLanguage;
}

export interface GetRepositoryResponse {
  repository?: RepositoryDetails;
}
