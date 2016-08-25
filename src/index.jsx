import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import Comment from './Comment/comment';
import NodeContainer from './node';
import Navbar from './nav';
import Track from './track';
import nodes_json from '../data/nodes.json';
import { Router, Route, Link, hashHistory } from 'react-router';

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

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar current='Home'/>
        <NodeContainer data={nodes_json} />
      </div> 
    );
  }
});

var TracksPage = React.createClass({
  render: function() {
    return (
      <Navbar current='Tracks'/>  
    );
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="tracks" component={TracksPage} />
    </Route>
  </Router>
), document.getElementById('content'));

