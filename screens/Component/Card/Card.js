import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Color from '../../../Config/color';

const templateData = [
  {
    title: 'Watch: Equations',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },
  {
    title: 'Rate: Equations',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },
  {
    title: 'Vote: Who should win?',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },
  {
    title: 'Open: Site',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },
  {
    title: 'See: What is 3 plus 3',
    description: ' What is 3 plus 3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  }
];

export default class Card extends React.Component {
  state = {
    data: templateData[4]
  };
  checktype = () => {
    return this.state.data.title.split(':')[0];
  };
  showIcon = () => {
    let word = this.checktype();
    switch (word) {
      case 'Watch':
      case 'Open':
        return (
          <TouchableOpacity>
            <Image source={require('../../../assets/img/open.png')}></Image>
          </TouchableOpacity>
        );
        break;
    }
  };
  showButtons = () => {
    let word = this.checktype();
    switch (word) {
      case 'Watch':
        return (
          <View style={watchStyle.container}>
            <Button
              title='Play'
              buttonStyle={cardStyle.button}
              titleStyle={cardStyle.buttonTitle}
            />
          </View>
        );
      case 'Rate':
        return (
          <View style={RateStyle.container}>
            <Button
              icon={<Icon name='thumbs-up' type='font-awesome' color={'white'} />}
              title=''
              buttonStyle={RateStyle.thumbUp}
            />
            <Button
              icon={<Icon name='thumbs-down' type='font-awesome' color={'white'} />}
              title=''
              buttonStyle={RateStyle.thumbDown}
            />
          </View>
        );
        break;
      case 'Vote':
        return (
          <View style={VoteStyle.container}>
            {[1, 2, 3, 4].map((item, key) => (
              <Button
                key={key}
                title={item.toString()}
                onPress={() => console.log(item)}
                buttonStyle={VoteStyle.button}
                titleStyle={cardStyle.buttonTitle}
              />
            ))}
          </View>
        );
        break;
      case 'Open':
        return (
          <View style={watchStyle.container}>
            <Button
              title='Open'
              buttonStyle={cardStyle.button}
              titleStyle={cardStyle.buttonTitle}
            />
          </View>
        );
    }
  };
  render() {
    const { data } = this.state;
    return (
      <View style={cardStyle.container}>
        {this.checktype() !== 'See' ? (
          <View style={cardStyle.imageContainer}>
            <Image
              source={{
                uri: data.image
              }}
              resizeMode='stretch'
              style={cardStyle.image}
            />
          </View>
        ) : (
          <View>
            <Text>{data.description}</Text>
          </View>
        )}
        <View style={cardStyle.footer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={cardStyle.Text}>{data.title}</Text>
            {this.showIcon()}
          </View>
          {this.showButtons()}
        </View>
      </View>
    );
  }
}

const cardStyle = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    height: '90%'
    // backgroundColor: 'white'
  },
  Text: {
    fontSize: 22,
    color: 'white',
    flex: 1
  },
  imageContainer: {
    height: '70%',
    backgroundColor: 'white'
  },
  image: {
    height: '100%',
    width: '100%',
    borderColor: 'white',
    borderWidth: 1
  },
  footer: {
    marginTop: 20,
    color: 'white',
    fontSize: 22
  },
  button: {
    backgroundColor: Color.darkblue
  },
  buttonTitle: {
    color: Color.black
  }
});

const watchStyle = StyleSheet.create({
  container: {
    marginTop: '5%'
  }
});

const RateStyle = StyleSheet.create({
  container: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  thumbUp: {
    backgroundColor: '#00C851',
    width: '91%'
  },
  thumbDown: {
    backgroundColor: Color.pink,
    width: '91%'
  }
});

const VoteStyle = StyleSheet.create({
  container: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: Color.darkblue,
    width: 60
  }
});
