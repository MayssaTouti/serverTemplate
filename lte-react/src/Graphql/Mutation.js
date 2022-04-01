//import { CREATE_ROLE } from './../../../server/src/Schema/Mutations/Role';
import { gql } from "@apollo/client";
export const CREATE_ROLE = gql `  

mutation createRole($role_name: String!,$role_description: String!){
createRole(role_name: $role_name ,role_description: $role_description)
    {
        id_Role 
        role_name
        role_description
    }
}

`;