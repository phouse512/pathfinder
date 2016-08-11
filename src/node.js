import React from 'react';
import nodes from '../data/nodes.json';

var Node = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}); 

var NodeContainer = React.createClass({
  render: function() {
    var nodes = this.props.data.map(function(node) {
      return (
        <Node key={node.id} title={node.title} desc={node.description} />
      );
    });
    return (
      <div>
        {nodes}
      </div>
    );
  }

});

export default NodeContainer;
