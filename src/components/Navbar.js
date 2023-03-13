import "./Navbar.css"
import { Component } from "react"
import { Link } from "react-router-dom";
import LOGO from "../assets/logo3.png"
import { MenuItems } from "./MenuItems";

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

class Navbar extends Component {
    render(){
    return(
        <nav className="NavbarItems">
            <div className="logo">
              <div className="nav-text">
              <h1 className="navbar-logo">INSTITUT</h1>
                <h3 className="navbar-logo2">TEKNOLOGI BANDUNG</h3>
              </div>
              <div className="nav-img">
                <img src={LOGO} className="ITB" />
              </div>
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return(
                     <li key={index}>
                        <Link className={item.cName} to={item.url}>
                          <i class={item.icon}></i>{item.title}
                        </Link>
                    </li>
                    )
                })}
                <div class="dropdown">
                <button onclick="myFunction()" class="dropbtn"><i class="fa-solid fa-camera"></i>Social Media</button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="https://www.instagram.com/itb1920/"><i class="fa-brands fa-instagram"></i>INSTAGRAM</a>
                    <a href="https://twitter.com/itbofficial"><i class="fa-brands fa-twitter"></i>TWITTER</a>
                    <a href="https://www.facebook.com/search/top?q=institut%20teknologi%20bandung"><i class="fa-brands fa-facebook"></i>FACEBOOK</a>
                </div>
                </div>
            </ul>
        </nav>
    )
    }
}

export default Navbar;