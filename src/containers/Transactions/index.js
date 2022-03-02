import React from 'react';
import {Text, View, Button} from 'react-native';

const Transactions = ({navigation}) => {
  return (
    <View>
      <Text>Transactions</Text>

      <Button
        onPress={() => navigation.navigate('TransactionsDetail')}
        title="halaman detail"
      />
    </View>
  );
};

export default Transactions;
