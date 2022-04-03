import { useMutation } from '@apollo/client';
import React , {useState} from 'react'
import {UPDATE_ROLE } from "../Graphql/Mutation";

function UpdateRols() {
    
    //const [id_Role, setRoleName] = useState("");
    const [id_Role, setIdRole] =useState(""); 
    const [role_name, setRoleName] = useState("");
    const [role_description, setRoleDescription] = useState("");
    //const [createRole, { error }] = useMutation(CREATE_ROLE);
    const [updatRole, { error }] = useMutation(UPDATE_ROLE);
    if (error)
    {
        return <h1> {error}</h1>
    }
  return (
    <div>
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Update Role </h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Update Role </li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-12">
          {/* jquery validation */}
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Quick Example <small>jQuery Validation</small></h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form id="quickForm">
              <div className="card-body">
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Id Role  </label>
                  <input type="text"  
                   className="form-control"
                   id="idRole"
                   onChange={(event) => {
                    setIdRole(event.target.value); 
                   }}
                   placeholder="Role Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Role Name </label>
                  <input type="text"  
                   className="form-control"
                   id= "roleName"
                   onChange={(event) => {
                    setRoleName(event.target.value); 
                   }}
                   placeholder="Role Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Role description </label>
                  <input type="text"
                    className="form-control" 
                      id="roleDescription" 
                      onChange={(event) => {
                        setRoleDescription(event.target.value); 
                       }}
                      placeholder="Role Description" />
                </div>
                <div className="form-group mb-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="terms" className="custom-control-input" id="exampleCheck1" />
                    <label className="custom-control-label" htmlFor="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" 
                onClick={() => {updatRole({variables: {role_name: role_name , role_description: role_description}, 
                        }); 
                }}>Update  Role </button>
              </div>
            </form>
          </div>
          {/* /.card */}
        </div>
        {/*/.col (left) */}
        {/* right column */}
        <div className="col-md-6">
        </div>
        {/*/.col (right) */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

    </div>
  )
}

export default UpdateRols
