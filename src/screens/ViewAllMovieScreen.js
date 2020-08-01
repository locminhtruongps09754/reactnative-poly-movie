import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import axiosConfig from '../api/axios';
import MovieItem from '../components/List/MovieItem';
import NavBar from '../components/NavBar';

const TAGs = {
  popular: 'popular',
  nowplaying: 'now_playing',
  upcoming: 'upcoming',
  top_rated: 'top_rated',
};

export default function ViewAllMovieScreen({route}) {
  const [data, setData] = useState({});
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const tag = route.params.tag;
  const numColumn = 3;

  useEffect(() => {
    axiosConfig
      .get(`/movie/${TAGs[tag]}`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
          page: page,
        },
      })
      .then((response) => {
        setData(response.data);
        setMovie((oldMovie) => oldMovie.concat(response.data.results));
      });
  }, [page, tag]);

  return (
    <View style={styles.container}>
      <NavBar page={page} total={data.total_pages} backTo="Main" />
      <View style={{paddingHorizontal: 5}}>
        <FlatList
          numColumns={numColumn}
          data={movie}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <MovieItem
              goTo="DetailMovie"
              id={item.id}
              image={item.poster_path}
            />
          )}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 120},
});
