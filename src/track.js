import React from 'react';

var Track = React.createClass({
  render: function() {
    return (
      <div>{ this.params.trackId }</div>
    );
  }
});
