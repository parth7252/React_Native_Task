import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from './BottomSheet';
import { mapMarkers } from '../utils/mapMarkers';

const MapScreen = ({ navigation }) => {
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoPress = () => {
    navigation.navigate('LocationDetails', { marker: selectedMarker });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {mapMarkers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      {selectedMarker && (
        <BottomSheet>
          <Text>{selectedMarker.description}</Text>
          <Button title="More Info" onPress={handleInfoPress} />
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
