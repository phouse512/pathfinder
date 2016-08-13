import React from 'react';
import TextTruncate from 'react-text-truncate';

var Node = React.createClass({
  render: function() {
    return (
      <div className="col-lg-3 col-md-3">
        <div className="card"> 
          <div className="card-block"> 
            <h4 className="card-title">   
              {this.props.title}
            </h4>
            <p className="card-text">
              <TextTruncate
                line={4}
                truncateText="..."
                text={this.props.desc}
                textTruncateChild={<a href="#">Learn</a>}
                />
            </p>
          </div>
        </div> 
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
      <div className="row">
        {nodes}
      </div>
    );
  }

});

export default NodeContainer;
