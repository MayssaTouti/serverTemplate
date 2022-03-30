import { CREATE_ROLE, DELETE_ROLE, UPDATE_ROLE } from './Mutations/Role';
//import { GET_ALL_ROLES } from './Queries/Role';
import { GraphQLSchema ,  GraphQLObjectType  } from 'graphql';
import { GET_ALL_ROLE } from './Queries/Role';

const RootQuery = new GraphQLObjectType ({
    name: "RootQuery", 
    fields: {
        getAllRoles: GET_ALL_ROLE,
       

    },
});

const Mutation = new GraphQLObjectType ({ 
    name: "Mutation", 
    fields: {
        createRole : CREATE_ROLE , 
        deleteRoel : DELETE_ROLE, 
        updatRole : UPDATE_ROLE,
    },
});



// le shema de graphql
export const schema = new GraphQLSchema ({ 
query: RootQuery, 
mutation: Mutation,


});