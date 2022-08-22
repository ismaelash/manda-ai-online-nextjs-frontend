import { request } from "graphql-request";

export default async function graphqlClient(query, variables) {
  return await request("https://ipemakkvzh.execute-api.us-east-1.amazonaws.com/dev/", query, variables);
}
