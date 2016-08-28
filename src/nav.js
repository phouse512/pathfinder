import React from 'react';

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
        <a className="nav-link" href="#">{this.props.name}</a>
     </li>
    );
  }
});

var Navbar = React.createClass({
  render: function() {
    var home, about;
    if (this.props.current == 'Home') {
      home = <NavItem name='Home' current='true' />;
      about = <NavItem name='About' current='false' />;
    } else if (this.props.current == 'About') {
      home = <NavItem name='Home' current='false' />;
      about = <NavItem name='About' current='true' />;
    } else {
      home = <NavItem name='Home' current='false' />;
      about = <NavItem name='About' current='false' />;
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
