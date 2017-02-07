import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import preloader32 from 'src/assets/img/loaders/preloader_32x32.gif';
import preloader64 from 'src/assets/img/loaders/preloader_64x64.gif';
import preloader128 from 'src/assets/img/loaders/preloader_128x128.gif';

const Preloader = ({ size }) => {
  switch (size) {
  case 32:
    return (<Image source={preloader32} />);
  case 64:
    return (<Image source={preloader64} />);
  case 128:
    return (<Image source={preloader128} />);
  default:
    return (<Image source={preloader32} />);
  }
};

Preloader.defaultProps = {
  size: 64,
};

Preloader.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Preloader;
