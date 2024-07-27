import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {colors, typography} from '../utils/styles';
import {sizes} from '../utils/styles/sizes';
import CText from './CText';
import Section from './Section';

const CDropdown = ({data, onChange, ...props}) => {
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
