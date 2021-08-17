import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GetHomes from "./GetHomes";
import Nav from "./Nav";

//ApolloClient is used for consuming/sending request to the GraphQL Express
//uri mentioned in here is just for the development,uri refers to the backend end point
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <div className="App">
        <GetHomes />
      </div>
    </ApolloProvider>
  );
}

export default App;
