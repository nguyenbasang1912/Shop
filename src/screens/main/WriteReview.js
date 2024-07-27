import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  CButton,
  CText,
  RatingBar,
  Row,
  Section,
  Spacer,
  Title,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors, containerAttr} from '../../utils/styles';
import {sizes} from '../../utils/styles/sizes';
import axiosInstance from '../../configs/axiosInstance';
import {useDispatch} from 'react-redux';
import {turnOffComment} from '../../store/slices/order';

const WriteReview = ({navigation, route}) => {
  const {productId, orderId} = route?.params || {};
  const [currentRate, setCurrentRate] = useState(0);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const pickerImage = async () => {
    const imgs = await launchImageLibrary({
      maxWidth: 72,
      maxHeight: 72,
      mediaType: 'photo',
      selectionLimit: 0,
    });

    setImages(imgs.assets || []);
  };

  const submitComment = async () => {
    const body = new FormData();

    for (const image of images) {
      body.append('imgs', {
        name: image.fileName,
        type: image.type,
        uri: image.uri,
      });
    }

    body.append('productId', productId);
    body.append('orderId', orderId);
    body.append('rating', currentRate);
    body.append('content', content);

    try {
      setLoading(true);
      const response = await axiosInstance.post('/api/comments', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 20000,
      });

      ToastAndroid.show('Comment success', 1000);
      navigation.goBack();
      setImages([]);
      setCurrentRate(0);
      setError(false);
      setContent('');
      setLoading(false);
      dispatch(turnOffComment());
      return;
    } catch (error) {
      console.log('error', error);
      setLoading(false);
      return setError(true);
    }
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
              value={content}
              onChangeText={setContent}
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
            <CButton
              background={colors.primary}
              onPress={() => {
                if (loading) return;
                submitComment();
              }}>
              {loading ? (
                <ActivityIndicator size={sizes.xvi} color={colors.white} />
              ) : (
                <CText type="button">Send</CText>
              )}
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
