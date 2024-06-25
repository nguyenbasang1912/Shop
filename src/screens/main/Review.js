import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import ToolBar from '../../components/ToolBar';
import Icon from 'react-native-vector-icons/AntDesign';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import {sizes} from '../../utils/styles/sizes';
import {colors} from '../../utils/styles';
import Section from '../../components/Section';
import Row from '../../components/Row';
import Spacer from '../../components/Spacer';
import {comment} from '../../example/data/comment';
import Comment from '../../components/Comment';

const data = ['All reviews', 1, 2, 3, 4, 5];

const Review = ({navigation}) => {
  return (
    <Wrapper statusbar>
      <ToolBar
        leftComponent={
          <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
            <Icon name="left" size={sizes.xviii} color={colors.grey} />
          </CButton>
        }
        centerComponent={
          <CText type="button" size={sizes.xvi} color={colors.dark}>
            Review
          </CText>
        }
        style={styles.bottomLine}
      />
      <Section p={16}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <CButton resetpm wrapcontent>
                <Section style={[styles.box, styles.selectedBox]} key={index}>
                  <Row>
                    {index !== 0 && (
                      <Image
                        source={require('../../assets/common/star.png')}
                        style={styles.star}
                      />
                    )}
                    <CText type="button" color={colors.primary}>
                      {item}
                    </CText>
                  </Row>
                </Section>
              </CButton>
            );
          })}
        </ScrollView>
      </Section>

      <Spacer h={sizes.xx} />

      <FlatList
        data={comment}
        renderItem={() => <Comment />}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 16}}
        ItemSeparatorComponent={() => <Spacer h={24} />}
        showsVerticalScrollIndicator={false}
      />

      <Section p={16}>
        <CButton background={colors.primary}>
          <CText type="button">Write Review</CText>
        </CButton>
      </Section>
    </Wrapper>
  );
};

export default Review;

const styles = StyleSheet.create({
  star: {
    width: 18,
    height: 18,
    tintColor: colors.yellow,
    marginRight: 8,
    resizeMode: 'contain',
  },
  selectedBox: {
    backgroundColor: 'rgba(64, 191, 255, 0.1)',
    borderWidth: 0,
  },
  box: {
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
    marginEnd: 12,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
