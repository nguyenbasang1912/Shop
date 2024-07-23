import React from 'react';
import {StyleSheet, View} from 'react-native';

const Row = ({justify, children, style, f, fw, w, alignItems}) => {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: justify || 'flex-start',
          flex: f || 0,
          flexWrap: fw || 'nowrap',
          width: w || 'auto',
          alignItems: alignItems || 'center',
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
  },
});
