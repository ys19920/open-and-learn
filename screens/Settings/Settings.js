import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import SwitchToggle from 'react-native-switch-toggle';
import { styles, ToogleStyles, MoreStyles, emailStyles } from './style';
import Color from '../../Config/color';
import mainStyle from '../../Config/mainStyle';
import { WebView } from 'react-native-webview';
class SettingScreen extends React.Component {
  back = () => {
    const { navigation } = this.props;
    navigation.navigate('App');
  };
  state = {
    anonyMode: false,
    audioMode: false,
    showPrivacy: false,
    showTerm: false
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
    const { showPrivacy, showTerm } = this.state;
    if (showTerm)
      return (
        <View style={{ width: '100%', height: '100%' }}>
          <WebView
            source={{ uri: 'https://policies.google.com/terms?fg=1' }}
            style={{ marginTop: 20 }}
          />
        </View>
      );
    if (showPrivacy)
      return (
        <View style={{ width: '100%', height: '100%' }}>
          <WebView
            source={{ uri: 'https://goaskmyclass.com/privacy-policy' }}
            style={{ marginTop: 20 }}
          />
        </View>
      );
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerCircle} />
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity style={styles.icon} onPress={this.back}>
              <Icon name='angle-left' type='font-awesome' size={50} color={Color.black} />
            </TouchableOpacity>
            <Text style={styles.headerFont}>App Settings</Text>
          </View>
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
            <TouchableOpacity>
              <Text style={MoreStyles.TextMargin} onPress={() => this.setState({ showTerm: true })}>
                Terms of use
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={MoreStyles.TextMargin}
                onPress={() => this.setState({ showPrivacy: true })}
              >
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>

          <View style={emailStyles.container}>
            <Text style={{ color: Color.redOrange }}>Join our email list to get updates</Text>
            <TextInput style={emailStyles.TextMargin} placeholderTextColor='black' />
          </View>

          <View style={emailStyles.container}>
            <Button
              title='Add Email'
              buttonStyle={mainStyle.defaultButton}
              titleStyle={mainStyle.buttonTitle}
            />
          </View>

          <View style={emailStyles.container}>
            <Button
              title='Logout'
              buttonStyle={mainStyle.pinkButton}
              titleStyle={mainStyle.buttonTitle}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SettingScreen;
