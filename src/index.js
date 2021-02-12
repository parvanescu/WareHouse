import React from 'react';
import ReactDOM from 'react-dom';
import Routing from "./Router/index"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";


const cache = new InMemoryCache({});

const client = new ApolloClient({
    cache,
    uri: "http://localhost:8080/graphql",
});



ReactDOM.render(
    <ApolloProvider client={client}>
    <Routing />
    </ApolloProvider>,
  document.getElementById('root')
);

