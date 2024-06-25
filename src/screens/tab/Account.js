import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import ToolBar from '../../components/ToolBar';
import CText from '../../components/CText';
import {sizes} from '../../utils/styles/sizes';
import {colors} from '../../utils/styles';
import {accounts} from '../../configs/data/profile';
import Row from '../../components/Row';
import Icon from 'react-native-vector-icons/AntDesign';
import Section from '../../components/Section';
import Spacer from '../../components/Spacer';
import CButton from '../../components/CButton';

const Account = () => {
  return (
    <Wrapper statusbar>
      <ToolBar
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Account
          </CText>
        }
        style={styles.bottomLine}
      />
      {accounts.map((item, index) => {
        return (
          <CButton wrapcontent resetpm style={styles.button}>
            <Section key={item.id} p={sizes.xvi}>
              <Row>
                <Icon
                  name={item.icon}
                  size={sizes.xviii}
                  color={colors.primary}
                />
                <Spacer w={sizes.xvi} />
                <CText type="button" color={colors.dark}>
                  {item.name}
                </CText>
              </Row>
            </Section>
          </CButton>
        );
      })}
    </Wrapper>
  );
};

export default Account;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-start',
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
