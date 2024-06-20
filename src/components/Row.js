import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Row = ({justify, children, style}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: justify || 'flex-start',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
