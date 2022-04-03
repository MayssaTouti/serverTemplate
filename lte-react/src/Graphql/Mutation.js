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

export const DELETE_ROLE = gql `  
   mutation deleteRoel($id_Role: ID!){
    deleteRoel(id_Role: $id_Role)
    {
     successful
     message
    }
}

`;
//updatRole : UPDATE_ROLE,
export const UPDATE_ROLE = gql `  
   mutation updatRole(
       $id_Role : ID!, 
       $role_name: String! ,
         $role_description: String!
         ){
            updatRole(
        id_Role: $id_Role, 
        role_name: $role_name ,
        role_description: $role_description
        )
    {
     message
    }
}

`;



// deleteRoel  //deleteRoel : DELETE_ROLE,