import {Provider} from 'react-redux';
import React from 'react';
import Main from './Main';
import {store} from './src/configurations/Configs_middleware';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
