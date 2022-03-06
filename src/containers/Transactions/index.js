import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import CardComponent from '../../components/CardComponent';
import LoaderComponent from '../../components/LoaderComponent';
import SearchComponent from '../../components/SearchComponent';
import {fetchTransaction, handleState} from './_Actions';

const {height, width} = Dimensions.get('window');

const Transactions = ({navigation}) => {
  const state = useSelector(({transactionReducer}) => transactionReducer);
  const dispatch = useDispatch();

  const onChange = (field, value) => {
    console.log(field, value);
    dispatch(handleState(field, value));
    // dispatch(filterByValue(value));
  };

  useEffect(() => {
    dispatch(handleState('search', ''));
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
      <SearchComponent onChange={onChange} state={state} />

      {state && !state.loading ? (
        <FlatList
          data={state.transactions}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TransactionsDetail', {
                  item: item,
                })
              }>
              <CardComponent key={index} props={item} navigation={navigation} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <LoaderComponent />
      )}
    </View>
  );
};

export default Transactions;
