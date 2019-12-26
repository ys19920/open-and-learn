import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  state = {
    activeSlide: this.props.activeSlider,
    entries: [
      { title: 'oneoneoneoneoneone', backgroundColor: 'red' },
      { title: 'twotwotwotwotwo', backgroundColor: 'white' },
      { title: 'threethreethreethree', backgroundColor: 'gray' },
      { title: 'fourfourfourfourfour', backgroundColor: 'black' },
      { title: 'fivefivefivefivefive', backgroundColor: 'orange' }
    ]
  };
  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{ ...carouselStyle.slider, backgroundColor: item.backgroundColor }}>
        <Text style={{ color: 'blue' }}>{item.title}</Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <Carousel
          data={this.state.entries}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeSlide: index })}
          sliderWidth={160}
          itemWidth={160}
          firstItem={this.state.activeSlide}
        />
      </View>
    );
  }
}

const carouselStyle = StyleSheet.create({
  slider: {
    backgroundColor: 'red',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});