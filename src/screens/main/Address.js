import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {stackName} from '../../navigator/routeName';
import {deleteAddress} from '../../store/thunk/user';
import {selectAddress} from '../../store/slices/user';

const Address = ({navigation, route}) => {
  const {
    userInfo: {address},
    status,
  } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            dispatch(selectAddress(item._id));
            if (route?.params?.type === 'pick') {
              navigation.goBack();
            }
          }}>
          <Section
            style={[
              styles.containerItem,
              status.selectedAddress?._id === item?._id &&
                styles.containerItemActive,
            ]}
            p={sizes.xxiv}>
            <CText type="button" color={colors.dark}>
              {item.name || ''}
            </CText>
            <Spacer h={sizes.xiv} />
            <CText>{item.address || ''}</CText>
            <Spacer h={sizes.xiv} />
            <CText>{item.phone || ''}</CText>
            <Spacer h={sizes.xiv} />
            <Row>
              <CButton
                onPress={() =>
                  navigation.navigate(stackName.newAddress, {
                    type: 'edit',
                    id: item._id,
                  })
                }
                wrapcontent
                style={styles.button}
                background={colors.primary}>
                <CText type="button">Edit</CText>
              </CButton>
              <Spacer w={sizes.xxiv} />
              <CButton
                wrapcontent
                resetpm
                onPress={() => dispatch(deleteAddress(item._id))}>
                <Icon name={'delete'} size={sizes.xxiv} color={colors.grey} />
              </CButton>
            </Row>
          </Section>
        </TouchableOpacity>
      );
    },
    [status.selectedAddress],
  );

  return (
    <Wrapper statusbar>
      <ToolBar
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Address
          </CText>
        }
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        rightComponent={
          <CButton
            wrapcontent
            resetpm
            onPress={() => navigation.navigate(stackName.newAddress)}>
            <Icon name="plus" size={sizes.xvi} color={colors.primary} />
          </CButton>
        }
        style={containerAttr.bottomLine}
      />
      <FlatList
        data={address}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        style={styles.flatlistStyle}
        ItemSeparatorComponent={<Spacer h={sizes.xvi} />}
        ListFooterComponent={<Spacer h={sizes.xvi * 2} />}
      />
    </Wrapper>
  );
};

export default Address;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: sizes.xxiv,
    paddingVertical: sizes.xiv,
  },
  flatlistStyle: {
    padding: 16,
  },
  containerItem: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
  },
  containerItemActive: {
    borderColor: colors.primary,
  },
});
