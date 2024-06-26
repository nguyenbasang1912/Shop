import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import {colors, containerAttr} from '../../utils/styles';
import ToolBar from '../../components/ToolBar';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import Icon from 'react-native-vector-icons/AntDesign';
import {sizes} from '../../utils/styles/sizes';
import Section from '../../components/Section';
import Title from '../../components/Title';
import CDropdown from '../../components/CDropdown';
import Spacer from '../../components/Spacer';

const genders = ['Male', 'Female', 'Other'];

const Gender = () => {
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
            Gender
          </CText>
        }
        style={containerAttr.bottomLine}
      />
      <Section p={sizes.xvi}>
        <Title title={'Choose Gender'} sizeTitle={sizes.xvi} />
        <Spacer h={sizes.xii} />
        <CDropdown />
      </Section>
    </Wrapper>
  );
};

export default Gender;

const styles = StyleSheet.create({});
