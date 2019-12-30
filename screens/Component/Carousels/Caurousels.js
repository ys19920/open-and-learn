import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../../Config/color';
export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  state = {
    stop: false,
    activeSlide: this.props.activeSlider,
    entries: [
      { title: '', backgroundColor: '#F8F8F8' },
      { title: 'Calm down', backgroundColor: '#DE6B48' },
      { title: 'Mindfulness', backgroundColor: '#E5B181' },
      { title: '2 minutes count down', backgroundColor: '#F3DE8A' },
      { title: 'Calm down', backgroundColor: '#AAD493' },
      { title: 'Calm down', backgroundColor: '#7DBBC3' },
      { title: '', backgroundColor: '#F8F8F8', id: 'space' },
      { title: 'Calm down', backgroundColor: '#7DBBC3' },
      { title: 'Calm down', backgroundColor: '#AAD493' },
      { title: 'Calm down', backgroundColor: '#7DBBC3' }
    ]
  };
  _renderItem = ({ item, index }) => {
    if (item.id) return <View></View>;
    return (
      // <TouchableOpacity onPress={this.show}>
      <View
        key={index}
        style={{
          ...carouselStyle.slider,
          backgroundColor: item.backgroundColor,
          width: 140
        }}
      >
        <Text style={carouselStyle.fontGallery}>{item.title}</Text>
      </View>
      // </Tou>
    );
  };
  show = () => {
    // this.props.StopMic('Pressed');
  };
  changeItem = index => {
    // this.setState({ activeSlide: index });
  };
  startScroll = () => {
    // this.props.StopMic('Scroll');
  };
  render() {
    // console.log(Dimensions.get('window').width);
    // console.log(this.props.marginLeft);
    return (
      <View
        style={{
          marginLeft: -95,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Carousel
          activeSlideAlignment='start'
          data={this.state.entries}
          renderItem={this._renderItem}
          onSnapToItem={this.changeItem}
          sliderWidth={455}
          itemWidth={200}
          firstItem={this.state.activeSlide}
          inactiveSlideScale={1}
          onBeforeSnapToItem={this.startScroll}
        />
      </View>
    );
  }
}

const carouselStyle = StyleSheet.create({
  slider: {
    backgroundColor: 'red',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  fontGallery: {
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: Color.black
  }
});
