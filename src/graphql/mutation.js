import { gql } from "graphql-request";

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($post: PostInput) {
    createPost(post: $post) {
      statusCode
      data {
        id
        title
        body
        isSchedule
        datetimeSchedule
        createdAt
      }
      error
    }
  }
`;
