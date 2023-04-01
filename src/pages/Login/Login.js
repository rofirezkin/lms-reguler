import {KeyboardAvoidingView, StyleSheet, Platform, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  BgBottom,
  BgCircleCenter,
  BgCircleTop,
  BgRing,
} from '../../assets/background';
import {ICFingerPrint, SmallLogo} from '../../assets/icon';
import {Button, FingerPrint, Gap, TextInput} from '../../components';
import {
  BgCircle1,
  BgCircle2,
  BgCircle3,
  BgGradient,
  BgRing1,
  ButtonFingerprint,
  ButtonLogin,
  Card,
  Header,
  Icon,
  Link,
  LoginCard,
  Title,
} from './LoginStyles';
import {ScrollView} from '../../utils/theme/styled';
import {SafeArea} from '../../utils/theme/area';
import TouchID from 'react-native-touch-id';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/action/authAction';
import {getData} from '../../utils/storage';
import {useEffect} from 'react';
import {showMessage} from '../../utils/showMessage';
import useForm from '../../utils/useForm';
import {setLoading} from '../../redux/action';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const [user, setUser] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      console.log('data', res);
      setUser(res);
    });
  }, []);

  const pressHandler = () => {
    if (user?.biometric === true) {
      TouchID.isSupported(optionalConfigObject)
        .then(biometryType => {
          // Success code
          console.log('biometryType', biometryType);

          if (biometryType === true) {
            TouchID.authenticate(
              'Untuk login ke Aplikasi Elearning',
              optionalConfigObject,
            )
              .then(success => {
                getData('user').then(res => {
                  dispatch(signIn(user.email, user.password));
                });
              })
              .catch(error => {
                Alert.alert('Autentikasi batal');
              });
          } else if (biometryType === 'TouchID') {
            TouchID.authenticate(
              'to demo this react-native component',
              optionalConfigObject,
            )
              .then(success => {
                Alert.alert('Authenticated Successfully');
              })
              .catch(error => {
                Alert.alert('Authentication Failed');
              });
          } else {
            console.log('Face id is supported.');
          }
        })
        .catch(error => {
          // Failure code
          Alert.alert(
            `Scan biometrik tidak bisa dilakukan karena touch id belum terdaftar di sistem`,
          );
          console.log(error);
        });
    } else {
      showMessage(
        'dibutuhkan login terlebih dahulu untuk menggunakan biometric',
      );
    }
  };

  const onSubmit = () => {
    dispatch(setLoading(true));
    dispatch(signIn(form));
  };

  return (
    <KeyboardAvoidingView
      style={styles.avoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios' ? true : false}>
      <SafeArea>
        <ScrollView>
          <BgCircle1 source={BgBottom} />
          <BgGradient>
            <Icon>
              <SmallLogo />
            </Icon>
            <BgCircle2 source={BgCircleTop} />
            <BgCircle3 source={BgCircleCenter} />
            <BgRing1 source={BgRing} />
          </BgGradient>
          <LoginCard>
            <Card>
              <Header> Login</Header>
              <Gap height={30} />
              <Title>Email</Title>
              <TextInput
                value={form.email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={value => setForm('username', value)}
                placeholder="username@gmail.com"
              />
              <Gap height={25} />
              <Title>Password</Title>
              <TextInput
                icon
                value={form.password}
                onChangeText={value => setForm('password', value)}
                secureTextEntry
                placeholder="*********"
              />
              <Link>Lupa Password ?</Link>
              <Gap height={45} />
              <ButtonLogin>
                <Button onPress={onSubmit} />
                <ButtonFingerprint onPress={pressHandler}>
                  <ICFingerPrint />
                </ButtonFingerprint>
              </ButtonLogin>
            </Card>
            {/* <FingerPrint
              responseHandling={res => setShowModalFingerPrint(res)}
              showModal={showModalFingerPrint}
            /> */}
          </LoginCard>
        </ScrollView>
      </SafeArea>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  avoidingView: {
    flex: 1,
  },
});
