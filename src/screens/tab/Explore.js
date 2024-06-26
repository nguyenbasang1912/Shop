import React, {useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconOcticons from 'react-native-vector-icons/Octicons';
import {
  CButton,
  CategoryItem,
  Input,
  Row,
  Section,
  Spacer,
  Title,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {WINDOW_WIDTH, sizes} from '../../utils/styles/sizes';

const Explore = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const [input, setInput] = useState('');

  return (
    <ScrollView
      style={containerAttr.container}
      showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper statusbar>
          <Section p={16} style={styles.section}>
            <Row>
              <Input
                flex={1}
                value={input}
                onChange={text => setInput(text)}
                placeholder="Search input"
                leftIcon="search"
                onBlurInput={() => {
                  setIsFocused(false);
                }}
                onFocusInput={() => {
                  setIsFocused(true);
                  setIsSearchComplete(false);
                }}
                onSubmitEditing={() => {
                  setIsSearchComplete(true);
                  setIsFocused(false);
                }}
                handleRightIcon={() => setInput('')}
                showRightIcon={input.length > 0}
              />

              {isSearchComplete && !isFocused && input.length > 0 ? (
                <Row>
                  <Spacer w={16} />
                  <CButton wrapcontent resetpm>
                    <IconOcticons
                      name="sort-desc"
                      size={sizes.xviii}
                      color={colors.grey}
                    />
                  </CButton>

                  <Spacer w={16} />
                  <CButton wrapcontent resetpm>
                    <Icon
                      name="filter"
                      size={sizes.xviii}
                      color={colors.grey}
                    />
                  </CButton>
                </Row>
              ) : (
                <Row>
                  <Spacer w={28} />
                  <CButton wrapcontent resetpm>
                    <IconFeather
                      name="mic"
                      size={sizes.xviii}
                      color={colors.grey}
                    />
                  </CButton>
                </Row>
              )}
            </Row>
          </Section>

          <Section p={16}>
            <Title title={'Man Fashion'} />
            <Spacer h={12} />
            <Row style={styles.gap} fw={'wrap'}>
              {Array.from({length: 10}).map((_, i) => (
                <CategoryItem
                  key={i}
                  source={require('../../assets/common/icon.png')}
                  title={`Category ${i}`}
                  size={WINDOW_WIDTH / 4 - 16 - 10.5}
                />
              ))}
            </Row>
            <Spacer h={24} />
            <Title title={'Woman Fashion'} />
            <Spacer h={12} />
            <Row style={styles.gap}>
              <Row style={styles.gap} fw={'wrap'}>
                {Array.from({length: 10}).map((_, i) => (
                  <CategoryItem
                    key={i}
                    source={require('../../assets/common/icon.png')}
                    title={`Category ${i}`}
                    size={WINDOW_WIDTH / 4 - 16 - 10.5}
                  />
                ))}
              </Row>
            </Row>
          </Section>
        </Wrapper>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  gap: {
    rowGap: 16,
    columnGap: 21,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
