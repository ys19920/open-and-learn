import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../../Config/color';
export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };
  state = {
    activeSlide: this.props.activeSlider,
    entries: [
      { title: 'oneoneoneoneoneone', backgroundColor: Color.white },
      { title: 'twotwotwotwotwo', backgroundColor: Color.darkblue },
      { title: 'threethreethreethree', backgroundColor: Color.pink },
      { title: 'fourfourfourfourfour', backgroundColor: Color.redOrange },
      { title: 'fivefivefivefivefive', backgroundColor: Color.primary }
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
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});
