import axios from 'axios';
import { Alert } from 'react-native';

import { getStore } from '../Redux';
import getEnvVars from '../../environment';
import navigationService from './navigation';

const { apiUrl } = getEnvVars();

export default function request(
  url,
  data,
  method = 'get',
  authRequired = true
) {
  const requestObject = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data
  };

  if (authRequired) {
    const store = getStore();
    const { token } = store.getState().auth;
    requestObject.headers.Authorization = token;
  }

  return axios(`${apiUrl}/api${url}`, requestObject)
    .then(res => res.data)
    .catch(e => {
      if (authRequired) {
        switch (e.response.status) {
          case 401:
            navigationService.navigate('SignIn');
            break;

          case 500:
            Alert.alert(
              'Server Error',
              'There is problem with the server. Please try again later',
              [{ text: 'Try Again' }]
            );
            break;

          default:
            Alert.alert(
              'Something went wrong',
              'Something went wrong with this action. Please try again',
              [{ text: 'Try Again' }]
            );
            break;
        }
      }
      console.log(e.response);

      return e.response;
    });
}
