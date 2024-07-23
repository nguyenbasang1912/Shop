import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
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
import axiosInstance from '../../configs/axiosInstance';
import {stackName} from '../../navigator/routeName';

const Explore = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const [input, setInput] = useState('');
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = {};
      try {
        const parentCategories = await axiosInstance.get(
          '/api/category/parent-categories',
        );

        console.log(parentCategories);
        if (parentCategories?.data?.length > 0) {
          for (const category of parentCategories.data) {
            const childCategories = await axiosInstance.get(
              `/api/category/child-categories/${category._id}`,
            );
            if (childCategories?.data?.length > 0) {
              categories[category._id] = {
                category_name: category.category_name,
                children: childCategories.data,
              };
            }
          }
        }

        setCategories(categories);
      } catch (error) {
        console.log('err: ', error);
      }
    };

    fetchCategories();
  }, []);

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
                  navigation.navigate(stackName.search, {keyword: input});
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
            {categories &&
              Object.keys(categories).map(category => {
                return (
                  <View key={category}>
                    <Title title={categories[category].category_name || ''} />
                    <Spacer h={12} />
                    <Row style={styles.gap} fw={'wrap'}>
                      {categories[category].children.map(child => {
                        return (
                          <CategoryItem
                            onClick={() => {
                              navigation.navigate(stackName.seeMore, {
                                categoryId: child._id,
                                title: child.category_name,
                              });
                            }}
                            key={child._id}
                            source={{uri: child.category_thumbnail.url}}
                            title={child.category_name || ''}
                            size={WINDOW_WIDTH / 4 - 16 - 10.5}
                          />
                        );
                      })}
                    </Row>
                    <Spacer h={sizes.xxiv} />
                  </View>
                );
              })}
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
