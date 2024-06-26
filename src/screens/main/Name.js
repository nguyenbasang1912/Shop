import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  Input,
  Row,
  Section,
  Spacer,
  Title,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';

const Name = ({navigation}) => {
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Name
          </CText>
        }
        style={styles.bottomLine}
      />
      <Section f={1} p={sizes.xvi}>
        <Section>
          <Title title={'First Name'} />
          <Spacer h={sizes.xii} />
          <Row>
            <Input placeholder={'Enter First Name'} />
          </Row>
        </Section>
        <Spacer h={sizes.xxiv} />
        <Section>
          <Title title={'Last Name'} />
          <Spacer h={sizes.xii} />
          <Row>
            <Input placeholder={'Enter Last Name'} />
          </Row>
        </Section>
        <Spacer f={1} />
        <CButton background={colors.primary}>
          <CText type="button">Save</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default Name;

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
