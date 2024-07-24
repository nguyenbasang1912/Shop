import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import {
  CButton,
  CText,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import { colors } from '../../utils/styles';
import { sizes } from '../../utils/styles/sizes';
import { stackName } from '../../navigator/routeName';

const Profile = ({navigation}) => {
  const user = useSelector(state => state.user.userInfo);

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
              source={require('../../assets/common/avatar.jpg')}
            />
          </CButton>
          <Spacer w={sizes.xvi} />
          <Section>
            <CText type="button" color={colors.dark}>
              {user.name || 'Unset'}
            </CText>
            <CText>@{user.name}</CText>
          </Section>
        </Row>
      </Section>

      <Section style={styles.alignItem}>
        <CButton
          resetpm
          onPress={() => {navigation.navigate(stackName.gender)}}
          style={{justifyContent: 'flex-start'}}>
          <Section p={sizes.xvi} w="100%">
            <Row justify={'space-between'}>
              <Row>
                <Icon
                  name={'woman'}
                  size={sizes.xviii}
                  color={colors.primary}
                />
                <Spacer w={sizes.xvi} />
                <CText type="button" color={colors.dark}>
                  Gender
                </CText>
              </Row>
              <Row>
                <CText>{user.gender}</CText>
                <Spacer w={sizes.xvi} />
                <Icon name={'right'} size={sizes.xviii} color={colors.light} />
              </Row>
            </Row>
          </Section>
        </CButton>
        <CButton
          resetpm
          onPress={() => {navigation.navigate(stackName.changeEmail)}}
          style={{justifyContent: 'flex-start'}}>
          <Section p={sizes.xvi} w="100%">
            <Row justify={'space-between'}>
              <Row>
                <Icon name={'mail'} size={sizes.xviii} color={colors.primary} />
                <Spacer w={sizes.xvi} />
                <CText type="button" color={colors.dark}>
                  Email
                </CText>
              </Row>
              <Row>
                <CText>{user.email}</CText>
                <Spacer w={sizes.xvi} />
                <Icon name={'right'} size={sizes.xviii} color={colors.light} />
              </Row>
            </Row>
          </Section>
        </CButton>
        <CButton
          resetpm
          onPress={() => {navigation.navigate(stackName.phone)}}
          style={{justifyContent: 'flex-start'}}>
          <Section p={sizes.xvi} w="100%">
            <Row justify={'space-between'}>
              <Row>
                <Icon
                  name={'mobile1'}
                  size={sizes.xviii}
                  color={colors.primary}
                />
                <Spacer w={sizes.xvi} />
                <CText type="button" color={colors.dark}>
                  Phone Number
                </CText>
              </Row>
              <Row>
                <CText>{user.phone || "Don't set"}</CText>
                <Spacer w={sizes.xvi} />
                <Icon name={'right'} size={sizes.xviii} color={colors.light} />
              </Row>
            </Row>
          </Section>
        </CButton>
        <CButton
          resetpm
          onPress={() => {navigation.navigate(stackName.changePass)}}
          style={{justifyContent: 'flex-start'}}>
          <Section p={sizes.xvi} w="100%">
            <Row justify={'space-between'}>
              <Row>
                <Icon
                  name={'lock'}
                  size={sizes.xviii}
                  color={colors.primary}
                />
                <Spacer w={sizes.xvi} />
                <CText type="button" color={colors.dark}>
                  Change password
                </CText>
              </Row>
              <Row>
                <CText>{'*******'}</CText>
                <Spacer w={sizes.xvi} />
                <Icon name={'right'} size={sizes.xviii} color={colors.light} />
              </Row>
            </Row>
          </Section>
        </CButton>
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
