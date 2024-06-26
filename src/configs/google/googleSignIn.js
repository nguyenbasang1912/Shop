import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEB_CLIENT_ID} from '@env';
import {Alert} from 'react-native';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
});

const GoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('User info', {userInfo});
    return userInfo;
  } catch (error) {
    console.log(error.code);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      Alert.alert('User cancelled the login flow !');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      Alert.alert('Signin in progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('Google play services not available or outdated !');
      // play services not available or outdated
    } else {
      console.log(error);
    }
  }
};

const GoogleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (e) {
    console.log('error google: ', e);
  }
};

export {GoogleLogin, GoogleLogout};
