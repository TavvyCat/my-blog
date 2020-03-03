import React, { Component } from 'react';
import Aux from '../../HOC/AuxComp/Aux';

class Gallery extends Component {
  render() {
    const photos = [];

    return (
      <Aux>
        {photos}
      </Aux>
    )
  }
}

export default Gallery;