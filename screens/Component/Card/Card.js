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
      'https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png'
  },
  {
    title: 'Vote: Who should win?',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxbWDRp0uDnhvGkesRkA8DsHUomz2vNr07nD7AEE1_I29izRR6'
  },
  {
    title: 'Open: Site',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ehmeD0uAxN1B3hr7aBKH93pCMz7i48anPnXuvWqIJzEZGeYJ'
  },
  {
    title: 'See: What is 3 plus 3',
    description: ' What is 3 plus 3?',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  },

  {
    title: 'See: What is 3 plus 3',
    description: ' What is 3 plus 3?'
  },
  {
    title: 'Pizza',
    description: `Welcome to the pizza palace skill. You can order a
    pizza just by asking Alexa. Welcome to the pizza 
    palace skill. You can order a pizza just by asking 
    Alexa. Welcome to the pizza palace skill. You can 
    order a pizza just by asking Alexa. `,
    skill: 'Palace skill',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42KeJzQGhknhvj-M2eplUl_G9AJdvoW45UMBlvRQ1moFrurMp'
  }
];

export default class Card extends React.Component {
  state = {
    data: templateData[6],
    interval: null
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

  showFooter = () => {
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
      case 'Link':
        break;
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
    let status = ['See', 'Watch', 'Link', 'Vote', 'Rate', 'Open'];
    let first_word = this.checktype();
    let other = status.indexOf(first_word);
    return (
      <View style={cardStyle.container}>
        {other === -1 && (
          <View>
            <Text style={{ ...cardStyle.defaultTitle, ...cardStyle.whiteText }}>{data.title}</Text>
            <Text style={{ ...cardStyle.defaultTitle, ...cardStyle.whiteText }}>{data.skill}</Text>
          </View>
        )}
        {first_word !== 'See' || data.image ? (
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
          <View style={SeeStyle.container}>
            <Text style={{ color: 'white', fontSize: 30 }}>{data.description}</Text>
          </View>
        )}

        <View style={cardStyle.footer}>
          {first_word !== 'See' ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ ...cardStyle.defaultTitle, ...cardStyle.whiteText, flex: 1 }}>
                {data.title}
              </Text>
              {this.showIcon()}
            </View>
          ) : (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 20 }}>{data.description}</Text>
            </View>
          )}
          {this.showFooter()}
        </View>
      </View>
    );
  }
}

const cardStyle = StyleSheet.create({
  whiteText: {
    color: 'white'
  },
  defaultTitle: {
    fontSize: 22
  },
  container: {
    padding: 20,
    width: '100%',
    height: '70%'
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
    marginTop: 10,
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

const SeeStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    ...cardStyle.container
  }
});
