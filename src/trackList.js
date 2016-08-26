import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';

var TrackListItem = React.createClass({
  render: function() {
    return (
      <div className = "col-lg-3 col-md-3">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">
              {this.props.data.title}              
            </h4>
            <p className="card-text">
              <TextTruncate
                line={4}
                truncateText="..."
                text={this.props.data.description}
                textTruncateChild={<Link to={`/tracks/${this.props.id}`}>Learn</Link>}
                />
            </p>
          </div>
        </div>
      </div>
    );
  }
});

var TrackListContainer = React.createClass({
  render: function() {
    var temp = this.props.data;
    var tracks = Object.keys(this.props.data).map(function(track) {
      return (
        <TrackListItem key={track} id={track} data={temp[track]} />
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
