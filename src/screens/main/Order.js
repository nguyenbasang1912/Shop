import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CButton,
  CText,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {sizes} from '../../utils/styles/sizes';
import {colors, containerAttr} from '../../utils/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Order = ({navigation}) => {
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name={'left'} size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Order
          </CText>
        }
        style={containerAttr.bottomLine}
      />

      <Section p={sizes.xvi}>
        <Row>
          <Icon name="inbox" size={sizes.xviii} color={colors.primary} />
          <Spacer w={sizes.xvi} />
          <CText type="button" color={colors.dark}>
            Delivered
          </CText>
          <Spacer f={1} />
          <CText>1</CText>
        </Row>
      </Section>
      <Section p={sizes.xvi}>
        <Row>
          <Icon name="shoppingcart" size={sizes.xviii} color={colors.primary} />
          <Spacer w={sizes.xvi} />
          <CText type="button" color={colors.dark}>
            In process
          </CText>
          <Spacer f={1} />
          <CText>1</CText>
        </Row>
      </Section>
    </Wrapper>
  );
};

export default Order;

const styles = StyleSheet.create({});
