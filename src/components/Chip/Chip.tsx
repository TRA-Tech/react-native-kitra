import { TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { ChipProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';
import Icon from '../Icons/Icon';

const sizes = {
  small: {
    width: 57,
    height: 24,
    iconSize: 12,
    iconwithWidth: 71.54,
  },
  medium: {
    width: 65,
    height: 30,
    iconSize: 15,
    iconwithWidth: 82.39,
  },
  large: {
    width: 73,
    height: 33,
    iconSize: 17,
    iconwithWidth: 93.24,

  },
};
const Icons = Animated.createAnimatedComponent(Icon);
const Button = Animated.createAnimatedComponent(TouchableOpacity);

const Chip:FCCWD<ChipProps> = (
  { theme,
    typography,
    label,
    value,
    labelStyle,
    style,
    icon,
    colorStyle = { backgroundColor: theme?.primary!, selectBackgroundColor: theme?.white!, selectTitleColor: theme?.primary!, titleColor: theme?.white! },
    size = 'small',
    onChange,
    disable = false },
) => {
  const offset = useSharedValue(0);
  const [select, setSelect] = useState(value || false);
  const typographySize = {
    small: typography?.body.xsmedium,
    medium: typography?.body.smedium,
    large: typography?.body.medium,
  };

  const animated = useAnimatedStyle(() => {
    const colorAnimated = interpolateColor(
      offset.value,
      [0, 1],
      [colorStyle.backgroundColor, colorStyle.selectBackgroundColor],
    );
    return {
      backgroundColor: colorAnimated,
    };
  });

  const textAnimated = useAnimatedStyle(() => {
    const colorAnimated = interpolateColor(
      offset.value,
      [0, 1],
      [colorStyle.selectBackgroundColor, colorStyle.backgroundColor],
    );
    return {
      color: colorAnimated,
    };
  });
  useEffect(() => {
    offset.value = withTiming(Number(!!select));
    if (onChange) onChange(select);
  }, [select]);

  useEffect(() => {
    setSelect(!!value);
  }, [value]);
  return (
    <Button
      disabled={disable}
      testID="chip"
      onPress={() => { setSelect(prev => !prev); }}
      activeOpacity={1}
      style={[animated, { justifyContent: 'center',
        alignItems: 'center',
        height: sizes[size].height,
        borderWidth: 1,
        borderRadius: 40,
        opacity: disable ? 0.7 : 1,
        borderColor: colorStyle.backgroundColor,
        width: icon ? sizes[size].iconwithWidth : sizes[size].width }, style]}
    >
      <View style={{ flexDirection: icon?.iconPosition === 'right' ? 'row' : 'row-reverse', alignItems: 'center' }}>
        <Animated.Text style={[textAnimated, { fontSize: typographySize[size]?.fontSize, lineHeight: typographySize[size]?.lineHeight, fontWeight: '500' }, labelStyle]}>{label}</Animated.Text>
        {icon ?
          <Icons type={icon.iconType} name={icon.iconName} size={sizes[size].iconSize} animatedProps={textAnimated} style={[icon.iconPosition === 'right' ? { marginLeft: 6 } : { marginRight: 6 }]} />
          : null
        }
      </View>
    </Button>
  );
};

export default applyDefaults(Chip);
