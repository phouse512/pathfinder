import React from 'react';

var Track = React.createClass({
  render: function() {
    return (
      <div>{ this.params.trackId }</div>
    );
  }
});

var TrackListItem = React.createClass({
  render: function() {
    return (
      <div className = "col-lg-3 col-md-3">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">
              {this.props.title}              
            </h4>
            <p className="card-text">
              {this.props.description}
            </p>
          </div>
        </div>
      </div>

    );
  }
});

var TrackListContainer = React.createClass({
  render: function() {
    var tracks = Object.keys(this.props.data).map(function(track) {
      return (
        <TrackListItem />
      );
    });
    return (
      <div className="row">
        {tracks}
      </div>
    );
  }
});

export default TrackListContainer;
