import { StyleSheet, View, ActivityIndicator as RNActivityIndicator } from 'react-native';
import type { ActivityIndicatorProps, FCCWD } from '../../types';
import { opacity } from '../../utilities';
import { applyDefaults } from '../../core/KitraProvider';

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
const ActivityIndicator:FCCWD<ActivityIndicatorProps> = ({ theme, children }) => (
  <View style={[styles.centeredView, { backgroundColor: opacity(String(theme?.lightBlack), 80) }]}>
    <View style={[styles.modalView]}>
      {children || <RNActivityIndicator size="large" color={theme?.primary} /> }
    </View>
  </View>
);

export default applyDefaults(ActivityIndicator);
