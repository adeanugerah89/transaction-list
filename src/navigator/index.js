import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Transactions from '../containers/Transactions';
import TransactionsDetail from '../containers/TransactionDetail';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TransactionsDetail" component={TransactionsDetail} />
    </Stack.Navigator>
  );
}

export default () => <AppStack />;
