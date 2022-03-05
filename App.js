import {Provider} from 'react-redux';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {NativeBaseProvider, Text, Box} from 'native-base';

import Navigator from './src/navigator';

function App() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
}

export default App;
