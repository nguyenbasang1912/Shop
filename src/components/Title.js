import React from 'react';
import {CButton, CText, Row, Spacer} from '.';
import {colors} from '../utils/styles';

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
