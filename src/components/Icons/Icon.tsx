/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { IconComponentProps } from '../../types';
import iconPaths from './iconPaths.json';

const Icon: React.FC<IconComponentProps> = ({ 
  name, 
  color = '#000', 
  size = 24, 
  style,
  ...rest 
}) => {
  const pathData = iconPaths[name as keyof typeof iconPaths];

  if (!pathData) {
    console.warn(`Icon '${name}' not found. Available icons: ${Object.keys(iconPaths).slice(0, 10).join(', ')}...`);
    return null;
  }

  // Support both simple format and extended format
  let paths: any[] = [];
  let viewBox = '0 0 24 24';
  
  if (typeof pathData === 'string') {
    // Simple format: just a path string (fill by default)
    paths = [{ d: pathData, fill: color }];
  } else if (Array.isArray(pathData)) {
    // Array of path strings (fill by default)
    paths = pathData.map(d => ({ d, fill: color }));
  } else if (typeof pathData === 'object' && 'paths' in pathData) {
    // Extended format: { paths: [...], viewBox?: '...' }
    viewBox = (pathData as any).viewBox || viewBox;
    paths = (pathData as any).paths.map((p: any) => {
      if (typeof p === 'string') {
        return { d: p, fill: color };
      }
      // Path with properties: { d: '...', stroke: true, strokeWidth: 1.25, ... }
      return {
        d: p.d,
        fill: p.stroke ? 'none' : (p.fill !== undefined ? p.fill : color),
        stroke: p.stroke ? color : undefined,
        strokeWidth: p.strokeWidth,
        strokeLinecap: p.strokeLinecap,
        strokeLinejoin: p.strokeLinejoin,
      };
    });
  }

  return (
    <View style={[{ width: size, height: size }, style]} {...rest}>
      <Svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
      >
        {paths.map((pathProps, index) => (
          <Path
            key={index}
            {...pathProps}
          />
        ))}
      </Svg>
    </View>
  );
};

export const accessibilityProps =
  Platform.OS === 'web'
    ? {
      role: 'img',
      focusable: false,
    }
    : {
      accessibilityElementsHidden: true,
      importantForAccessibility: 'no-hide-descendants' as 'no-hide-descendants',
    };

export default Icon;
