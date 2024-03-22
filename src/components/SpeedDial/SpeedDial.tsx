import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, SpeedDialProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Icon from '../Icons/Icon';

const styles = StyleSheet.create({
  childrenContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    flexDirection: 'row',
  },
  childrenText: {
    right: 60,
    top: 10,
    position: 'absolute',
    fontSize: 12,
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  childrenButton: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 40,
    position: 'absolute',
    bottom: '5%',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  nodeButton: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const ChildItem = ({ item, index, offset, onPress, variant, typography }:{item:any, typography:any, index:number, offset:any, onPress:any, variant:'flat'|'spread'}) => {
  const childRotate = useAnimatedStyle(() => ({
    transform: [{ translateY: -offset.value * ((index + 1) * 65) }],
    opacity: offset.value,
  }));
  const childRotete1 = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value * 80 }],
    opacity: offset.value,
  }));
  const childRotete2 = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value * 60 }, { translateY: -offset.value * 60 }],
    opacity: offset.value,
  }));
  const childRotete3 = useAnimatedStyle(() => ({
    transform: [{ translateY: -offset.value * 80 }],
    opacity: offset.value,
  }));
  return (
    <Animated.View
      key={index}
      style={[styles.childrenContainer, variant === 'spread' ? (index === 0 && childRotete1) ||
        (index === 1 && childRotete2) ||
       (index === 2 && childRotete3) : [childRotate, { bottom: 20 }],
      {
        backgroundColor: item.backgroundColor || '#82B98E',
      }]}
    >
      {variant !== 'spread' && item.title ? (
        <View style={[styles.childrenText, { backgroundColor: 'white', borderRadius: 5 }]}>
          <Text style={[{ color: item.titleColor || '#82B98E',
            fontSize: typography?.body.xsmedium.fontSize,
            lineHeight: typography?.body.xsmedium.lineHeight }]}
          >
            {item.title}

          </Text>
        </View>
      )
        : null
}
      <TouchableOpacity
        onPress={onPress}
        testID={`children_item_${index}`}
        style={styles.childrenButton}
      >
        {item.icon}
      </TouchableOpacity>
    </Animated.View>
  );
};

const SpeedDial: FCCWD<SpeedDialProps> = (
  { items,
    onChange,
    variant = 'flat',
    baseItemIcon,
    theme,
    typography },
) => {
  const { statusTheme } = useComponentTheme(theme, 'speedDial', 'default');

  const offset = useSharedValue(0);
  const rotate = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(offset.value - 1) * 45}deg` }],
  }));

  const animationStartConfig = {
    damping: 10,
    mass: 1,

  };
  const animationEndConfig = {
    mass: 1,
    stiffness: 100,
  };

  useEffect(() => {
    if (variant === 'spread') { items = items.slice(0, 3); }
  }, [variant]);

  const onPress = () => {
    if (offset.value > 0) {
      offset.value = withSpring(0, animationStartConfig);
      onChange && onChange(false);
    } else {
      offset.value = withSpring(1, animationEndConfig);
      onChange && onChange(true);
    }
  };
  return (
    <View style={[{ right: '7%' }, { alignSelf: 'flex-end' }, styles.container]}>
      <View style={styles.innerContainer}>
        <>
          {items.map((item, index) => (
            <ChildItem typography={typography} key={index} item={item} index={index} offset={offset} variant={variant} onPress={item.onPress} />
          ))}
        </>
        <Animated.View
          style={[baseItemIcon === (<Icon type="material-community" name="close" size={25} color={statusTheme.icon} />)
            ? rotate
            : null, styles.nodeContainer, { backgroundColor: statusTheme.background }]}
        >
          <TouchableOpacity
            testID="base_item"
            style={styles.nodeButton}
            onPress={onPress}
          >
            {baseItemIcon || <Icon type="material-community" name="close" size={25} color={statusTheme.icon} /> }
          </TouchableOpacity>
        </Animated.View>

      </View>
    </View>
  );
};

export default applyDefaults(SpeedDial);
