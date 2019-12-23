import { StyleSheet } from 'react-native';
const ReadyStyle = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#47C8EF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  circle: {
    marginTop: 20
  },
  image: {
    height: 100,
    width: 70
  }
});
const ListeningStyle = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#EC6055',
    textAlign: 'center'
  },
  circle: {
    marginTop: 10
  },
  image: {
    height: 110,
    width: 72
  }
});
const NotReadyStyle = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#A2A2A2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  circle: {
    marginTop: 20
  },
  image: {
    height: 100,
    width: 70
  }
});

const ThinkingStyle = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#EC6055',
    alignItems: 'center'
  },
  circle: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100
  },
  title: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    height: 130,
    width: 130
  }
});
const SpeakingStyle = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#47C8EF',
    alignItems: 'center'
  },
  circle: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100
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

const micStyle = {
  ReadyStyle,
  NotReadyStyle,
  SpeakingStyle,
  ListeningStyle,
  ThinkingStyle
};

export default micStyle;
