import merge from 'lodash.merge';
import React from 'react';
import { ComponentThemeType, Components, DeepPartial } from '../../types';
import useTheme from './useTheme';
import { COLOR_COMPONENTS_LIGHT } from '../theme/colors';

type ComponentThemes = {
  [K in Components]: DeepPartial<ReturnType<typeof COLOR_COMPONENTS_LIGHT>[K]>;
};

type ComponentConditions={
  [K in Components]: keyof ComponentThemes[K]
}
type Condition<T extends Components> = ComponentConditions[T];

const useComponentTheme = <T extends Components>(extraTheme: ComponentThemes[T] | undefined, component: T, condition?:Condition<T>) => {
  const { theme: coreTheme } = useTheme();

  const tempTheme:ComponentThemeType = JSON.parse(JSON.stringify(coreTheme));
  const theme = merge(tempTheme, {
    components: {
      [component]: extraTheme,
    },
  });

  // @ts-ignore
  return { statusTheme: theme?.components?.[component]?.[condition], componentTheme: theme?.components[component]! };
};

export default useComponentTheme;
