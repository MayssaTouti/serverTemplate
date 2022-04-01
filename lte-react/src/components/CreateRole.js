import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_ROLE } from '../Graphql/Mutation';
 function CreateRole() {
    const [role_name, setRoleName] = useState("");
    const [role_description, setRoleDescription] = useState("");

    const [createRole, { error }] = useMutation(CREATE_ROLE);
    
    
    
    return (React.createElement("div", null,
        React.createElement("div", { className: "content-wrapper" },
            React.createElement("section", { className: "content-header" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "row mb-2" },
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("h1", null, "Add New Role  ")),
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("ol", { className: "breadcrumb float-sm-right" },
                                React.createElement("li", { className: "breadcrumb-item" },
                                    React.createElement("a", { href: "#" }, "Home")),
                                React.createElement("li", { className: "breadcrumb-item active" }, "New Role ")))))),
            React.createElement("section", { className: "content" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("div", { className: "card card-primary" },
                                React.createElement("div", { className: "card-header" },
                                    React.createElement("h3", { className: "card-title" },
                                        " ",
                                        React.createElement("small", null))),
                                React.createElement("form", { id: "quickForm" },
                                    React.createElement("div", { className: 'createRole' },
                                        React.createElement("div", { className: "card-body" },
                                            React.createElement("div", { className: "form-group" },
                                                React.createElement("label", null, "Role Name "),
                                                //input Role Name 
                                                React.createElement("input", { type: "text", id: "roleName", className: "form-control", placeholder: "Enter role name" ,  onChange: (event) => { setRoleName(event.target.value); } })),
                                            React.createElement("div", { className: "form-group" },
                                                React.createElement("label", null, "Role description "),
                                                React.createElement("input", { type: "text", id: "roleDescription", className: "form-control", placeholder: "role description" ,onChange: (event) => { setRoleDescription(event.target.value); }})),
                                            React.createElement("div", { className: "form-group mb-0" },
                                                React.createElement("div", { className: "custom-control custom-checkbox" },
                                                    React.createElement("input", { type: "checkbox", name: "terms", className: "custom-control-input", id: "exampleCheck1" }),
                                                    React.createElement("label", { className: "custom-control-label", htmlFor: "exampleCheck1" },
                                                        "I agree to the ",
                                                        React.createElement("a", { href: "#" }, "terms of service"),
                                                        ".")))),
                                        React.createElement("div", { className: "card-footer" },
                React.createElement("button", { type: "submit", className: "btn btn-danger" }, " cancel "),
          React.createElement("button", { type: "submit", className: "btn btn-success" , onClick: ()=> { createRole({ variables: {role_name: role_name , role_description: role_description}})}}, "Add Role " )))))),
                        React.createElement("div", { className: "col-md-6" })))))));
}
export default CreateRole ;
//    React.createElement("input", { type: "submit", value: "Create role", onClick: () => {
//     createRole({ variables: { role_name: role_name, role_description: role_description },
//     });