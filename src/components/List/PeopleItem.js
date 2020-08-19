import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function PeopleItem({goTo, id, knownFor, image, name}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(goTo, {id, knownFor})}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${image}`,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: width * 0.01,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: width * 0.475,
    height: 220,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  name: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
});
