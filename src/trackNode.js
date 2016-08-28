import React from 'react';
import trackNode_json from '../data/trackNodes.json';

var NoNode = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h3>Sorry, this node is not yet completed.. come back soon!</h3>
        </div>
      </div>
    );
  }
});

var TrackNode = React.createClass({
  render: function() {
    var node_json = trackNode_json[this.props.nodeId];

    if (typeof node_json === "undefined") {
      return <NoNode />
    }
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="card card-block">
            <h3 className="card-title">{node_json.title}</h3>
            <p className="list-group-item-text">{node_json.description}</p>
            <hr />
            <div className="list-group">
              <a target="_blank" href={node_json.resources[0].link} className="list-group-item list-group-item-action">
                <p className="list-group-item-text">{node_json.resources[0].description}</p>
              </a>
            </div>
            <hr />
            <p className="card-text"><b>goal: </b>{node_json.goal}</p>

            <p className="card-text"><small><i>note: </i>if you get confused or stuck here at all, email me at phouse512 AT gmail dot com, and we can set up a 1-on-1 tutoring session to figure out what you're stuck on!</small></p>
          </div>
        </div>
      </div>
    );
  }
});

export default TrackNode;
