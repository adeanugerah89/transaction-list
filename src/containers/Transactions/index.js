import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Dimensions, FlatList, ActivityIndicator} from 'react-native';
import {VStack, Input, Text, Heading} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardComponent from '../../components/CardComponent';

import {fetchTransaction} from './_Actions';

const {height, width} = Dimensions.get('window');

function SearchBar() {
  return (
    <VStack my="4" space={5} w="100%">
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Material</Heading>
        <Input
          placeholder="Cari nama, bank atau nominal"
          width="100%"
          borderRadius="5"
          backgroundColor={'#FFFFFF'}
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <FontAwesome5
              name={'search'}
              size={18}
              color={'grey'}
              style={{padding: 5}}
            />
          }
          InputRightElement={
            <>
              <Text style={{color: '#F09476'}}>URUTKAN</Text>
              <FontAwesome5
                name={'angle-down'}
                size={18}
                color={'grey'}
                style={{padding: 10, color: '#F09476'}}
              />
            </>
          }
        />
      </VStack>
    </VStack>
  );
}

const Transactions = ({navigation}) => {
  const [transactions, setTransactions] = useState([
    {
      account_number: '5911942527',
      amount: 3876959,
      beneficiary_bank: 'muamalat',
      beneficiary_name: 'Jethro Cox',
      completed_at: '2022-03-05 23:36:48',
      created_at: '2022-03-05 23:36:48',
      fee: 0,
      id: 'FT54731',
      remark: 'sample remark',
      sender_bank: 'bni',
      status: 'SUCCESS',
      unique_code: 704,
    },
    {
      account_number: '3601053874',
      amount: 3347490,
      beneficiary_bank: 'bsm',
      beneficiary_name: 'Shanice Harwood',
      completed_at: '2022-03-05 23:36:48',
      created_at: '2022-03-05 23:35:48',
      fee: 0,
      id: 'FT90815',
      remark: 'sample remark',
      sender_bank: 'bni',
      status: 'PENDING',
      unique_code: 90,
    },
    {
      account_number: '2826879539',
      amount: 3262470,
      beneficiary_bank: 'mandiri',
      beneficiary_name: 'Shanice Harwood',
      completed_at: '2022-03-05 23:36:48',
      created_at: '2022-03-05 23:34:48',
      fee: 0,
      id: 'FT20928',
      remark: 'sample remark',
      sender_bank: 'bni',
      status: 'SUCCESS',
      unique_code: 316,
    },
  ]);

  const state = useSelector(({transactionReducer}) => transactionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(handleState('search', ''))
    dispatch(fetchTransaction());
  }, []);

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#F5F9F8',
        width: width,
        height: height,
      }}>
      <SearchBar />
      {state && !state.loading ? (
        <FlatList
          data={state.transactions}
          renderItem={({item, index}) => (
            <CardComponent key={index} props={item} navigation={navigation} />
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
          }}>
          <ActivityIndicator size="large" color="#FF7D1D" animating={true} />
        </View>
      )}
    </View>
  );
};

export default Transactions;
