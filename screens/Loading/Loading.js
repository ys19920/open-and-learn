import React from 'react';
import { Image, AsyncStorage, View, StyleSheet, Text } from 'react-native';

class LoadingScreen extends React.Component {
  async componentDidMount() {
    setTimeout(this._bootstrapAsync, 3000);
  }

  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    // const token = await AsyncStorage.getItem('token');
    // navigation.navigate(token ? 'App' : 'Auth');
    navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open & Learn</Text>
        <Image source={require('../../assets/img/loading.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EC6055',
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 50,
    color: '#ffffff'
  }
});

export default LoadingScreen;
