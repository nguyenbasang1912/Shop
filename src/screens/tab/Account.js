import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {
  CButton,
  CText,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {accounts} from '../../configs/data/profile';
import {navigationRef} from '../../navigator/RootNavigation';
import {stackName} from '../../navigator/routeName';
import {logoutUser} from '../../store/thunk/auth';
import {colors} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (!status.isLoggedIn) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{name: stackName.login}],
      });
    }
  }, [status.isLoggedIn]);

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
          <CButton
            wrapcontent
            key={item.id}
            resetpm
            style={styles.button}
            onPress={() => {
              if (item.name !== accounts[3].name) {
                navigation.navigate(stackName[item.name.toLowerCase()]);
                return;
              }
              handleLogout();
            }}>
            <Section p={sizes.xvi}>
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
