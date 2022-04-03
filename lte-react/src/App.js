//import logo from './logo.svg';
//import './App.css';
//import les commponents 
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
//import AddNewRoles from "./views/Roles/AddNewRoles";
import CreateRole from "./components/CreateRole";
// import { Navbar} from '../src/components/Navbar'; 
import React from "react";
//import Navbar from "./components/Navbar/Navbar";
import ListeOfRoles from "./components/ListeOfRoles";
import UpdateRols from "./components/UpdateRols";
import Login  from './components/Login'; 
//import Home from "./components/Home";
//import ListeOfUsers from "./views/Roles/ListeOfUsers";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Home  from './components/Home'; 
const  App= () => {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  

  let routes =useRoutes ([
    { path : '/allOfRoles', element:  <ApolloProvider client={client}><ListeOfRoles /> </ApolloProvider>  },
    { path : '/addRole', element:  <ApolloProvider client={client}><CreateRole /> </ApolloProvider>  },
    { path : '/home', element: <Home /> },
    { path : '/Login', element: <Login /> },
  

  ]); 
  return routes;
  
  

/* 
  return (
<div>
  <Header/>
<Routes>
<Route path='/allOfRoles' element={<ListeOfRoles/>} />
<Route path='/home' exact element={<Home/>} />
<Route path='/addNewRole' element={<CreateRole/>} />
<Route path='/updateRole' element={<UpdateRols/>} />
<Route path='/footer' element={<Footer/>} />
</Routes>
<SideNav />
 <Footer /> 
</div>   

 */
 
 
}; 
const AppWrapper = () => {
  return (
    <Router>
      <Header />
      <App />
    

      
      <SideNav />
      <Footer/>
     
    </Router>
  );
};

export default AppWrapper;
