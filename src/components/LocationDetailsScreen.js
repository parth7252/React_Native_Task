import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationDetailsScreen = ({ route }) => {
  const { marker } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{marker.title}</Text>
      <Text>{marker.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
});

export default LocationDetailsScreen;
