import { BallTriangle } from 'react-loader-spinner';
import { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    );
  }
}

export default Loader;
