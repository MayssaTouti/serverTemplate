//import { Role_Users } from './../../Entities/Roles';
import { RoleType } from './../TypeDefs/Roles';
import { GraphQLString , GraphQLID, GraphQLNonNull } from 'graphql';
//import { resolve } from 'path';
import { MessageType } from '../TypeDefs/Messages';
import { Role_Users } from '../../Entities/Roles';
import { rejects } from 'assert';


export const CREATE_ROLE = {
    type: RoleType, 
    args: {
       // id_Role : {type: GraphQLID}, 
        role_name: { type: GraphQLString } , 
        role_description: { type: GraphQLString }, 
    }, 
async resolve(parent: any , args: any ){
        const {role_name, role_description} =args;
    await Role_Users.insert(
        {role_name, role_description}
        ); 
        return args; 
    },
}; 
export const DELETE_ROLE = {
    type: RoleType, 
    args: {
        id_Role : {type: GraphQLID}, 
        // role_name: { type: GraphQLString } , 
        // role_description: { type: GraphQLString }, 

    }, 
    async resolve(parent: any , args: any ){
   const id_Role=args.id_Role ; 
    await Role_Users.delete(id_Role); 
    
     return { successful: true, message:" role deleted avec success"}; 
    }, 
}; 

export const UPDATE_ROLE ={
    type: RoleType, 
    args: {
        id_Role : {type: new GraphQLNonNull(GraphQLID)}, 
        role_name: { type:new GraphQLNonNull(GraphQLString)} , 
         role_description: { type:new GraphQLNonNull(GraphQLString)}
    }, 
async resolve(parentValue : any  , args: any ){
    const {id_Role , role_name, role_description} = args;
// return new Promise((resolve, rejects) => {
//    Role_Users.update
//     ( {id_Role: args.id_Role}, 
//         { "$set":{role_name:args.role_name , role_description:args.role_description }}, 
//         {"new":true} //return new role 

//     ).exec((err,res)=> {
//         if(err) rejects(err)
//         else resolve(); 
//     }); 

const search = await Role_Users.findOneBy({id_Role});

if(search) {
    await Role_Users.update({id_Role  }, {role_name, role_description});
    return { successful: true , message: "Role Updated "}; 
    

}

// })
}}; 
