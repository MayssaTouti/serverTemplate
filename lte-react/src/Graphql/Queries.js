//import { CREATE_ROLE } from './../../../server/src/Schema/Mutations/Role';
import { gql } from "@apollo/client";
export const GET_ALL_ROLE = gql `  

query getAllRoles{ 

    getAllRoles{
        id_Role
        role_name
        role_description
    }

}

`;

// getAllRoles: GET_ALL_ROLE,