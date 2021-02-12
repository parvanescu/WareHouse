import {gql} from "@apollo/client";

const GET_ITEM_BY_ID = gql`
  query GetItemById($id: String!, $token: String!) {
    getItemById(id: $id, token: $token) {
      id
      title
      description
      userId
      token
    }
  }
`

const GET_ALL_ITEMS = gql`
  query GetAllItems($token: String!){
    getAllItems(token: $token){
        id
        title
        description
        userId
        token
    }
  }
`

const GET_USER_BY_ID = gql`
  query GetUserById($id: String!, $token: String!){
    getUserById(id: $id, token: $token){
      id
      first_name
      last_name
      email
      status
      items{
        id
        title
        description
      }
      token
    }
  }
`

const GET_ALL_USERS = gql`
query GetAllUsers($token: String!){
    getAllUsers(token: $token){
        id
        title
        description
        userId
        token
    }
  }
`

export {GET_ITEM_BY_ID,GET_ALL_ITEMS,GET_USER_BY_ID,GET_ALL_USERS}
