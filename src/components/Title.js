import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Row from './Row';
import CText from './CText';
import Spacer from './Spacer';
import {colors} from '../utils/styles';
import CButton from './CButton';

const Title = ({
  title,
  more,
  onClickMore,
  titleColor,
  moreColor,
  sizeTitle,
  sizeMore,
}) => {
  return (
    <Row justify={'space-between'}>
      <CText type="button" color={titleColor || colors.dark} size={sizeTitle}>
        {title}
      </CText>
      {more ? (
        <CButton onPress={onClickMore} wrapcontent resetpm>
          <CText
            type="button"
            color={moreColor || colors.primary}
            size={sizeMore}>
            {more}
          </CText>
        </CButton>
      ) : (
        <Spacer />
      )}
    </Row>
  );
};

export default Title;
