import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SearchBar({goTo, tag, backTo}) {
  const navigation = useNavigation();
  const [query, onChangeText] = useState('');
  return (
    <LinearGradient colors={['#FF6A00', '#EE0979']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Pressable onPress={() => navigation.navigate(goTo, {tag, query})}>
          <View style={styles.search}>
            <FontAwesome name="search" color="white" size={30} />
          </View>
        </Pressable>

        <TextInput
          style={styles.input}
          placeholder="Search Here ..."
          onChangeText={(text) => onChangeText(text)}
          value={query}
        />
        <Pressable
          onPress={() => navigation.navigate(backTo)}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          ß>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/icons/SuBeeTeam.png')}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    backgroundColor: 'white',
    padding: 5,
    flex: 4,
    height: 40,
    borderRadius: 5,
  },
  tinyLogo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  search: {
    marginRight: 10,
    height: 45,
    width: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
