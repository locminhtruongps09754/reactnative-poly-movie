import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import common from '../../themes/common';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SeasonItem({image, name, episode_count}) {
  return (
    <View style={styles.container}>
      <FastImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${image}`,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text
        style={[common.subtitle, {fontFamily: 'Roboto-Bold', marginBottom: 5}]}>
        {name}
      </Text>
      <Text style={common.subtitle}>{episode_count} Episodes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.31,
    marginRight: width * 0.02,
  },
  image: {
    backgroundColor: '#D8D8D8',
    height: 180,
    marginBottom: 5,
  },
});
