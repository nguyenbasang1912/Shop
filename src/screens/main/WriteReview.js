import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Wrapper from '../../components/Wrapper';
import ToolBar from '../../components/ToolBar';
import CText from '../../components/CText';
import Icon from 'react-native-vector-icons/AntDesign';
import {sizes} from '../../utils/styles/sizes';
import CButton from '../../components/CButton';
import {colors, containerAttr} from '../../utils/styles';
import Section from '../../components/Section';
import Row from '../../components/Row';
import RatingBar from '../../components/RatingBar';
import Spacer from '../../components/Spacer';
import Title from '../../components/Title';
import Input from '../../components/Input';
import {launchImageLibrary} from 'react-native-image-picker';

const WriteReview = ({navigation}) => {
  const [currentRate, setCurrentRate] = useState(0);
  const [images, setImages] = useState([]);

  console.log(images);

  const pickerImage = async () => {
    const imgs = await launchImageLibrary({
      maxWidth: 72,
      maxHeight: 72,
      mediaType: 'photo',
      selectionLimit: 0,
    });

    // console.log(imgs);
    // return;

    setImages(imgs.assets || []);
  };

  return (
    <ScrollView style={containerAttr.container}>
      <Wrapper statusbar>
        <ToolBar
          leftComponent={
            <CButton resetpm wrapcontent onPress={() => navigation.goBack()}>
              <Icon name="left" size={sizes.xviii} color={colors.grey} />
            </CButton>
          }
          centerComponent={
            <CText type="button" color={colors.dark} size={sizes.xvi}>
              Write Review
            </CText>
          }
          style={styles.bottomLine}
        />

        <Section p={sizes.xvi}>
          <Section>
            <CText type="button" size={sizes.xiv} color={colors.dark}>
              Please write Overall level of satisfaction with your shipping /
              Delivery Service
            </CText>

            <Spacer h={sizes.xvi} />
            <Row>
              <RatingBar
                rate={currentRate}
                size={sizes.xxxii}
                spacing={sizes.xii}
                onChangeRate={rate => {
                  setCurrentRate(rate);
                }}
              />
              <Spacer w={sizes.xxvi} />
              <CText
                type="button"
                color={colors.grey}>{`${currentRate}/5`}</CText>
            </Row>
          </Section>

          <Spacer h={sizes.xvi} />
          <Section>
            <Title title={'Write Your Review'} />
            <Spacer h={sizes.xii} />
            <TextInput
              placeholder="Write your review here"
              style={styles.textField}
              multiline={true}
              numberOfLines={6}
              cursorColor={colors.primary}
            />
          </Section>

          <Spacer h={sizes.xxiv} />
          <Section>
            <Title title={'Add Photo'} />
            <Spacer h={sizes.xii} />
            <Row fw={'wrap'} style={styles.gap}>
              {images.length > 0 &&
                images.map((image, index) => {
                  return (
                    <Image
                      key={index.toString()}
                      style={styles.image}
                      source={{uri: image?.uri}}
                    />
                  );
                })}
              <CButton
                wrapcontent
                resetpm
                style={styles.addButton}
                onPress={() => pickerImage()}>
                <Icon name="plus" size={sizes.xxiv} color={colors.grey} />
              </CButton>
            </Row>
            <Spacer h={sizes.xx} />
            <CButton background={colors.primary}>
              <CText type="button">Send</CText>
            </CButton>
          </Section>
        </Section>
      </Wrapper>
    </ScrollView>
  );
};

export default WriteReview;

const styles = StyleSheet.create({
  gap: {
    gap: 12,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 5,
  },
  addButton: {
    padding: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.light,
  },
  textField: {
    width: '100%',
    textAlignVertical: 'top',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.light,
  },
  bottomLine: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
});
