import React, { Component } from 'react';
import Aux from '../../Components/HOC/AuxComp';

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