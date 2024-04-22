import type { FC, PropsWithChildren } from 'react';
import type React from 'react';
import type { Animated, ImageSourcePropType, StyleProp, TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import type Icon from './components/Icons/Icon';
import type { defaultTypography } from './core/typography/typography';
import { DEFAULT_THEME } from './core/theme/colors';

export type DefaultProps = { typography?: TypographyType }

/**
* Functional component with children
*/
export type FCC<P = {}> = FC<PropsWithChildren<P>>

/**
 *
* Functional component with children and defaults
*/

export type FCCWD<P = {}> = FCC<P & DefaultProps>

export type CoreThemeType = typeof DEFAULT_THEME

export type ThemeType = CoreThemeType & {
    dark: {
      colors:{ custom: any}
    },
    light: {
        colors:{ custom: any}
    }
}
export type ComponentThemeType = typeof DEFAULT_THEME.light.components

export type Components =keyof ComponentThemeType

export type TypographyType = typeof defaultTypography & any;

export type AccordionListProps = {
    data: any[],
    left?: (expanded: boolean) => React.ReactElement,
    right?: (expanded: boolean) => React.ReactElement,
    onExpand?: () => void,
    label?: string,
    containerStyle?: StyleProp<ViewStyle>,
    labelContainerStyle?: StyleProp<ViewStyle>,
    onSelect: (params: any) => void,
    itemDisplay: (params: any) => any,
    labelStyle?: StyleProp<TextStyle>,
    rowTextStyle?: StyleProp<TextStyle>,
    rowStyle?: StyleProp<ViewStyle>
    theme: DeepPartial<(ComponentThemeType['accordionList'])>
    testID?: string
}

export type AvatarGroupProps = {
    avatars: Array<{
        source?: ImageSourcePropType,
        variant?: 'circular' | 'rounded',
        avatarIcon?: React.ReactNode,
        containerStyle?: StyleProp<ViewStyle>,
        label?: string,
        labelStyle?: StyleProp<TextStyle>,
    }>,
    avatarLimit?: number,
    limitContainerStyle?: { style: StyleProp<TextStyle>, backgroundColor: string }
    theme: DeepPartial<(ComponentThemeType['avatarGroup'])>
}

export type AvatarProps = {
    size?: 'small' | 'medium',
    source?: ImageSourcePropType,
    variant?: 'circular' | 'rounded',
    avatarIcon?: React.ReactNode,
    containerStyle?: StyleProp<ViewStyle>,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    theme: DeepPartial<(ComponentThemeType['avatar'])>
}

export type BadgeProps = {
    visible?: boolean,
    label?: string | number,
    size?: 'medium' | 'small',
    containerStyle?: StyleProp<ViewStyle>,
    badgeStyle?:StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    variant?: 'circular' | 'rectangular'
    icon?: React.ReactNode,
    badgePosition: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
    theme: DeepPartial<(ComponentThemeType['badge'])>
}

export type ButtonProps = {
    size?: 'large' | 'medium' | 'small',
    disabled?: boolean,
    label?: string,
    icon?: React.ReactElement,
    iconPosition?: 'left' | 'right',
    style?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    theme: DeepPartial<(ComponentThemeType['button'])>
}

export type CheckBoxProps = {
    onChange?: (prop: boolean) => void
    onPress?: (prop: boolean) => void
    style?: StyleProp<ViewStyle>
    value?: boolean | undefined
    disabled?: boolean,
    theme: DeepPartial<(ComponentThemeType['checkbox'])>
}

export type ChipProps = {
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    style?: StyleProp<ViewStyle>,
    value?: boolean,
    icon?: React.ReactElement,
    iconPosition?: 'left' | 'right',
    size?: 'large' | 'medium' | 'small',
    onChange: (event: boolean) => void,
    disabled?: boolean,
    theme: DeepPartial<(ComponentThemeType['chip'])>
}

export type DividerProps = {
    variant?: 'solid' | 'dotted' | 'dashed'
    width?: number,
    style?: StyleProp<ViewStyle>
    theme: DeepPartial<DeepPartial<(ComponentThemeType['divider'])>>
}

export type DrowdownProps = {
    selectall?: boolean,
    disabled?: boolean | undefined,
    displayLength?: number,
    data: Array<object | string>,
    buttonStyle?: StyleProp<ViewStyle>,
    displayedRowValue: (item: string | object) => any,
    displayedButtonValue: (item: string | object) => any,
    containerStyle?: StyleProp<ViewStyle>
    buttonTitle?: string,
    rowStyle?: StyleProp<ViewStyle>
    onSelect?: (item: Array<string> | Array<object> | object | string) => void,
    defaultValue?: Array<object | string>,
    rowTextStyle?: StyleProp<TextStyle>,
    buttonTextStyle?: StyleProp<TextStyle>,
    listContainerStyle?: StyleProp<ViewStyle>,
    left?: (isVisible: boolean) => React.ReactNode,
    right?: (isVisible: boolean) => React.ReactNode,
    onComplete?: (item: string | object) => void,
    buttonBackgrounColor?: { focusBackground: string, defaultBackground: string },
    iconStyle?: { color: string, container: StyleProp<ViewStyle> }
    autoPosition?: boolean,
    theme: DeepPartial<(ComponentThemeType['dropdown'])>
    testID?: string
}

export type MultipleDropdownProps = DrowdownProps & { theme: DeepPartial<(ComponentThemeType['multipleDropdown'])> }
export type DrowdownRouteProps= MultipleDropdownProps& { multiple: boolean }

export type IconProps = {
    name: string;
    color?: string;
    size: number;
    style?: ViewStyle,
    allowFontScaling?: boolean;
};

export type IconComponentProps =
    TextProps & {
        name: string;
        color?: string;
        size: number;
        pointerEvents?: ViewProps['pointerEvents'];
    };

export type IconComponentType = React.ComponentType<
    TextProps & {
        name: string;
        color?: string;
        size: number;
        pointerEvents?: ViewProps['pointerEvents'];
    }>;

export type SwitchProps={
        theme: DeepPartial<(ComponentThemeType['switch'])>
    }

export type MenuProps = {
    items: Array<{ label: string, left?: React.ReactNode, right?: React.ReactNode, onPress?: () => void }>,
    containerStyle?: StyleProp<ViewStyle>,
    rowTextStyle?: StyleProp<TextStyle>,
    menuStyle?: ViewStyle,
    button?: (isOpen: boolean) => React.ReactNode,
    rowStyle?: StyleProp<ViewStyle>,
    closeOnPress?: boolean,
    theme: DeepPartial<(ComponentThemeType['menu'])>
}
export type ProgressBarProps = {
    progress?: number,
    progressStyle?: StyleProp<ViewStyle>,
    testID?: string,
    barStyle?: StyleProp<ViewStyle>,
    theme: DeepPartial<(ComponentThemeType['progressBar'])>
}

export type RadioButtonProps = {
    onChange: (event: boolean) => void
    style?: StyleProp<ViewStyle>,
    testID: string,
    theme: DeepPartial<(ComponentThemeType['radioButton'])>
}

export type SearchBarProps = {
    size?: 'small' | 'medium' | 'large',
    style?: StyleProp<ViewStyle>,
    value?: string
    filterPattern: (text: string) => Array<any>,
    filterOnChange: (event: any) => any;
}

export type SliderProps = {
    showPercentage?: boolean
    onChangeEnd: (value: number) => void
    defaultValue?: number
    buttonStyle?: StyleProp<ViewStyle>
    barStyle?: StyleProp<ViewStyle>
    progressStyle?: StyleProp<ViewStyle>
    theme: DeepPartial<(ComponentThemeType['slider'])>
}

export type ActionProps = {
    label?: string,
    style?: StyleProp<ViewStyle>,
    icon?: React.ReactNode,
    labelStyle?: StyleProp<TextStyle>,
    onPress?: (ref: React.RefObject<Swipeable>) => void
}

export type SwipeProps = {
    children?: any,
    variant?: 'radius' | 'no-radius',
    rightActions?: Array<ActionProps>,
    leftAction?: ActionProps,
}

export type RenderRightActionProps = {
    item: ActionProps,
    dragValue: number,
    progress: Animated.AnimatedInterpolation<string | number>,
    index: number
}

export type TextInputProps = {
    size?: 'large' | 'medium' | 'small',
    iconPosition?: 'left' | 'right',
    labelColor?: { focus: string, default: string },
    bottomLabel?: string,
    bottomLabelStyle?: StyleProp<TextStyle>,
    variant?: 'filled' | 'outlined',
    inputContainerStyle?: StyleProp<ViewStyle>,
    labelContainerStyle?: StyleProp<ViewStyle>,
    count?: boolean,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    editable?: boolean,
    inputStyle?: StyleProp<TextStyle>,
    containerStyle?: StyleProp<ViewStyle>,
    error?: boolean,
    left?: React.ReactNode,
    right?: React.ReactNode,
    theme: DeepPartial<(ComponentThemeType['textInput'])>
}

export type ToggleButtonProps = {
    buttons: {
        label: string,
        onPress: (event: boolean) => void,
        id?: number
    }[]
    size?: 'small' | 'medium',
    theme: DeepPartial<(ComponentThemeType['toggleButton'])>
}

export type SpeedDialProps = {
    items: Array<{ icon?: React.ReactNode, title?: string, titleColor?: string, backgroundColor?: string, onPress?: () => void }>,
    variant: 'flat' | 'spread',
    onChange?: (event: boolean) => void,
    baseItemIcon?: React.ReactNode,
    theme: DeepPartial<(ComponentThemeType['speedDial'])>
};

export type NotificationProps = {
    items: [{ status: 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO', header?: string, message?: string, keyID?: number }],
    containerStyle?: StyleProp<ViewStyle>,
    limit?: number
}
export type PagerViewProps = {
    children: React.ReactNode
    containerStyle?: StyleProp<ViewStyle>
    pageContainerStyle?: StyleProp<ViewStyle>
    injectPagerRef?: boolean,
    headerSliderStyle?: StyleProp<ViewStyle>,
    headerContainerStyle?: StyleProp<ViewStyle>,
    headerLabelStyle?: StyleProp<TextStyle>,
    icons?: React.ReactElement<typeof Icon>[],
    theme: DeepPartial<(ComponentThemeType['pagerView'])>
}
export type ActivityIndicatorProps = {
    children?: React.ReactNode
    theme: DeepPartial<(ComponentThemeType['activityIndicator'])>
}

export type IconType =
    | 'material'
    | 'material-community'
    | 'simple-line-icon'
    | 'zocial'
    | 'font-awesome'
    | 'octicon'
    | 'ionicon'
    | 'foundation'
    | 'feather'
    | 'fontisto'
    | 'evilicon'
    | 'entypo'
    | 'ant-design'
    | 'font-awesome-5';

export type DeepPartial<T> = T extends object ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    } : T;
