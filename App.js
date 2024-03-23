// Arquivo App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Step1Screen from './screens/onboard/step_1';
import { name as appName } from './app.json';
import { getApps, initializeApp } from '@react-native-firebase/app';
import { AppRegistry } from 'react-native';
import IntroScreen from './screens/intro';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBSUe2EC6N8YVYlS_waHEjj5HGkCLIlR84',
//   authDomain: 'apren-dev-fdb98-default-rtdb.firebaseio.com',
//   databaseURL: 'https://apren-dev-fdb98-default-rtdb.firebaseio.com',
//   storageBucket: 'apren-dev-fdb98.appspot.com',
//   projectId: 'apren-dev-fdb98',
//   messagingSenderId: '550221477766',
//   appId: '1:550221477766:android:49aa69675c09ce6cab5e07',
// };

// if (!getApps().length) {
//   const app = initializeApp(firebaseConfig);
// }

AppRegistry.registerComponent(appName, () => App);
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }}
        />
        <Stack.Screen name="Step1Onboard" component={Step1Screen} options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
