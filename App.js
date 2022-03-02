import {Provider} from 'react-redux';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './src/navigator';

function App() {
  return (
    <>
      <Navigator />
    </>
  );
}

export default App;
