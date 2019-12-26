import { StyleSheet } from 'react-native';
import Color from '../../../Config/color';
const ReadyStyle = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  circle: {
    marginTop: 10
  },
  image: {
    height: 80,
    width: 50
  }
});
const ListeningStyle = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: Color.pink,
    textAlign: 'center'
  },
  circle: {
    marginTop: 10
  },
  image: {
    height: 80,
    width: 50
  }
});
const NotReadyStyle = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Color.dark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  circle: {
    marginTop: 10
  },
  image: {
    height: 80,
    width: 50
  }
});

const ThinkingStyle = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Color.pink,
    alignItems: 'center'
  },
  circle: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    height: 80,
    width: 80
  }
});
const SpeakingStyle = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Color.primary,
    alignItems: 'center'
  },
  circle: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    height: 60,
    width: 60
  }
});

const micStyle = {
  ReadyStyle,
  NotReadyStyle,
  SpeakingStyle,
  ListeningStyle,
  ThinkingStyle
};

export default micStyle;
