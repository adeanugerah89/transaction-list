import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {bankNameFormatter, idrFormatter, formatDate} from '../utils';

export default CardComponent = ({props, navigation}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardContentValue}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.headerTextStyle}>{`${bankNameFormatter(
              props.sender_bank,
            )}`}</Text>
            <Icon
              name="arrow-right"
              style={{fontSize: 12, paddingHorizontal: 6, color: '#040404'}}
            />
            <Text style={styles.headerTextStyle}>{`${bankNameFormatter(
              props.beneficiary_bank,
            )}`}</Text>
          </View>

          <Text style={[styles.textStyle, {marginVertical: 5}]}>
            {props.beneficiary_name.toUpperCase()}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.textStyle}>{`${idrFormatter(
              props.amount,
            )}`}</Text>
            <Octicons
              name="dot-fill"
              style={{fontSize: 12, paddingHorizontal: 6, color: '#040404'}}
            />
            <Text style={styles.textStyle}>{`${formatDate(
              props.completed_at,
            )}`}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionsDetail')}
            style={
              props.status == 'SUCCESS'
                ? styles.buttonStyle
                : styles.buttonStylePending
            }>
            <Text
              style={[
                styles.buttonTextStyle,
                {color: props.status == 'SUCCESS' ? '#FFFFFF' : '#fd6542'},
              ]}>
              {props.status == 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginRight: 20,
  },
  buttonStyle: {
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#54B684',
    padding: 10,
  },
  buttonStylePending: {
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fd6542',
  },
  buttonTextStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
  cardContentValue: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  headerTextStyle: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '900',
  },
  textStyle: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
  },
});
