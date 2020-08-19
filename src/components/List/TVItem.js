import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Pressable,
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function TVItem({goTo, id, image, title}) {
  const navigation = useNavigation();
  if (image) {
    return (
      <View>
        <Pressable onPress={() => navigation.navigate(goTo, {id})}>
          <View style={styles.container}>
            <FastImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500${image}`,
              }}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
            <LinearGradient
              colors={['transparent', 'transparent', 'black']}
              style={styles.linearGradient}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: width * 0.01,
    marginBottom: width * 0.01,
    position: 'relative',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 5,
  },
  image: {
    backgroundColor: '#D8D8D8',
    borderRadius: 5,
    width: width * 0.98,
    height: 200,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 18,
  },
});
