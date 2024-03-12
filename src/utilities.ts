/* eslint-disable no-bitwise */

import type React from 'react';
import type { IconType } from './types';
import { x11Colors } from './core/theme/x11';

function hexToRgbA(hex:string, percentage:number) {
  if (hex[0] !== '#') {
    hex = `#${x11ColorToHex(hex)}`;
  }

  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    // @ts-ignore
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${percentage / 100})`;
  }
  throw new Error('Bad Hex');
}

export const opacity = (color:string, percentage: number) => hexToRgbA(color, percentage);

export function x11ColorToHex(colorName: string) {
  const hex = x11Colors.find(x => x.name === colorName)?.hex;
  if (!hex) {
    throw new Error(`Unknown X11 color name: ${colorName}`);
  }
  return hex;
}

const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export const getIconType = (type: IconType): any => {
  switch (type) {
    case 'zocial':
      return require('react-native-vector-icons/Zocial').default;
    case 'octicon':
      return require('react-native-vector-icons/Octicons').default;
    case 'material':
      return require('react-native-vector-icons/MaterialIcons').default;
    case 'material-community':
      return require('react-native-vector-icons/MaterialCommunityIcons')
        .default;
    case 'ionicon':
      return require('react-native-vector-icons/Ionicons').default;
    case 'foundation':
      return require('react-native-vector-icons/Foundation').default;
    case 'evilicon':
      return require('react-native-vector-icons/EvilIcons').default;
    case 'entypo':
      return require('react-native-vector-icons/Entypo').default;
    case 'font-awesome':
      return require('react-native-vector-icons/FontAwesome').default;
    case 'font-awesome-5':
      return require('react-native-vector-icons/FontAwesome5').default;
    case 'simple-line-icon':
      return require('react-native-vector-icons/SimpleLineIcons').default;
    case 'feather':
      return require('react-native-vector-icons/Feather').default;
    case 'antdesign':
    case 'ant-design':
      return require('react-native-vector-icons/AntDesign').default;
    case 'fontisto':
      return require('react-native-vector-icons/Fontisto').default;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return require('react-native-vector-icons/MaterialIcons').default;
  }
};

export const getIconProperties = (node: React.ReactElement) => {
  const { type, name, size, color } = node.props;
  return {
    type,
    name,
    size,
    color,
  };
};
