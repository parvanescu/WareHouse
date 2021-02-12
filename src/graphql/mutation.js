import {gql} from "@apollo/client"

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const ADD_ITEM= gql`
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
const DELETE_ITEM= gql`
  mutation DeleteItem($id: String!,$token: String!){
    deleteItem(
      id: $id
      token: $token
    ){
       token
     }
  }
`

const UPDATE_ITEM= gql`
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

const DELETE_USER= gql`
  mutation DeleteUser($id:String!,$email:String!,$token:String!){
    deleteUser(
    id:$id
    email:$email
    token:$token
    )
    }
`

const UPDATE_USER= gql`
  mutation UpdateUser($id:String!,$last_name:String!,$first_name:String!,$email:String!,$password:String!,$token:String!){
    updateUser(
    id:$id
    last_name:$last_name
    first_name:$first_name
    email:$email
    password:$password
    token:$token
    ){
     id
     first_name
     last_name
     email
     status
     token
     }
  }
`

const REGISTER_USER= gql`
  mutation Register($last_name:String!,$first_name:String!,$email:String!,$password:String!){
    register(
    last_name:$last_name
    first_name:$first_name
    email:$email
    password:$password
    ){
      id
      token
     }
  }
`

export {LOGIN,REGISTER_USER,ADD_ITEM,UPDATE_ITEM,DELETE_ITEM,DELETE_USER,UPDATE_USER}