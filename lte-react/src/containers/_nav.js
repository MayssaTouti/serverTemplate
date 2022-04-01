import React, { Children } from "react";


const _nav = [
    {
        _tag: 'CSideborNavDropdown',
        name: "Roles",
        route: '/listeOfRoles',
        _children: [
            {
                _tag: 'CSideborNavItem',
                name: "All Roles",
                to: "/listeOfRoles/allRoles",
            },
            {
                _tag: 'CSideborNavItem',
                name: "Add New Roles",
                to: "/listeOfRoles/all-Roles",
            },
        ]

    }

];

export default _nav 