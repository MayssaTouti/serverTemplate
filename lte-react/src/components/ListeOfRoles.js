

import React from 'react'
import { GET_ALL_ROLE } from '../Graphql/Queries'; 
import { useQuery, useMutation } from '@apollo/client';
import { Button } from './Button.css';
import { DELETE_ROLE } from '../Graphql/Mutation'; 

//import fontawesome from '@fortawesome/fontawesome'

//import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

function ListeOfRoles() {
    const { data } = useQuery(GET_ALL_ROLE);
    const [deleteRoel, {error}] = useMutation(DELETE_ROLE); 
    // if (data) {
    //     console.log(data);
    // }
    // const executeDelete = (id_Role) => {
    //     deleteRoel(id_Role)
    // }; 

//deleteRoel : DELETE_ROLE,
  return (
    <div>
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Validation</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Validation</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>

  <div class="content-wrapper">
  <section className="content">
  <div className="container-fluid">
    {/* /.row */}
    <div className="row">
      <div className="col-14">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"> Tables of Roles </h3>
            <div className="card-tools">
              <div className="input-group input-group-sm" style={{width: 50}}>
                <input type="text" name="table_search" className="form-control float-left" placeholder="Search" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body table-responsive p-0">
          
      
        <table className="table table-hover text-nowrap" style={{width:10}}>
        <thead>
          <tr>
            <th>ID Role </th>
            <th>Role Name</th>
            <th>Role Description </th>
            <th>  Action </th>
      
          </tr>
        </thead>
        <tbody>
        {data && data.getAllRoles.map((role) => {
             

             return (
              // key={person.id} value={person.id}
          <tr>
            <td key={role.id_Role}> {role.id_Role}</td>
            <td>{ role.role_name}</td>
            <td>{ role.role_description}</td>
            <td>
  <button className="button1">update</button>
  <button className="button button2">consulter</button>
  <button className="button button3" onClick ={() => { deleteRoel({variables: {id_Role :role.id_Role}}) ;    }}>delete</button> 
  

  </td>
        
          </tr>
          );

})}

        </tbody>
      </table>
     
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>

  </div>
</section>
</div>

    </div>
  ); 
}

export default ListeOfRoles; 
