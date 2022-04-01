//import logo from './logo.svg';
//import './App.css';
//import les commponents 
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
//import AddNewRoles from "./views/Roles/AddNewRoles";
import CreateRole from "./components/CreateRole";
import React from "react";
//import Home from "./components/Home";
//import ListeOfUsers from "./views/Roles/ListeOfUsers";


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <>
   <Header />
            <SideNav />
    <ApolloProvider client={client}>
      <CreateRole />
    </ApolloProvider>
    
     <Footer />


    

    </>
  );
}

export default App;
