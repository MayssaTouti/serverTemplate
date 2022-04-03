import React from "react";
//import ReactDom  from "react-dom"; 
import ReactDOM  from "react-dom";
import { BrowserRouter} from 'react-router-dom'; 
import App from "../../App";

//browserRouter il sunchronise le url + component 

ReactDOM.render(

  <BrowserRouter>
  
  <App />
  </BrowserRouter>, 
  document.getElementById("root")

); 



/* const allRoles = (props) => {
  return (
    <div>
      allRoles
    </div>
  )
}; 

export default allRoles;  */
