import React from 'react';
import { View, StyleSheet } from 'react-native';

const BottomSheet = ({ children }) => {
  return (
    <View style={styles.sheet}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default BottomSheet;
