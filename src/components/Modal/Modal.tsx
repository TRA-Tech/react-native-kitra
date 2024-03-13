// @ts-nocheck

import { useState, useEffect } from 'react';
import { View, Modal as RNModal, StyleSheet, ViewStyle, ModalProps as RNModalProps } from 'react-native';
import type { FCCWD, ModalProps } from '../../types';
import { opacity } from '../../utilities';
import { applyDefaults } from '../../core/KitraProvider';

const Modal: FCCWD<ModalProps&RNModalProps> = ({ theme, containerStyle, modalStyle, visible = false, children, ...props }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);
  return (
    <View style={{ flex: 1 }}>
      <RNModal
        animationType="slide"
        transparent
        visible={modalVisible}
        {...props}
      >
        <View style={[styles.centeredView, { backgroundColor: opacity(String(theme?.lightBlack), 80) }, containerStyle]}>
          <View style={[styles.modalView, modalStyle]}>
            {children}
          </View>
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
  },
});

export default applyDefaults(Modal);
