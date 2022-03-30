import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";


//definition de classe role 
export const RoleType = new GraphQLObjectType ({
    name: "Role_User", 
    fields: () => ({
      
        id_Role: {type: GraphQLID}, 
        role_name: {type: GraphQLString}, 
        role_description: {type: GraphQLString}, 

    }),

}); 