import React from 'react';
import {TouchableOpacity} from 'react-native';
import {VStack, Input, Text} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default SearchComponent = ({onChange, state, showModal}) => {
  return (
    <VStack my="4" space={1} w="100%">
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          value={state.search}
          onChangeText={text => onChange('search', text)}
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
              style={{padding: 5, marginLeft: 10}}
            />
          }
          InputRightElement={
            <TouchableOpacity
              onPress={() => showModal()}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginEnd: 10,
              }}>
              <Text key="first" style={{color: '#F09476', marginHorizontal: 5}}>
                URUTKAN
              </Text>
              <FontAwesome5
                key="second"
                name={'angle-down'}
                size={18}
                style={{color: '#F09476', alignSelf: 'center'}}
              />
            </TouchableOpacity>
          }
        />
      </VStack>
    </VStack>
  );
};
