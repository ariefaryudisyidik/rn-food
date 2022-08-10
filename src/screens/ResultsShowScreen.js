import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({route}) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;

  const getResult = async ids => {
    const response = await yelp.get(`/${ids}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image source={{uri: item}} style={styles.image} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});
