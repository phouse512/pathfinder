import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import Comment from './Comment/comment';
import NodeContainer from './node';
import Navbar from './nav';
import TrackListContainer from './trackList';
import TrackContainer from './track';
import TrackNode from './trackNode';
import nodes_json from '../data/nodes.json';
import tracks_json from '../data/tracks.json';
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
        <TrackListContainer data={tracks_json} />
          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title" id="exampleModalLabel">How This Works</h4>
                </div>
                <div className="modal-body">
                  <p className="lead">The following lessons contain links to online resources that may be blog posts, tutorials, etc. that will guide you through that lesson's scope of material. By the end of finishing each one, you should have accomplished what the goal is listed for each lesson. <hr />If anything is unclear, or you weren't able to learn the material from the included lesson, let me know via email at <i>help at pathfinding.space</i>. I can tutor and help make up for the areas that were lacking.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      </div> 
    );
  }
});

var NodesPage = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar current='Nodes'/>
        <TrackNode nodeId={this.props.params.nodeId} />
      </div>
    );
  }
});

var TracksPage = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar current='Tracks'/>
        <TrackContainer track={tracks_json[this.props.params.trackId]} />
      </div>    
    );
  }
});

export const About = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar current='About'/>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="lead">
              Pathfinder was built because while there are dozens of programming blog posts and tutorials out there, many of them are focused on specific concepts. While this works for those who <i>know what to search for</i>, if you're a beginner and don't know exactly what to look for, it can be hard to get started. Pathfinder seeks to be the bridge in between great learning resources and beginners who don't know where to get started.
            </p>
            <hr />
            <p>
              This project was built and is managed by <a href="http://phizzle.space">Philip House</a>. It is currently a WIP and new tracks are in the process of being added. <br />              
              Please email him at <i>help@pathfinding.space</i> if you have any questions, need help, or would like to contribute!
            </p>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/tracks" component={TrackListContainer} />
    <Router path="/tracks/:trackId" component={TracksPage} />
    <Router path="/nodes/:nodeId" component={NodesPage} />
  </Router>
), document.getElementById('content'));

