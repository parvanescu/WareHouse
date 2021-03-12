import {gql} from "@apollo/client"

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const ADD_ITEM = gql`
  mutation AddItem($title: String!,$description: String!,$token: String!){
    addItem(
      title: $title
      description: $description
      token: $token
    ){
      id
      title
      description
      token
     }
}
`
const DELETE_ITEM = gql`
  mutation DeleteItem($id: BSON,$token: String!){
    deleteItem(
      id: $id
      token: $token
    )
  }
`

const UPDATE_ITEM = gql`
  mutation UpdateItem($id: String!,$title: String!,$description: String!,$token: String!){
    updateItem(
    id:$id
    title:$title
    description:$description
    token:$token
    ){
      id
      title
      description
      token
     }
  }
`

const DELETE_USER = gql`
  mutation DeleteUser($id:String!,$email:String!,$token:String!){
    deleteUser(
    id:$id
    email:$email
    token:$token
    )
    }
`

const UPDATE_USER = gql`
  mutation UpdateUser($last_name:String!,$first_name:String!,$email:String!,$password:String!,$token:String!){
    updateUser(
    last_name:$last_name
    first_name:$first_name
    email:$email
    password:$password
    token:$token
    ){
     first_name
     last_name
     email
     password
     status
     token
     }
  }
`

const REGISTER_USER = gql`
  mutation Register($last_name:String!,$first_name:String!,$email:String!,$organisation_name:String!,$CUI:String!){
    register(
    last_name:$last_name
    first_name:$first_name
    email:$email
    organisation_name:$organisation_name
    CUI:$CUI
    ){
      id
      organisation_id
      token
     }
  }
`

const SEARCH_ITEM = gql`
  mutation SearchItem($criteria:String!,$token:String!){
  searchItem(
  criteria:$criteria
  token:$token
  ){
  id
  title
  description
  token
  }
  }
`

const CHECK_TOKEN = gql`
    mutation CheckToken($token:String!){
    checkToken(
    token:$token
    )
    }
`

const SET_PASSWORD = gql`
    mutation SetPassword($user_id:String!,$organisation_id:String!,$password:String!){
    setPassword(
    user_id:$user_id
    organisation_id:$organisation_id
    password:$password
    ){
    id
    }
    }
`

export {LOGIN, REGISTER_USER, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, DELETE_USER, UPDATE_USER,SEARCH_ITEM,CHECK_TOKEN,SET_PASSWORD}