import React,{Component} from "react";
import { Button } from "../Button";
import { MenuItems } from './MenuItem'; 
import './Navbar.css'; 
import  '../Button.css'; 
import './Navbar.css'; 
class Navbar extends Component {

state = { clicked: false}
handleClick = ()=> {
    this.setState({ clicked: !this.state.clicked})
}
render() {

    return(

<nav className="NavbarItems">
  {/* Left navbar links */}
  <div className="menu-icon" onClick={this.handleClick} >

<i className={this.state.clicked ? 'bi bi-list' : 'fas fa-bars'}>


</i>
  </div>
  <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
      {MenuItems.map((item,index) => {
          return (
            <li  key={index}  className="nav-item">
            <a  className={item.cName } href={item.url}> 
            { item.title}
            
            </a>
          </li>
          )
      })}
  

  
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Navbar Search */}
    <li className="nav-item">
      <a className="nav-link" data-widget="navbar-search" href="#" role="button">
        <i className="fas fa-search" />
      </a>
      <div className="navbar-search-block">
        <form className="form-inline">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
              <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    {/* Messages Dropdown Menu */}

    {/* Notifications Dropdown Menu */}

  
  </ul>
  <Button> Sign Up</Button>
</nav>

    )
}


}
export default Navbar 