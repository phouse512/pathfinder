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
                  <p className="lead">The following lessons contain links to online resources that may be blog posts, tutorials, etc. that will guide you through that lesson's scope of material. By the end of finishing each one, you should have accomplished what the goal is listed for each lesson. If anything is unclear, or you weren't able to learn the material from the included lesson, let me know via email at <i>help at pathfinding.space</i>. I can tutor and help make up for the areas that were lacking.</p>
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

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} /> 
    <Route path="/tracks" component={TrackListContainer} />
    <Router path="/tracks/:trackId" component={TracksPage} />
    <Router path="/nodes/:nodeId" component={NodesPage} />
  </Router>
), document.getElementById('content'));

