import { RoleType } from './../TypeDefs/Roles';
import { GraphQLList } from "graphql";
import { Role_Users } from '../../Entities/Roles';


export const GET_ALL_ROLE = {
    type:new GraphQLList(RoleType), 
    resolve() {
    return  Role_Users.find(); 
    
    } ,

}; 