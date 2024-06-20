import React, {useRef} from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../utils/styles';
import {WINDOW_WIDTH, sizes} from '../utils/styles/sizes';
import CText from './CText';
import CountDown from './CountDown';
import Row from './Row';
import Spacer from './Spacer';

const Carousel = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderBanner = ({item}) => {
    return (
      <TouchableOpacity style={styles.wrapper}>
        <ImageBackground
          source={item.thumb}
          style={styles.img}
          resizeMode="contain">
          <CText style={styles.title}>{item.title}</CText>
          {item.time ? (
            <CountDown time={item.time} style={styles.time} />
          ) : (
            <CText
              type="common"
              color={colors.white}
              style={styles.description}>
              {item.description}
            </CText>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderBanner}
        pagingEnabled
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
      />
      <Spacer h={16} />
      <Row justify={'center'}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * WINDOW_WIDTH,
            index * WINDOW_WIDTH,
            (index + 1) * WINDOW_WIDTH,
          ];
          const background = scrollX.interpolate({
            inputRange,
            outputRange: [colors.light, colors.primary, colors.light],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, {backgroundColor: background}]}
            />
          );
        })}
      </Row>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  title: {
    fontSize: sizes.xxiv,
    fontWeight: '700',
    color: colors.white,
    position: 'relative',
    top: 32,
    left: 24,
    width: WINDOW_WIDTH * 0.5,
    lineHeight: 36,
  },
  wrapper: {
    width: WINDOW_WIDTH,
    height: 'auto',
    alignItems: 'center',
  },
  img: {
    width: WINDOW_WIDTH - 16 * 2,
    height: WINDOW_WIDTH * 0.58,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
  time: {
    position: 'absolute',
    bottom: 32,
    left: 24,
  },
  description: {
    position: 'relative',
    top: 40,
    left: 24,
  },
});
