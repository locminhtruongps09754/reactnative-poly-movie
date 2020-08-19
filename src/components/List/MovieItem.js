import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MovieItem({goTo, id, image}) {
  const navigation = useNavigation();
  if (image) {
    return (
      <View>
        <Pressable onPress={() => navigation.navigate(goTo, {id})}>
          <View style={styles.container}>
            <ActivityIndicator
              size="small"
              color="#E54028"
              style={styles.activityIndicator}
            />
            <FastImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${image}`,
              }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
        </Pressable>
      </View>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBDBDB',
    position: 'relative',
    marginBottom: 5,
    marginRight: width * 0.01,
    borderRadius: 5,
  },
  image: {
    width: width * 0.32,
    height: 180,
    borderRadius: 5,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    top: 80,
  },
});
