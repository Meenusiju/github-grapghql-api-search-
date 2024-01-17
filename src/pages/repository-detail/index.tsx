import React from "react";
import { GET_REPOSITORY_DETAILS } from "../../services/githubService";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

export const RepositoryDetail = () => {
  const { owner, name } = useParams();

  const { loading, error, data } = useQuery(GET_REPOSITORY_DETAILS, {
    variables: { owner, name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const repository = data?.repository;

  return (
    <div className="m-auto pt-8 max-w-[1232px] ">
      <a href="/" className="underline text-center hover:text-sky-700">
        Home
      </a>
      <h2 className="text-3xl font-bold  text-center m-8">
        Repository Details
      </h2>
      {repository && (
        <div className="p-24 rounded shadow-2xl flex flex-col items-center gap-6">
          <img
            className="rounded-full w-16 h-16 mr-4"
            src={repository.owner.avatarUrl}
            alt="user avatar"
          />

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold ">Repo Name: {repository.name}</h3>
            <p className="text-gray-700 ">
              Description: {repository.description}
            </p>
            <p className="text-gray-700 ">Owner: {repository.owner.login}</p>
            <p className="text-gray-700 ">
              Stars: {repository.stargazers.totalCount}
            </p>
            <p className="text-gray-700 ">
              Watchers: {repository.watchers.totalCount}
            </p>
            <p className="text-gray-700 ">Created at: {repository.createdAt}</p>
            <p className="text-gray-700 ">Updated at: {repository.updatedAt}</p>
            <p className="text-gray-700 ">
              Subscription: {repository.viewerSubscription}
            </p>
            <p className="text-gray-700 ">
              Primary Language: {repository.primaryLanguage?.name}
            </p>
          </div>
        </div>
      )}

      {!repository && <p className="text-red-500">Repository not found</p>}
    </div>
  );
};

export default RepositoryDetail;
