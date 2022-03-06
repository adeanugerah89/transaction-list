/* eslint-disable no-undef */

import axios from 'axios';
import env from 'react-native-config';
import {showToastMessage} from '../containers/ToastEasyNotification';

let URIS = {
  setURI: env.API_URI,
};

const Axios = () => {
  let instance = axios.create();
  instance.defaults.timeout = 1000 * 30; // Wait for 30 seconds
  instance.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
  instance.defaults.headers.common['Accept'] = 'application/json';
  instance.defaults.headers.common['Accept-Language'] = 'id';
  return instance;
};

const ShowNotification = error => {
  let message = '';
  if (error.response) {
    const {data} = error.response;
    message = data.detail
      ? data.title + ', ' + data.detail
      : 'Something went wrong';
  } else {
    message = error.message;
  }
  // show toast message
  showToastMessage('error', message);
};

export const ServicesAPI = {
  getAll: endpointName => {
    let resourceURI = `${URIS.setURI}/${endpointName}`;

    return Axios()
      .get(resourceURI, query)
      .then(response => {
        return response;
      })
      .catch(error => {
        ShowNotification(error);
        throw error;
      });
  },
  getRequest: (endpointName, query) => {
    let resourceURI = `${URIS.setURI}/${endpointName}`;

    return Axios()
      .get(resourceURI, query)
      .then(response => {
        return response;
      })
      .catch(error => {
        ShowNotification(error);
        throw error;
      });
  },
  deleteRequest: (endpointName, query) => {
    let resourceURI = `${URIS.setURI}/${endpointName}`;

    return Axios()
      .delete(resourceURI, query)
      .then(response => {
        return response;
      })
      .catch(error => {
        ShowNotification(error);
        throw error;
      });
  },
  postRequest: (endpointName, query) => {
    let resourceURI = `${URIS.setURI}/${endpointName}`;

    return Axios()
      .post(resourceURI, query)
      .then(response => {
        return response;
      })
      .catch(error => {
        ShowNotification(error);
        throw error;
      });
  },
  putRequest: (endpointName, data, query) => {
    let resourceURI = `${URIS.setURI}/${endpointName}`;

    return Axios()
      .put(resourceURI, data, query)
      .then(response => {
        return response;
      })
      .catch(error => {
        ShowNotification(error);
        throw error;
      });
  },
};
