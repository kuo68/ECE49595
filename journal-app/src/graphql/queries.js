/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const books = /* GraphQL */ `
  query Books {
    books {
      title
      author {
        name
        books {
          title
        }
      }
    }
  }
`;
export const authors = /* GraphQL */ `
  query Authors {
    authors {
      name
      books {
        title
        author {
          name
        }
      }
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getJournals = /* GraphQL */ `
  query GetJournal($id: ID!) {
    getJournal(id: $id) {
      userID
      rating
      date
      journal
    }
  }
`;
export const listJournals = /* GraphQL */ `
  query ListJournals(
    $filter: ModelJournalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJournals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userID
        rating
        date
        journal
      }
      nextToken
    }
  }
`;
