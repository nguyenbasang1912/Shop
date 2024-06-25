import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Section from './Section';
import Row from './Row';
import CText from './CText';
import RatingBar from './RatingBar';
import Spacer from './Spacer';
import {colors} from '../utils/styles';
import {sizes} from '../utils/styles/sizes';

const Comment = ({}) => {
  return (
    <Section>
      <Row>
        <Image
          source={require('../assets/common/avatar.png')}
          style={styles.avatar}
        />
        <Spacer w={16} />
        <Section>
          <CText type="button" color={colors.dark}>
            James Lawson
          </CText>
          <RatingBar rate={4} disable />
        </Section>
      </Row>
      <Spacer h={16} />
      <CText style={styles.description} size={sizes.xiv}>
        air max are always very comfortable fit, clean and just perfect in every
        way. just the box was too small and scrunched the sneakers up a little
        bit, not sure if the box was always this small but the 90s are and will
        always be one of my favorites
      </CText>
      <Spacer h={16} />
      <Row fw={'wrap'}>
        {Array.from({length: 2}).map((_, index) => {
          return (
            <>
              <Image
                key={index.toString()}
                style={styles.image}
                source={require('../assets/common/img-product.png')}
              />
            </>
          );
        })}
      </Row>
      <Spacer h={4} />
      <CText>December 10, 2016</CText>
    </Section>
  );
};

export default Comment;

const styles = StyleSheet.create({
  image: {
    width: 72,
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: colors.light,
    resizeMode: 'contain',
    marginEnd: 12,
    marginBottom: 12,
  },
  description: {
    textAlign: 'justify',
  },
  avatar: {
    width: 48,
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 24,
    resizeMode: 'contain',
  },
});
