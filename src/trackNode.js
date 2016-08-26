import React from 'react';
import trackNode_json from '../data/trackNodes.json';

var TrackNode = React.createClass({
  render: function() {

    var node_json = trackNode_json[this.props.params.nodeId];
    console.log(node_json);
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h1>ya buddy</h1>          
        </div>
      </div>
    );
  }
});

export default TrackNode;
