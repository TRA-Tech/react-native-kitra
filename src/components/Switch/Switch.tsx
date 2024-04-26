/* eslint-disable camelcase */
import { Switch as RNSwitch, SwitchProps as RNSwithProps } from 'react-native';
import React from 'react';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { FCCWD, SwitchProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const Switch: FCCWD<RNSwithProps&SwitchProps> = (
  { theme, ...props },
) => {
  const { componentTheme } = useComponentTheme(theme, 'switch');

  return (
    <RNSwitch
      trackColor={{ false: componentTheme.default?.track, true: componentTheme.active?.track }}
      ios_backgroundColor={componentTheme.default?.track}
      thumbColor={props.value ? componentTheme.active?.thumb : componentTheme.default?.thumb}
      {...props}
      value={props.value}
    />
  );
};
export default applyDefaults(Switch);
