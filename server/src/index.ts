import { Role_Users } from './Entities/Roles';
import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors"; 
import { createConnection } from  "typeorm";
import { schema } from "./Schema";



// const main = async ()=>{
//     await createConnection({
//     type: "postgres", 
//     port:5432,
//     host: "192.168.100.241",
//     database:"bd_p04_dev", 
//     username:"sa_p04", 
//     password: "9pL7K3vLd", 
//     logging: true, 
//     synchronize: true, 
//     entities: [Role_Users],
// }); 

const main = async ()=>{
    await createConnection({
    type: "postgres", 
    port:5432,
    host: "localhost",
    database:"graphqlcrud", 
    username:"postgres", 
    password: "bd", 
    logging: true, 
    synchronize: true, 
    entities: [Role_Users],
}); 






const app = express()
app.use(cors())
app.use(express.json())
app.use("/graphql", graphqlHTTP({
    schema,  
    graphiql: true
}));


app.listen(3001,() => {
   console.log(" SERVER RUNNING ON PORT 3001"); 
});


}; 
main().catch((err) => {
    console.log(err);
    
}); 