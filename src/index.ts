/* ----CONTEXTS---- */
export { KitraProvider } from './core/KitraProvider';
export { ThemeContext } from './core/theme/theme';
export { TypographyContext } from './core/typography/typography';

/* ----HOOKS---- */
export { default as useTheme } from './core/hooks/useTheme';
export { default as useTypography } from './core/hooks/useTypography';
export { default as useNotification } from './core/hooks/useNotification';

/* ----COMPONENTS---- */
export { default as TextInput } from './components/TextInput/TextInput';
export { default as CheckBox } from './components/CheckBox/CheckBox';
export { default as Button } from './components/Button/Button';
export { default as ProgressBar } from './components/ProgressBar/ProgressBar';
export { default as Badge } from './components/Badge/Badge';
export { default as AccordionList } from './components/AccordionList/AccordionList';
export { default as RadioButton } from './components/RadioButton/RadioButton';
export { default as ToggleButton } from './components/ToggleButton/ToggleButton';
export { default as Menu } from './components/Menu/Menu';
export { default as Dropdown } from './components/Dropdown/index';
export { default as Swipe } from './components/Swipe/index';
export { default as Divider } from './components/Divider/Divider';
export { default as SpeedDial } from './components/SpeedDial/SpeedDial';
export { default as Avatar } from './components/Avatar/Avatar';
export { default as AvatarGroup } from './components/Avatar/AvatarGroup';
export { default as Chip } from './components/Chip/Chip';
export { default as SearchBar } from './components/SearchBar/SearchBar';
export { default as Switch } from './components/Switch/Switch';
export { default as Slider } from './components/Slider/index';
export { default as PagerView } from './components/PagerView/PagerView';
export { default as ActivityIndicator } from './components/ActivityIndicator/ActivityIndicator';
export { default as Icon } from './components/Icons/Icon';

/* ----FUNCTIONS---- */
export { opacity } from './utilities';
export { showNotification } from './core/KitraProvider';

/* ----TYPES---- */
export { AccordionListProps,
  ActionProps,
  ActivityIndicatorProps,
  AvatarGroupProps,
  AvatarProps,
  BadgeProps,
  ButtonProps,
  CheckBoxProps,
  ChipProps,
  ComponentThemeType,
  CoreThemeType,
  DividerProps,
  DrowdownProps,
  IconComponentProps,
  IconProps,
  IconType,
  MenuProps,
  MultipleDropdownProps,
  PagerViewProps,
  ProgressBarProps,
  RadioButtonProps,
  SliderProps,
  SpeedDialProps,
  SwipeProps,
  SwitchProps,
  ToggleButtonProps,
  ThemeType,
  TextInputProps,
  TypographyType,
  RenderRightActionProps,
  Components,
  DrowdownRouteProps } from './types';


