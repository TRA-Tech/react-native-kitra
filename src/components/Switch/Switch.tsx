/* eslint-disable camelcase */
import { Switch as RNSwitch, SwitchProps } from 'react-native';
import type { FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const Switch: FCCWD<SwitchProps> = (
  { theme,
    ...props },
) => (
  <RNSwitch
    trackColor={{ false: theme?.disabledLight!, true: theme?.focused! }}
    ios_backgroundColor={theme?.white!}
    thumbColor={props.value ? theme?.white! : theme?.white!}
    {...props}
    value={props.value}
  />
);
export default applyDefaults(Switch);
