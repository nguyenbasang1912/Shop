import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {colors} from '../utils/styles';
import Section from './Section';
import CText from './CText';
import Row from './Row';
import Icon from 'react-native-vector-icons/Entypo';

const CountDown = ({time = 0, style}) => {
  const [seconds, setSeconds] = useState(time);
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(0);
      return;
    }
    const timeId = setTimeout(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [seconds]);

  return (
    <View style={style || {}}>
      <Row>
        <Section
          f={0}
          background={colors.white}
          style={{borderRadius: 5, elevation: 5}}>
          <CText style={styles.text}>
            {Math.floor(seconds / 60 / 60) < 10
              ? `0${Math.floor(seconds / 60 / 60)}`
              : Math.floor(seconds / 60 / 60)}
          </CText>
        </Section>

        <Section>
          <Icon
            name={'dots-two-vertical'}
            color={colors.white}
            style={{borderRadius: 5}}
          />
        </Section>

        <Section
          f={0}
          background={colors.white}
          style={{borderRadius: 5, elevation: 5}}>
          <CText style={styles.text}>
            {Math.floor(seconds / 60) < 10
              ? `0${Math.floor(seconds / 60)}`
              : Math.floor(seconds / 60)}
          </CText>
        </Section>

        <Section>
          <Icon name={'dots-two-vertical'} color={colors.white} />
        </Section>

        <Section
          f={0}
          background={colors.white}
          style={{borderRadius: 5, elevation: 5}}>
          <CText style={styles.text}>
            {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
          </CText>
        </Section>
      </Row>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  box: {
    width: 42,
    height: 42,
    backgroundColor: colors.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.dark,
    lineHeight: 24,
    margin: 9,
  },
});
