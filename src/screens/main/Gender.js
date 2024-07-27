import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CDropdown,
  CText,
  Section,
  Spacer,
  Title,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import {data} from '../../example/data/slide';

const genders = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'},
];

const Gender = ({navigation}) => {
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Gender
          </CText>
        }
        style={containerAttr.bottomLine}
      />
      <Section p={sizes.xvi}>
        <Title title={'Choose Gender'} sizeTitle={sizes.xvi} />
        <Spacer h={sizes.xii} />
        <CDropdown data={genders} />
      </Section>
      <Spacer f={1} />
      <Section p={sizes.xvi}>
        <CButton background={colors.primary}>
          <CText type="button">Save</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default Gender;

const styles = StyleSheet.create({});
