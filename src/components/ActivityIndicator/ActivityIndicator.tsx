import { StyleSheet, View, Platform } from 'react-native';
import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
} from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { ActivityIndicatorProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const ActivityIndicator: FCCWD<ActivityIndicatorProps> = ({ theme, children }) => {
  const { componentTheme } = useComponentTheme(theme, 'activityIndicator', 'default');
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360000, {
        duration: 1000000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );

    return () => cancelAnimation(rotation);
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: 16 },
      { translateY: 16 },
      { rotate: `${rotation.value}deg` },
      { translateX: -16 },
      { translateY: -16 },
    ],
  }));
 
  return (
    <View style={[styles.centeredView, { backgroundColor: componentTheme.default?.background }]}>
      <View>
        {children || (
          <>
            <View style={[styles.circle, { borderColor: componentTheme.default?.indicator }]} />
            <Animated.View
              style={[
                Platform.OS === 'android' ? styles.quarterCircleAndroid : styles.quarterCircleIOS,
                { borderColor: componentTheme.default?.track },
                animatedStyle,
              ]}
            />
          </>
        )}
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
  circle: {
    width: 64,
    height: 64,
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 2,
  },
  quarterCircleAndroid: {
    width: 32,
    height: 32,
    borderWidth: 3,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 32,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  quarterCircleIOS: {
    width: 32,
    height: 32,
    borderWidth: 3,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopLeftRadius: 32,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});
