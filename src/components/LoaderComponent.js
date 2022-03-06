import React from 'react';
import {View, Image} from 'react-native';
import flip from '../assets/flip.png';

export default LoaderComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }}>
      <Image source={flip} style={{width: 50, height: 50}} />
    </View>
  );
};
