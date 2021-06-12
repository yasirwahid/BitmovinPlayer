import * as React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import ReactNativeBitmovinPlayer, {
  ReactNativeBitmovinPlayerIntance,
} from '@takeoffmedia/react-native-bitmovin-player';

export default function App() {
  React.useEffect(() => {
    // ReactNativeBitmovinPlayerIntance.multiply(3, 7).then((result) => {
    //   console.log({ result });
    // });
    // ReactNativeBitmovinPlayerIntance.play();
  }, []);

  return (
    <View style={styles.container}>
      <ReactNativeBitmovinPlayer
        autoPlay={false}
        videoId={1}
        deviceZoom={0}
        hasZoom={false}
        configuration={{
          url: 'https://livesim.dashif.org/livesim/chunkdur_1/ato_7/testpic4_8s/Manifest.mpd',
          poster: '',
          startOffset: 0,
          hasNextEpisode: false,
          subtitles: '',
          thumbnails: '',
          title: '',
          subtitle: '',
          nextPlayback: 1,
          hearbeat: 1,
          advisory: {
            classification: '',
            description: '',
          },
          css: '',
          js: '',
        }}
        // configuration={{
        //   url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        //   poster: '',
        //   subtitles: '',
        //   thumbnails: '',
        //   startOffset: 0,
        //   hasNextEpisode: false,
        // }}
        onLoad={e => console.log('Load', e)}
        onError={e => console.log('Error', e)}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
