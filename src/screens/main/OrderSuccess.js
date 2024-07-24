import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CButton, CText, Row, Section, Spacer, Wrapper } from '../../components';
import { colors } from '../../utils/styles';
import { sizes } from '../../utils/styles/sizes';
import { stackName } from '../../navigator/routeName';

const OrderSuccess = ({navigation}) => {
  return (
    <Wrapper statusbar>
      <Row f={1}>
        <Section p={sizes.xvi} style={styles.center}>
          <Icon name="checkcircle" size={72} color={colors.primary} />
          <Spacer h={sizes.xvi} />
          <CText type="button" color={colors.dark} size={sizes.xxiv}>
            Success
          </CText>
          <Spacer h={sizes.viii} />
          <CText>thank you for shopping using lafyuu</CText>
          <Spacer h={sizes.xvi} />
          <CButton background={colors.primary} onPress={() => navigation.navigate(stackName.order)}>
            <CText type='button'>Back To Order</CText>
          </CButton>
        </Section>
      </Row>
    </Wrapper>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
