import React from 'react';
import { Link } from 'react-router';
import MailSignupForm from './mailSignup';

var Stage = React.createClass({
  render: function() {
    var nodes = this.props.nodes.map(function(node) {
      return (
        <Node title={node.title} description={node.description} key={node.id} id={node.id} />
      );
    });
    return (
      <div>
        <h3 className="card-title">{this.props.title}</h3>
        <ul className="list-group">
          {nodes}
        </ul>
        <br />
      </div>
    );
  }
});

var Node = React.createClass({
  render: function() {
    return (
        <a href={'#/nodes/' + this.props.id} className="list-group-item list-group-item-action">
          <b>{this.props.title}:</b> {this.props.description} 
        </a>
    );
  }
});

var Track = React.createClass({
  render: function() {
    var construction = this.props.track.construction;

    if (construction == false) {
      var stages = this.props.track.stages.map(function(stage) {
        return (
          <Stage title={stage.title} nodes={stage.nodes} />
        );
      });
    } else {
      var stages = (<MailSignupForm />);
    }
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card card-block">
          <h3 className="card-title">{this.props.track.title}</h3>
          <p className="card-text">{this.props.track.description}</p>
            {stages}
       </div>
      </div>
    );
  }
});

var TrackContainer = React.createClass({
  render: function() {
    return (
      <div className="row">
        <Track track={this.props.track} />
      </div>
    );
  }
});

export default TrackContainer;
