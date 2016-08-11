import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import Comment from './Comment/comment';
import NodeContainer from './node';
import nodes_json from '../data/nodes.json';
console.log(NodeContainer);
import { Router, Route, Link, browserHistory } from 'react-router';

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Philip House">This is a comment</Comment>
        <Comment author="John Doe">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am commentForm
      </div>
    )
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>COmments</h1>
        <CommentList /> 
        <CommentForm />
      </div>
    );
  }
});


var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <div className="collapse navbar-toggleable-xs">
          <a className="navbar-brand" href="#">PathFinder</a>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <NodeContainer data={nodes_json} />
      </div> 
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
  </Router>
), document.getElementById('content'));

console.log(nodes_json);
