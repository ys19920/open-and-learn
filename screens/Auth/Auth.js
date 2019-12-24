import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { WebView } from 'react-native-webview';
import Color from '../../Config/color';
import source from './source';
const AmazonUri = 'https://m.media-amazon.com/images/G/01/lwa/btnLWA_gold_195x46._CB487591031_.png';
// const client_id = 'amzn1.application-oa2-client.3cebc4cf3a0f435fb81269b98d719ab8';
// const client_secret = 'a16c80234ca059fa6dde6034dd87b5eb5d3bdb716b61195ef114329ec125d9fb';

const client_id = '';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Login with Amazon'
  };
  state = {
    show: false
  };
  componentDidMount() {}
  gotoApp = async () => {};
  login = () => {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayArea}>
          <Text style={styles.text}>Open & Learn</Text>
          <Text style={styles.text}>Let's go</Text>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={this.login}>
            <Image source={{ uri: AmazonUri }} style={styles.loginButton}></Image>
          </TouchableOpacity>
        </View>
        {/* <WebView
          source={{ html: source() }}
          originWhitelist={['*']}
          javaScriptEnabledAndroid={true}
          javaScriptEnabled={true}
          onMessage={event => {
            alert('MESSAGE >>>>' + event.nativeEvent.data);
          }} */}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.nightDark,
    height: '100%',
    width: '100%',
    flex: 3
  },
  displayArea: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    width: 195,
    height: 46
  },

  text: {
    // fontFamily: 'Mazzard M',
    fontSize: 50,
    color: 'white'
  }
});
