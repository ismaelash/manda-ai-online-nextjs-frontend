import { request } from "graphql-request";

export default async function graphqlClient(query, variables) {
  return await request(process.env.NEXT_PUBLIC_ENDPOINT, query, variables);
}
