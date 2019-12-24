import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import MicComponent from '../Component/Mic';
import SwitchButton from '../Component/SwitchButton';
import { STATUS_MAP, MODE_MAP } from '../constants';
import Color from '../../Config/color';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  componentDidMount() {}
  state = {
    status: STATUS_MAP.THINKING,
    mode: MODE_MAP.TAP
  };
  switchMode = val => {
    this.setState({ mode: val === 1 ? MODE_MAP.TAP : MODE_MAP.HANDSFREE });
  };
  settings = () => {
    const { navigation } = this.props;
    navigation.navigate('Setting');
  };
  progress = () => {
    const { navigation } = this.props;
    navigation.navigate('Report');
  };
  _renderItem({ item, index }) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }
  render() {
    const { status, mode } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.displayArea}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={this.settings} style={styles.settings}>
                <Image source={require('../../assets/img/settings.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 7 }}>
              <TouchableOpacity style={styles.progress} onPress={this.progress}>
                <Image source={require('../../assets/img/progress.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <View style={{ marginBottom: 5 }}>
            <SwitchButton mode={mode} switchMode={this.switchMode} />
          </View>
          <View>
            <View>
              {/* <Carousel data={data} renderItem={this._renderItem} sliderWidth={2} itemWidth={2} /> */}
            </View>
            <MicComponent status={status} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#D8D8D8',
    flex: 3
  },
  displayArea: {
    flex: 2,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Color.nightDark,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 19
  },
  text: {
    // fontFamily: 'Mazzard M',
    fontSize: 50,
    color: '#ffffff'
  },
  settings: { textAlign: 'left' },
  progress: {}
});
