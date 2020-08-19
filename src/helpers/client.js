import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import config from "../config";

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({ uri: config.API_URL }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
