import React from 'react';



const allRoles=React.lazy(() => import('./views/Roles/ListeOfUsers')); 


const routes=[

{ path :"/roles", name :"roles", exact:true },


]; 

export default routes; 