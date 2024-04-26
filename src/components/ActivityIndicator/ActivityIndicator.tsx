import { StyleSheet, View, ActivityIndicator as RNActivityIndicator } from 'react-native';
import React from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { ActivityIndicatorProps, FCCWD } from '../../types';
import { opacity } from '../../utilities';
import { applyDefaults } from '../../core/KitraProvider';

const ActivityIndicator:FCCWD<ActivityIndicatorProps> = ({ theme, children }) => {
  const { componentTheme } = useComponentTheme(theme, 'activityIndicator', 'default');
  return (
    <View style={[styles.centeredView, { backgroundColor: opacity(String(componentTheme.default?.background), 80) }]}>
      <View style={[styles.modalView]}>
        {children || <RNActivityIndicator size="large" color={componentTheme.default?.indicator} /> }
      </View>
    </View>
  );
};

export default applyDefaults(ActivityIndicator);

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 100,
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    borderRadius: 20,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
