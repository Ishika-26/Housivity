import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FavouriteCards from '../components/FavouriteCards';

const Saved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Saved Property</Text>
      </View>
      <FavouriteCards />
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  titleContainer: {
    paddingTop: 12,
    paddingLeft: 16,
    marginBottom: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // This property is for Android shadow
    padding: 8,
    borderRadius: 4,
  },
  title: {
    color: 'black',
    fontSize: 24
  }
});
