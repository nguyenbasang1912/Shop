import React, {useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {
  CButton,
  CText,
  Row,
  Section,
  Spacer,
  ToolBar,
  Wrapper,
} from '../../components';
import {colors} from '../../utils/styles';
import {sizes, WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/styles/sizes';
import {stackName} from '../../navigator/routeName';
import {launchImageLibrary} from 'react-native-image-picker';

const Profile = ({navigation}) => {
  const [isPreview, setIsPreview] = useState(false);
  const user = useSelector(state => state.user.userInfo);
  const [image, setImage] = useState(null);

  const pickerImage = async () => {
    try {
      const imgs = await launchImageLibrary({
        maxWidth: 72,
        maxHeight: 72,
        mediaType: 'photo',
        selectionLimit: 1,
      });

      setImage(imgs?.assets?.[0] || {});
    } catch {
      setImage({});
    }
  };

  return (
    <>
      <Wrapper statusbar>
        <ToolBar
          leftComponent={
            <CButton wrapcontent resetpm onPress={() => navigation.goBack()}>
              <CText>
                <Icon name="left" size={sizes.xviii} color={colors.grey} />
              </CText>
            </CButton>
          }
          centerComponent={
            <CText
              type="button"
              size={sizes.xvi}
              color={colors.dark}
              numLine={1}>
              Profile
            </CText>
          }
          style={styles.bottomLine}
        />

        <Section ph={sizes.xvi} pv={sizes.xxiv}>
          <Row>
            <CButton
              wrapcontent
              resetpm
              onPress={() => setIsPreview(!isPreview)}>
              <Image
                style={styles.avatar}
                source={require('../../assets/common/avatar.jpg')}
              />
            </CButton>
            <Spacer w={sizes.xvi} />
            <Section>
              <CText type="button" color={colors.dark}>
                {user.name || 'Unset'}
              </CText>
              <CText>@{user.name}</CText>
            </Section>
          </Row>
        </Section>

        <Section style={styles.alignItem}>
          <CButton
            resetpm
            onPress={() => {
              navigation.navigate(stackName.gender);
            }}
            style={{justifyContent: 'flex-start'}}>
            <Section p={sizes.xvi} w="100%">
              <Row justify={'space-between'}>
                <Row>
                  <Icon
                    name={'woman'}
                    size={sizes.xviii}
                    color={colors.primary}
                  />
                  <Spacer w={sizes.xvi} />
                  <CText type="button" color={colors.dark}>
                    Gender
                  </CText>
                </Row>
                <Row>
                  <CText>{user.gender}</CText>
                  <Spacer w={sizes.xvi} />
                  <Icon
                    name={'right'}
                    size={sizes.xviii}
                    color={colors.light}
                  />
                </Row>
              </Row>
            </Section>
          </CButton>
          <CButton
            resetpm
            onPress={() => {
              navigation.navigate(stackName.changeEmail);
            }}
            style={{justifyContent: 'flex-start'}}>
            <Section p={sizes.xvi} w="100%">
              <Row justify={'space-between'}>
                <Row>
                  <Icon
                    name={'mail'}
                    size={sizes.xviii}
                    color={colors.primary}
                  />
                  <Spacer w={sizes.xvi} />
                  <CText type="button" color={colors.dark}>
                    Email
                  </CText>
                </Row>
                <Row>
                  <CText>{user.email}</CText>
                  <Spacer w={sizes.xvi} />
                  <Icon
                    name={'right'}
                    size={sizes.xviii}
                    color={colors.light}
                  />
                </Row>
              </Row>
            </Section>
          </CButton>
          <CButton
            resetpm
            onPress={() => {
              navigation.navigate(stackName.phone);
            }}
            style={{justifyContent: 'flex-start'}}>
            <Section p={sizes.xvi} w="100%">
              <Row justify={'space-between'}>
                <Row>
                  <Icon
                    name={'mobile1'}
                    size={sizes.xviii}
                    color={colors.primary}
                  />
                  <Spacer w={sizes.xvi} />
                  <CText type="button" color={colors.dark}>
                    Phone Number
                  </CText>
                </Row>
                <Row>
                  <CText>{user.phone || "Don't set"}</CText>
                  <Spacer w={sizes.xvi} />
                  <Icon
                    name={'right'}
                    size={sizes.xviii}
                    color={colors.light}
                  />
                </Row>
              </Row>
            </Section>
          </CButton>
          <CButton
            resetpm
            onPress={() => {
              navigation.navigate(stackName.changePass);
            }}
            style={{justifyContent: 'flex-start'}}>
            <Section p={sizes.xvi} w="100%">
              <Row justify={'space-between'}>
                <Row>
                  <Icon
                    name={'lock'}
                    size={sizes.xviii}
                    color={colors.primary}
                  />
                  <Spacer w={sizes.xvi} />
                  <CText type="button" color={colors.dark}>
                    Change password
                  </CText>
                </Row>
                <Row>
                  <CText>{'*******'}</CText>
                  <Spacer w={sizes.xvi} />
                  <Icon
                    name={'right'}
                    size={sizes.xviii}
                    color={colors.light}
                  />
                </Row>
              </Row>
            </Section>
          </CButton>
        </Section>
      </Wrapper>
      {isPreview && (
        <TouchableOpacity
          activeOpacity={0}
          style={styles.bottomSheet}
          onPress={() => {
            setIsPreview(false);
            setImage({});
          }}>
          <Spacer h={1} />

          <Section background={colors.transparent}>
            <TouchableOpacity onPress={() => pickerImage()}>
              <Image
                source={
                  image?.uri
                    ? {uri: image.uri}
                    : require('../../assets/common/avatar.jpg')
                }
                style={styles.preview}
              />
            </TouchableOpacity>
          </Section>

          <Section>
            <CButton background={colors.dark}>
              <CText type="button">Change image</CText>
            </CButton>
          </Section>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  preview: {
    width: WINDOW_WIDTH - 16 * 2 - 100,
    height: 'auto',
    aspectRatio: 1,
    borderRadius: WINDOW_WIDTH / 2 - 16 * 2 - 100,
    resizeMode: 'contain',
    backgroundColor: colors.grey,
    alignSelf: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: 'rgba(64, 191, 255, 0.5)',
    justifyContent: 'space-between',
    padding: 16,
  },
  alignItem: {
    alignItems: 'flex-start',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
