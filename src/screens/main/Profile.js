import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {profiles} from '../../configs/data/profile';
import {colors} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';

const Profile = ({navigation}) => {
  const renderProfile = ({id, icon, name, content}, handleBack) => {
    return (
      <CButton
        resetpm
        key={id}
        onPress={handleBack}
        style={{justifyContent: 'flex-start'}}>
        <Section p={sizes.xvi} w="100%">
          <Row justify={'space-between'}>
            <Row>
              <Icon name={icon} size={sizes.xviii} color={colors.primary} />
              <Spacer w={sizes.xvi} />
              <CText type="button" color={colors.dark}>
                {name}
              </CText>
            </Row>
            <Row>
              <CText>Sang</CText>
              <Spacer w={sizes.xvi} />
              <Icon name={'right'} size={sizes.xviii} color={colors.light} />
            </Row>
          </Row>
        </Section>
      </CButton>
    );
  };

  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <CText>
              <Icon name="left" size={sizes.xviii} color={colors.grey} />
            </CText>
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark} numLine={1}>
            Profile
          </CText>
        }
        style={styles.bottomLine}
      />

      <Section ph={sizes.xvi} pv={sizes.xxiv}>
        <Row>
          <CButton wrapcontent resetpm>
            <Image
              style={styles.avatar}
              source={require('../../assets/common/avatar.png')}
            />
          </CButton>
          <Spacer w={sizes.xvi} />
          <Section>
            <CText type="button" color={colors.dark}>
              James Lawson
            </CText>
            <CText>@derlaxy</CText>
          </Section>
        </Row>
      </Section>

      <Section style={styles.alignItem}>
        {profiles.map((item, index) => {
          return renderProfile(item, () => {
            console.log('click');
          });
        })}
      </Section>
    </Wrapper>
  );
};

export default Profile;

const styles = StyleSheet.create({
  alignItem: {
    alignItems: 'flex-start',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
