import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
class SettingScreen extends React.Component {
  back = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icon} onPress={this.back}>
            <Icon name='angle-left' type='font-awesome' size={50} color='#333333' />
          </TouchableOpacity>
          <Text style={styles.headerFont}>App Settings</Text>
        </View>
        <View style={styles.body}>
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  },
  icon: {
    width: 20,
    height: 80
  },
  header: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#13BBED',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 0
  },
  headerFont: {
    fontSize: 30
  },
  body: {
    flex: 3
  }
});

export default SettingScreen;
