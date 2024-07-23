import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
import {useSelector} from 'react-redux';

const Address = ({navigation}) => {
  const {address} = useSelector(state => state.user);

  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity>
        <Section style={styles.containerItem} p={sizes.xxiv}>
          <CText type="button" color={colors.dark}>
            {item.name || ''}
          </CText>
          <Spacer h={sizes.xiv} />
          <CText>{item.description || ''}</CText>
          <Spacer h={sizes.xiv} />
          <CText>{item.phone}</CText>
          <Spacer h={sizes.xiv} />
          <Row>
            <CButton
              wrapcontent
              style={styles.button}
              background={colors.primary}>
              <CText type="button">Edit</CText>
            </CButton>
            <Spacer w={sizes.xxiv} />
            <CButton wrapcontent resetpm>
              <Icon name={'delete'} size={sizes.xxiv} color={colors.grey} />
            </CButton>
          </Row>
        </Section>
      </TouchableOpacity>
    );
  }, []);

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
          <CButton wrapcontent resetpm>
            <Icon name="plus" size={sizes.xvi} color={colors.primary} />
          </CButton>
        }
        style={containerAttr.bottomLine}
      />
      <FlatList
        data={[
          {
            _id: 1,
            name: 'new address',
            description: 'New address',
            phone: '0889275378',
          },
          {
            _id: 2,
            name: 'new address',
            description: 'New address',
            phone: '0889275378',
          },
        ]}
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
