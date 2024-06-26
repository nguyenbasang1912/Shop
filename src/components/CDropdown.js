import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Section from './Section';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, typography} from '../utils/styles';
import CText from './CText';
import {sizes} from '../utils/styles/sizes';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const CDropdown = ({datas, onChange, ...props}) => {
  const [value, setValue] = useState(data[0].value);
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = useCallback((item, selected) => {
    return (
      <Section ph={sizes.xvi} pv={sizes.xiii}>
        <CText type="button" color={selected ? colors.primary : colors.grey}>
          {item.label}
        </CText>
      </Section>
    );
  }, []);

  return (
    <Section>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: colors.primary}]}
        placeholderStyle={typography.commonText}
        selectedTextStyle={[typography.buttonText, styles.grey]}
        inputSearchStyle={typography.buttonText}
        containerStyle={styles.containerStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        renderItem={renderItem}
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        showsVerticalScrollIndicator={false}
        {...props}
      />
    </Section>
  );
};

export default CDropdown;

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderColor: colors.light,
  },
  grey: {
    color: colors.grey,
  },
});
