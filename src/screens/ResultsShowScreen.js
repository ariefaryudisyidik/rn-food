import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ResultsShowScreen = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params;
  console.log(id);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
