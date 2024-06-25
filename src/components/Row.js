import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Row = ({justify, children, style, f, fw}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: justify || 'flex-start',
          flex: f || 0,
          flexWrap: fw || 'nowrap',
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
