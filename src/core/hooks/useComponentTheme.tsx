import merge from 'lodash.merge';
import { ComponentThemeType, Components } from '../../types';
import useTheme from './useTheme';
import { COLOR_COMPONENTS_LIGHT } from '../theme/colors';

type ComponentThemes = {
  [K in Components]: typeof COLOR_COMPONENTS_LIGHT[K];
};

type ComponentConditions={
  [K in Components]: keyof typeof COLOR_COMPONENTS_LIGHT[K];
}
type ConditionFunction<T extends Components> = ComponentConditions[T];

const useComponentTheme = <T extends Components>(extraTheme: ComponentThemes[T], component: T, condition?:ConditionFunction<T>) => {
  const { theme: coreTheme } = useTheme();
  const tempTheme:ComponentThemeType = JSON.parse(JSON.stringify(coreTheme));
  const theme = merge(tempTheme, {
    components: {
      [component]: extraTheme,
    },
  });

  return { statusTheme: theme.components[component]![condition || 'default'], componentTheme: theme.components[component]! };
};

export default useComponentTheme;
