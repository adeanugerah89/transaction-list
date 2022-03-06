import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default ModalComponent = ({
  onSelect,
  isModalVisible,
  showModal,
  option,
}) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <View
          style={{
            backgroundColor: 'rgba(52,52,52,0.5)',
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={styles.modalView}>
            <View>
              {/*  */}
              {option.map((item, index) => {
                return (
                  <View
                    key={item.key}
                    style={[
                      styles.radioButtonContainer,
                      {marginBottom: index === option.length - 1 ? 0 : 35},
                    ]}>
                    <TouchableOpacity
                      style={styles.radioCircle}
                      onPress={() => {
                        setValue(item.key);
                        onSelect(item.key);
                        showModal();
                      }}>
                      {value === item.key && <View style={styles.selectedRb} />}
                    </TouchableOpacity>
                    <Text style={styles.radioText}>{item.text}</Text>
                  </View>
                );
              })}
              {/*  */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  radioButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  radioText: {
    marginLeft: 15,
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#F09476',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#F09476',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
    textAlign: 'center',
  },
});
