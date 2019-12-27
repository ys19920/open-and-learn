import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import MicComponent from '../Component/Mic';
import SwitchButton from '../Component/SwitchButton';
import { STATUS_MAP, MODE_MAP } from '../constants';
import SwipeableViews from 'react-swipeable-views-native';
import Card from '../Component/Card';
import Color from '../../Config/color';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Home Screen!'
  };
  componentDidMount() {}
  state = {
    status: STATUS_MAP.READY,
    mode: MODE_MAP.TAP,
    response: false
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

  render() {
    const { status, mode, response } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.displayArea}>
          {!response ? (
            <View>
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
          ) : (
            <Card />
          )}
        </View>
        <View style={styles.buttonArea}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', flex: 1 }}>
              <View style={{ height: 46, justifyContent: 'center' }}>
                <Text style={{ fontSize: 12 }}>Ideas</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', flex: 5 }}>
              <SwitchButton mode={mode} switchMode={this.switchMode} />
            </View>
            <View style={{ alignItems: 'flex-start', flex: 1 }}>
              <View style={{ height: 46, justifyContent: 'center' }}>
                <Text style={{ fontSize: 12 }}>Recent</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '3%' }}>
            <MicComponent status={status} />

            {/* <SwipeableViews style={swipeStyles.slideContainer}>
              <View style={[swipeStyles.slide, swipeStyles.slide1]}>
                <Text style={swipeStyles.text}>slide n°1</Text>
              </View>
              <View style={[swipeStyles.slide, swipeStyles.slide2]}>
                <Text style={swipeStyles.text}>slide n°2</Text>
              </View>
              <View style={[swipeStyles.slide, swipeStyles.slide3]}>
                <Text style={swipeStyles.text}>slide n°3</Text>
              </View>
            </SwipeableViews> */}
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
    backgroundColor: '#F8F8F8',
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
    marginTop: 5,
    flex: 1
  },
  footer: {
    flex: 4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  recommend: {
    flex: 1
  },
  activity: {
    flex: 1
  },
  text: {
    // fontFamily: 'Mazzard M',
    fontSize: 50,
    color: '#ffffff'
  },
  settings: { textAlign: 'left' },
  mic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const swipeStyles = StyleSheet.create({
  slideContainer: {
    height: 100
  },
  slide: {
    padding: 15,
    height: 100
  },
  slide1: {
    backgroundColor: '#FEA900'
  },
  slide2: {
    backgroundColor: '#B3DC4A'
  },
  slide3: {
    backgroundColor: '#6AC0FF'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
