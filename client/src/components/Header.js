import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Covid-19</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">Taiwan</a></li>
            </ul>
          </div>  
        </nav>  
      </div>  
    );
  }
}

export default Header;