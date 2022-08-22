import { gql } from "graphql-request";

export const ALL_POST_QUERY = gql`
  query AllPosts {
    allPosts {
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

export const POSTS_SHOW_QUERY = gql`
  query PostsShow($datetimeLocale: String) {
    postsShow(datetimeLocale: $datetimeLocale) {
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

export const POSTS_SCHEDULE_QUERY = gql`
  query PostsSchedule($datetimeLocale: String) {
    postsSchedule(datetimeLocale: $datetimeLocale) {
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
