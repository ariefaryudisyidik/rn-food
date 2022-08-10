import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({route, navigation}) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;
  console.log(result);

  const getResult = async ids => {
    const response = await yelp.get(`/${ids}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
