import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';
import Animated, { interpolateColor, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { FCCWD, SearchBarProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import FeatherIcon from '../Icons/Feather';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    lineHeight: 17,
    marginLeft: 8,
    flex: 1,
  },
});
const sizes = {
  small: {
    width: 315,
    height: 36,
    fontSize: 10,
  },
  medium: {
    width: 315,
    height: 42,
    fontSize: 12,
  },
  large: {
    width: 315,
    height: 51,
    fontSize: 14,
  },
};
const SearchBar:FCCWD<SearchBarProps&TextInputProps> = ({ size = 'medium', style, filterPattern, filterOnChange, ...props }) => {
  const offset = useSharedValue(0);

  const colorAnimated = useAnimatedStyle(() => {
    const colorİnterpolate = interpolateColor(
      offset.value,
      [0, 1],
      ['#F6F6F6', '#FFFF'],
    );
    return {
      backgroundColor: colorİnterpolate,
    };
  });

  const Icon = Animated.createAnimatedComponent(FeatherIcon);
  const animatedProps = useAnimatedProps(() => {
    const color = interpolateColor(
      offset.value,
      [0, 1],
      ['#9A9A9A', '#404040'],
    );
    return { color };
  });

  const onFocus = () => {
    offset.value = withTiming(1);
    return offset.value;
  };

  const onEndEditing = () => {
    offset.value = withTiming(0);
    return offset.value;
  };

  return (
    <Animated.View style={[style, colorAnimated, styles.container, { width: sizes[size].width,
      height: sizes[size].height }]}
    >
      <View style={styles.innerContainer}>
        <Icon name="search1" size={15} animatedProps={animatedProps} style={{ marginLeft: 20 }} />
        <TextInput
          placeholder="Search"
          style={[styles.input, { height: sizes[size].height, fontSize: sizes[size].fontSize }]}
          onFocus={() => onFocus()}
          onEndEditing={() => onEndEditing()}
          onChangeText={e => filterOnChange(filterPattern(e))}
          {...props}
        />
      </View>
    </Animated.View>
  );
};

export default applyDefaults(SearchBar);
