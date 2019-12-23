import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import SwitchToggle from 'react-native-switch-toggle';
import Color from '../../Config/color';
class SettingScreen extends React.Component {
  back = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };
  state = {
    anonyMode: false,
    audioMode: false
  };
  changeAnonyMode = () => {
    const { anonyMode } = this.state;
    this.setState({ anonyMode: !anonyMode });
  };

  changeAudioMode = () => {
    const { audioMode } = this.state;
    this.setState({ audioMode: !audioMode });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icon} onPress={this.back}>
            <Icon name='angle-left' type='font-awesome' size={50} color={Color.black} />
          </TouchableOpacity>
          <Text style={styles.headerFont}>App Settings</Text>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.bodyFont}>Voice Interaction</Text>
            <View style={ToogleStyles.toogleInput}>
              <View style={ToogleStyles.toogleText}>
                <Text>Anonymize Voice</Text>
              </View>
              <View style={ToogleStyles.toogleButton}>
                <SwitchToggle
                  switchOn={this.state.anonyMode}
                  onPress={this.changeAnonyMode}
                  backgroundColorOn={Color.darkblue}
                  circleColorOn='white'
                  containerStyle={ToogleStyles.toogleContainer}
                />
              </View>
            </View>

            <View style={ToogleStyles.toogleInput}>
              <View style={ToogleStyles.toogleText}>
                <Text>Audio Tone</Text>
              </View>
              <View style={ToogleStyles.toogleButton}>
                <SwitchToggle
                  switchOn={this.state.audioMode}
                  onPress={this.changeAudioMode}
                  backgroundColorOn={Color.darkblue}
                  circleColorOn='white'
                  containerStyle={ToogleStyles.toogleContainer}
                />
              </View>
            </View>
          </View>

          <View style={MoreStyles.container}>
            <Text style={styles.bodyFont}>More</Text>
            <TextInput
              style={MoreStyles.TextMargin}
              placeholderTextColor='black'
              placeholder='Terms of use'
            />
            <TextInput
              style={MoreStyles.TextMargin}
              placeholderTextColor='black'
              placeholder='Privacy Policy'
            />
          </View>

          <View style={emailStyles.container}>
            <Text style={{ color: Color.redOrange }}>Join our email list to get updates</Text>
            <TextInput style={emailStyles.TextMargin} placeholderTextColor='black' />
          </View>

          <View style={{ paddingTop: 10 }}>
            <Button title='Add Email' buttonStyle={styles.email} titleStyle={styles.buttonStyle} />
          </View>

          <View style={{ paddingTop: 30 }}>
            <Button title='Logout' buttonStyle={styles.logout} titleStyle={styles.buttonStyle} />
          </View>
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
    justifyContent: 'center',
    backgroundColor: Color.darkblue,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 0
  },
  headerFont: {
    fontSize: 30
  },
  bodyFont: {
    fontSize: 14,
    color: '#6D6D6D'
  },
  body: {
    flex: 3,
    padding: 30
  },
  email: {
    backgroundColor: Color.darkblue
  },
  logout: {
    backgroundColor: Color.pink
  },
  buttonStyle: {
    color: 'black'
  }
});

const ToogleStyles = StyleSheet.create({
  toogleInput: {
    borderBottomWidth: 1,
    borderColor: '#D8DCFF',
    paddingBottom: 5,
    paddingTop: 15,
    flexDirection: 'row'
  },
  toogleText: {
    justifyContent: 'center'
  },
  toogleButton: {
    alignItems: 'flex-end',
    flex: 5
  },
  toogleContainer: { width: 60, borderRadius: 20, padding: 0 }
});

const MoreStyles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  TextMargin: {
    marginTop: 15,
    borderBottomColor: '#D8DCFF',
    borderBottomWidth: 1
  }
});

const emailStyles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  TextMargin: {
    marginTop: 10,
    borderBottomColor: Color.redOrange,
    borderBottomWidth: 1
  }
});

export default SettingScreen;
