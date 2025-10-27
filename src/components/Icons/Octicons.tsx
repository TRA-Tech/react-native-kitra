/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import type { IconComponentProps } from '../../types';

let Octicons: React.ComponentType<IconComponentProps>;

try {
  // Optionally require vector-icons
  Octicons =
    require('react-native-vector-icons/Octicons').default;
} catch (e) {
  let isErrorLogged = false;
  // Fallback component for icons
  Octicons = ({ name, color, size, ...rest }) => {
    /* eslint-disable no-console */
    if (!isErrorLogged) {
      if (
        !/(Cannot find module|Module not found|Cannot resolve module)/.test(
          (e as any).message,
        )
      ) {
        console.error(e);
      }
      console.warn(
        `Tried to use the icon '${name}' in a component from 'react-native-kitra', but 'react-native-vector-icons/MaterialCommunity' could not be loaded.`,
        'To remove this warning, try installing \'react-native-vector-icons\'',
      );
      isErrorLogged = true;
    }
    return (
      <Text
        {...rest}
        style={[styles.icon, { color, fontSize: size }]}
        selectable={false}
      >
        □
      </Text>
    );
  };
}

export const accessibilityProps =
  Platform.OS === 'web'
    ? {
      role: 'img',
      focusable: false,
    }
    : {
      accessibilityElementsHidden: true,
      importantForAccessibility:
        'no-hide-descendants' as 'no-hide-descendants',
    };

export class OcticonsIcon extends React.Component<IconComponentProps> {
  render() {
    const { allowFontScaling, name, color, size, style } = this.props;

    return (
      // @ts-expect-error
      <Octicons
        allowFontScaling={allowFontScaling}
        name={name}
        color={color}
        size={size}
        style={[
          {
            lineHeight: size,
          },
          styles.icon,
          style,
        ]}
        pointerEvents="none"
        selectable={false}
        {...accessibilityProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
  },
});

export default OcticonsIcon;
