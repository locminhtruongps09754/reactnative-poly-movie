import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';
import axiosConfig from '../api/axios';
import TVItem from '../components/List/TVItem';
import NavBar from '../components/NavBar';

const TAGs = {
  popular: 'popular',
  airing: 'airing_today',
  ontv: 'on_the_air',
  top_rated: 'top_rated',
};

export default function ViewAllTVScreen({route}) {
  const [data, setData] = useState({});
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState('none');
  const tag = route.params.tag;

  useEffect(() => {
    axiosConfig
      .get(`/tv/${TAGs[tag]}`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
          page: page,
        },
      })
      .then((response) => {
        setData(response.data);
        setMovie((oldTV) => oldTV.concat(response.data.results));
        setLoading('none');
      });
  }, [page, tag]);

  const _loading = () => {
    setLoading('flex');
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <NavBar page={page} total={data.total_pages} backTo="Main" />
      <View style={{paddingHorizontal: 5}}>
        <FlatList
          data={movie}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TVItem
              goTo="DetailMovie"
              id={item.id}
              image={item.poster_path}
              title={item.name}
            />
          )}
          onEndReached={() => {
            _loading();
          }}
          onEndReachedThreshold={0.1}
        />
        <View style={{padding: 10, display: `${loading}`}}>
          <ActivityIndicator size="small" color="gray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 140,
  },
});
