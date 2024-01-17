import React from "react";

const CardRepository = ({ repo }: any) => {
  return (
    <div className="flex flex-wrap lg:basis-[calc((100%-16px*2)/3)] md:basis-auto">
      {repo && repo.node && (
        <a
          href={`/repo/${repo.node.owner.login}/${repo.node.name}`}
          className="flex-1 max-w-s rounded-md overflow-hidden shadow-md mx-2 my-4 p-4"
        >
          <h3 className="text-xl font-semibold mb-2">{repo.node.name}</h3>
          <p className="text-gray-600 mb-2">{repo.node.description}</p>
          <p className="text-gray-500">{repo.node.owner.login}</p>
        </a>
      )}
    </div>
  );
};

export default CardRepository;
