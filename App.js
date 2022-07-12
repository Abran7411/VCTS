import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackNavigator from './navigation/TrackNavigator';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { usePreventScreenCapture } from 'expo-screen-capture';
import LoginScreens from './screens/LoginScreens'
import SignUp from './screens/SignUp';
// import Router from './components/Router'
import RegisterForm from './components/RegisterForm'

enableScreens();

const fetchFonts = () => {
    return Font.loadAsync({
      'news-circle': require('./assets/fonts/NewsCycle-Bold.ttf'),
      'audiowide': require('./assets/fonts/Audiowide-Regular.ttf'),
      'bangers': require('./assets/fonts/Bangers-Regular.ttf'),
      'Now-Bold': require('./assets/fonts/Now-Bold.otf'),
    });
};

export default function App() {
  usePreventScreenCapture();
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return( 
      <AppLoading
      startAsync = { fetchFonts }
      onFinish = {
        () => setFontLoaded(true)
      }
      onError = {err => console.log(err) }
      />
    );
  }
  return (
    <TrackNavigator/>
    
    // <LoginScreens/>
      // <SignUp/> 
    // <StatusBar/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
