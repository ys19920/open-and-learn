import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Animated,
  Dimensions
} from 'react-native';
import Color from '../../Config/color';
import mainStyle from '../../Config/mainStyle';

const AmazonUri = 'https://m.media-amazon.com/images/G/01/lwa/btnLWA_gold_195x46._CB487591031_.png';
// const client_id = 'amzn1.application-oa2-client.3cebc4cf3a0f435fb81269b98d719ab8';
// const client_secret = 'a16c80234ca059fa6dde6034dd87b5eb5d3bdb716b61195ef114329ec125d9fb';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Login with Amazon'
  };
  state = {
    show: false,
    value: new Animated.Value(1)
  };
  componentWillUnmount() {
    // Animated.timing(this.state.value, { toValue: 0, duration: 5000 }).start();
  }
  gotoApp = async () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };
  login = () => {
    setTimeout(this.gotoApp, 2000);
    Animated.timing(this.state.value, { toValue: 0, duration: 2000 }).start();
  };
  render() {
    const { value } = this.state;
    let height = Dimensions.get('window').height;
    return (
      <View style={styles.container}>
        <View style={styles.displayArea}>
          <Animated.View
            style={{
              opacity: this.state.value
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.fontOpen}>Open & Learn</Text>
              <Text style={styles.fontGo}>Let's go</Text>
            </View>
          </Animated.View>
        </View>
        <View style={styles.buttonArea}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: this.state.value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-height / 3 + 20, 0]
                  })
                }
              ]
            }}
          >
            <View
              style={{
                backgroundColor: Color.nightDark,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity onPress={this.login}>
                <Image source={{ uri: AmazonUri }} style={styles.loginButton}></Image>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flex: 3
  },
  displayArea: {
    backgroundColor: Color.nightDark,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonArea: {
    flex: 1
  },
  loginButton: {
    width: 195,
    height: 46
  },

  fontOpen: {
    fontFamily: 'MazzardM-Medium',
    fontSize: 50,
    ...mainStyle.whiteFont
  },

  fontGo: {
    fontFamily: 'MazzardM-Medium',
    // fontFamily: 'Mazzard',
    fontSize: 50,
    ...mainStyle.whiteFont
  }
});
