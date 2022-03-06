import React from 'react';
import {VStack, Input, Text, Heading} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default SearchComponent = ({onChange, state}) => {
  return (
    <VStack my="4" space={1} w="100%">
      <VStack w="100%" space={5} alignSelf="center">
        <Input
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
            <>
              <Text key="first" style={{color: '#F09476'}}>
                URUTKAN
              </Text>
              <FontAwesome5
                key="second"
                name={'angle-down'}
                size={18}
                style={{padding: 10, color: '#F09476'}}
              />
            </>
          }
        />
      </VStack>
    </VStack>
  );
};
