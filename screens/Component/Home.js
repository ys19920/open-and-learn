import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  state = {
    activeSlide: 4,
    entries: [
      { title: 'one' },
      { title: 'two' },
      { title: 'three' },
      { title: 'four' },
      { title: 'five' }
    ]
  };
  _renderItem = ({ item, index }) => {
    return (
      <View key={index} style={carouselStyle.slider}>
        <Text style={{ colord: 'red' }}>{item.title}</Text>
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
          sliderWidth={150}
          itemWidth={100}
          firstItem={this.state.activeSlide}
        />
      </View>
    );
  }
}

const carouselStyle = StyleSheet.create({
  slider: {
    backgroundColor: 'red',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
