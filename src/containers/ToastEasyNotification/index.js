import {Text, View} from 'native-base';
import React, {Component} from 'react';
import Toast from 'react-native-easy-toast';
import {store} from '../../configurations/Configs_middleware';

export const showToastMessage = (status, message, duration = 2500) => {
  store.dispatch({
    type: 'TOAST_MESSAGE',
    payload: {
      status,
      message,
      duration,
    },
  });
};

const iconList = {
  success: 'information',
  error: 'attention',
  info: '',
};

const backgroundList = {
  success: '#8FC742',
  error: '#EE2B2E',
  info: '#434755',
};

class ToastEasyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#434755',
    };
  }

  componentDidUpdate(prevProps) {
    const prevTimestamp = prevProps.toastData.timestamp;
    const currentTimestamp = this.props.toastData.timestamp;
    if (prevTimestamp !== currentTimestamp) {
      const toastStatus = this.props.toastData.status;
      const toastMessage = this.props.toastData.message;
      const toastDuration = this.props.toastData.duration;
      //   const icon = iconList[toastStatus];
      const backgroundColor = backgroundList[toastStatus]
        ? backgroundList[toastStatus]
        : '#434755';

      const content =
        toastStatus === 'success' || toastStatus === 'error' ? (
          <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
            {/* <Icon name={icon} color='#fff' size={16} style={{ right: 10 }} /> */}
            <Text style={{color: '#fff', paddingRight: 20}}>
              {toastMessage}
            </Text>
          </View>
        ) : (
          <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
            <Text style={{color: '#fff'}}>{toastMessage}</Text>
          </View>
        );

      this.setState(
        {
          backgroundColor,
        },
        () => {
          this.refs.toast.show(content, toastDuration, () => {
            // clear toast message
          });
        },
      );
    }
  }

  render() {
    const toastStatus = this.props.toastData.status;
    const backgroundColor = this.state.backgroundColor;

    let position = 'bottom';
    let positionValue = 120;
    let customStyle = {
      backgroundColor,
      width: '90%',
      borderRadius: 5,
    };

    if (toastStatus === 'success' || toastStatus === 'error') {
      position = 'top';
      positionValue = 0;
      customStyle = {
        backgroundColor,
        padding: 10,
        position: 'absolute',
        top: 0,
        marginTop: 0,
        width: '100%',
        borderRadius: 0,
        minHeight: 50,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
      };
    }

    return (
      <>
        <Toast
          ref="toast"
          position={position}
          positionValue={positionValue}
          opacity={1}
          fadeInDuration={200}
          fadeOutDuration={500}
          style={customStyle}
        />
      </>
    );
  }
}

export default ToastEasyNotification;
