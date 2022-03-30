import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";


//definition de classe role 
export const MessageType = new GraphQLObjectType ({
    name: "Role_User", 
    fields: () => ({
      
        // id_Role: {type: GraphQLID}, 
        // role_name: {type: GraphQLString}, 
        // role_description: {type: GraphQLString}, 
       
        successful: { type: GraphQLBoolean }, 
        message: {type: GraphQLString},
    }),

}); 