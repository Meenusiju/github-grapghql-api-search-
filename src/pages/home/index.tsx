import { useQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH_REPOSITORIES } from "../../services/githubService";
import SearchInput from "../../components/search-input";
import CardRepository from "../../components/card";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { queryString: searchQuery },
    skip: !searchQuery,
  });

  const repositories = data?.search.edges;

  return (
    <section className="lpt-20">
      <div className=" pt-20 m-auto max-w-[1232px]">
        <h2 className="text-3xl rounded-md font-bold mb-4 text-center bg-purple-900 bg-opacity-85 text-white py-5">
          Github Repository Search
        </h2>

        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        {loading && <p className="text-gray-700">Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        <div className="flex w-full flex-wrap overflow-hidden">
          {repositories &&
            repositories.map((repo: any) => (
              <CardRepository repo={repo} key={repo.node.name} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
