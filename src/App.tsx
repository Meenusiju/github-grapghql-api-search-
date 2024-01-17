import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import RepositoryDetail from "./pages/repository-detail";

const authToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/repo/:owner/:name"
            element={<RepositoryDetail />}
          ></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
