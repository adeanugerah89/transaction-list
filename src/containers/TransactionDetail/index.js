import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {bankNameFormatter, idrFormatter, formatDate} from '../../utils';
const {height, width} = Dimensions.get('window');

const TransactionDetail = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerTextStyle}>ID TRANSAKSI: #{item.id}</Text>
      </View>

      <View
        style={[
          styles.content,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <Text style={styles.headerTextStyle}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.headerTextStyle, {color: '#fd6542'}]}>
            TUTUP
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.content]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.headerTextStyle}>{`${bankNameFormatter(
            item.sender_bank,
          )}`}</Text>
          <Icon
            name="arrow-right"
            style={{fontSize: 12, paddingHorizontal: 6, color: '#040404'}}
          />
          <Text style={styles.headerTextStyle}>{`${bankNameFormatter(
            item.beneficiary_bank,
          )}`}</Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={[styles.detailContent, {marginVertical: 5}]}>
            <Text style={styles.titleStyle}>
              {item.beneficiary_name.toUpperCase()}
            </Text>
            <Text style={[styles.titleStyle, {marginRight: 50}]}>NOMINAL</Text>
          </View>

          <View style={styles.detailContent}>
            <Text style={styles.textStyle}>{item.account_number}</Text>
            <Text style={[styles.textStyle, {marginRight: 50}]}>
              {`${idrFormatter(item.amount)}`}
            </Text>
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <View style={[styles.detailContent, {marginVertical: 5}]}>
            <Text style={styles.titleStyle}>BERITA TRANSFER</Text>
            <Text style={[styles.titleStyle, {marginRight: 50}]}>
              KODE UNIK
            </Text>
          </View>

          <View style={styles.detailContent}>
            <Text style={styles.textStyle}>{item.remark}</Text>
            <Text style={[styles.textStyle, {marginRight: 50}]}>
              {item.unique_code}
            </Text>
          </View>
        </View>

        <View>
          <View style={[styles.detailContent, {marginVertical: 5}]}>
            <Text style={styles.titleStyle}>WAKTU DIBUAT</Text>
          </View>

          <View style={styles.detailContent}>
            <Text style={styles.textStyle}>{`${formatDate(
              item.created_at,
            )}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F9F8',
    width: width,
    height: height,
  },
  content: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    marginVertical: 1,
    padding: 20,
  },
  detailContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTextStyle: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '900',
  },
  titleStyle: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '900',
  },
  textStyle: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default TransactionDetail;
