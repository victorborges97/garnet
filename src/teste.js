import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a53abb28ba',
    title: 'one Item',
  },
  {
    id: '3ac68afc-c605-48d3-a48-fbd91aa97f63',
    title: 'two Item',
  },
  {
    id: '58694af-3da1-471f-bd96-145571e29d72',
    title: 'tri Item',
  },
  {
    id: 'bd7acbea-c1b1-46c-aed5-3ad53abb28ba',
    title: 'for Item',
  },
  {
    id: '3ac68afc-c605-4d3-a4f8-fbd91aa97f63',
    title: 'five Item',
  },
  {
    id: '58694a0f-da1-471f-bd96-145571e29d72',
    title: 'sex Item',
  },
  {
    id: '3ac68afc-c605-8d3-a4f8-fbd1aa97f63',
    title: 'five Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14551e29d72',
    title: 'sex Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f-fbd91aa97f3',
    title: 'five Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455712972',
    title: 'sex Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fb91aa97f63',
    title: 'five Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e9d72',
    title: 'sex Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function teste({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});