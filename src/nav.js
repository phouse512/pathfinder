import React from 'react';
import { Link } from 'react-router';

var NavCurrentPage = React.createClass({
  render: function() {
    return (
      <span className="sr-only">(current)</span>
    );
  }
});

var NavItem = React.createClass({
  render: function() {
    var active = "nav-item";
    if (this.props.current == 'true') {
      active += " active";
    }

    return (
      <li className={active}>
        <Link to={this.props.url} className='nav-link'>{this.props.name}</Link>
     </li>
    );
  }
});

var Navbar = React.createClass({
  render: function() {
    var home, about;
    if (this.props.current == 'Home') {
      home = <NavItem name='Home' current='true' url='/#' />;
      about = <NavItem name='About' current='false' url='/about' />;
    } else if (this.props.current == 'About') {
      home = <NavItem name='Home' current='false' url='/#' />;
      about = <NavItem name='About' current='true' url='/about' />;
    } else {
      home = <NavItem name='Home' current='false' url='/#' />;
      about = <NavItem name='About' current='false' url='/about' />;
    }

    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="collapse navbar-toggleable-xs">
          <a className="navbar-brand" href="#">PathFinder</a>
          <ul className="nav navbar-nav">
            {home}
            {about}
          </ul>
        </div>
      </nav>
    );
  }
});

export default Navbar;
