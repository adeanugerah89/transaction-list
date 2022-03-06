import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import CardComponent from '../../components/CardComponent';
import LoaderComponent from '../../components/LoaderComponent';
import SearchComponent from '../../components/SearchComponent';
import ModalComponent from '../../components/ModalComponent';
import {fetchTransaction, filterByValue, sortBy} from './_Actions';

const {height, width} = Dimensions.get('window');
const radioButtonData = [
  {
    key: '',
    text: 'URUTKAN',
  },
  {
    key: 'asc',
    text: 'Nama A-Z',
  },
  {
    key: 'desc',
    text: 'Nama Z-A',
  },
  {
    key: 'dateAsc',
    text: 'Tanggal Terbaru',
  },
  {
    key: 'dateDesc',
    text: 'Tanggal Terlama',
  },
];

const Transactions = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(({transactionReducer}) => transactionReducer);
  const [isModalVisible, setModalVisible] = useState(false);

  const onChange = (field, value) => {
    dispatch(filterByValue(field, value));
  };

  const onSelect = value => {
    dispatch(sortBy(value));
  };

  const showModal = () => {
    setModalVisible(isModalVisible => !isModalVisible);
  };

  useEffect(() => {
    dispatch(filterByValue('search', ''));
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
      <SearchComponent
        onChange={onChange}
        state={state}
        showModal={showModal}
      />

      {state && !state.loading ? (
        <>
          <FlatList
            data={state.filteredTransactions}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TransactionsDetail', {
                    item: item,
                  })
                }>
                <CardComponent
                  key={index}
                  props={item}
                  navigation={navigation}
                />
              </TouchableOpacity>
            )}
          />

          <ModalComponent
            onSelect={onSelect}
            isModalVisible={isModalVisible}
            showModal={showModal}
            option={radioButtonData}
          />
        </>
      ) : (
        <LoaderComponent />
      )}
    </View>
  );
};

export default Transactions;
