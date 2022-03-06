import React, {Component} from 'react';
import {connect} from 'react-redux';
import ToastEasyNotification from './src/containers/ToastEasyNotification';
import Navigator from './src/navigator';
import {NavigationContainer} from '@react-navigation/native';

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <Navigator />
        <ToastEasyNotification toastData={this.props.ToastMessage} />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    ToastMessage: state.ToastMessage,
  };
};

export default connect(mapStateToProps)(Main);
