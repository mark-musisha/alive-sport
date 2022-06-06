import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Colors } from '../../../config/global';

export default function Overlay({ children, customStyles, visible }) {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      presentationStyle='overFullScreen'
      style={styles.modalView}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.modalView, customStyles]}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: Colors.primaryGrey,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryWhite,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
