import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function BendBack({navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('../videos/bendBackwards.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
     
     <View style={styles.buttonContainer}>
    <TouchableOpacity 
          style={styles.customBotton}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        >
          <Text style={styles.buttonText}>{status.isPlaying ? 'PAUSE' : 'START'}</Text>
        </TouchableOpacity>


        <TouchableOpacity 
          style={styles.customBotton}
          onPress={() => navigation.navigate('Exercise')}
        >
          <Text style={styles.buttonText}>FINISH</Text>
        </TouchableOpacity>
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 500,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  customBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#FF003D',
  },

  buttonText: {
    fontSize: 20,
    color: 'white'
  }
});




