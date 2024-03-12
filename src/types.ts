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
* Functional component with children and theme
*/
export type FCCWT<P = {}> = FCC<P & { theme: { [index: string]: string } }>

/**
 *
* Functional component with children and defaults
*/

export type FCCWD<P = {}> = FCC<P & DefaultProps>

export type CoreThemeType = typeof DEFAULT_THEME
export type ThemeType = CoreThemeType & {
    dark: {
        custom: any
    },
    light: {
        custom: any
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
    theme: ComponentThemeType['accordionList']
    testID?: string
}

export type AvatarGroupProps = {
    avatarsType: Array<{
        source?: ImageSourcePropType,
        variant?: 'circular' | 'rounded',
        avatarIcon?: React.ReactNode,
        containerStyle?: StyleProp<ViewStyle>,
        label?: string,
        labelStyle?: StyleProp<TextStyle>,
    }>,
    avatarLimit?: number,
    limitContainerStyle?: { style: StyleProp<TextStyle>, backgroundColor: string }
    theme: ComponentThemeType['avatarGroup']
}

export type AvatarProps = {
    size?: 'small' | 'medium',
    source?: ImageSourcePropType,
    variant?: 'circular' | 'rounded',
    avatarIcon?: React.ReactNode,
    containerStyle?: StyleProp<ViewStyle>,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    theme: ComponentThemeType['avatar']
}

export type BadgeProps = {
    visible?: boolean,
    label?: string | number,
    size?: 'medium' | 'small',
    containerStyle?: StyleProp<ViewStyle>,
    textStyles?: StyleProp<TextStyle>,
    variant?: 'circular' | 'rectangular'
    icon?: React.ReactNode,
    badgePosition: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
    theme: ComponentThemeType['badge']
}

export type ButtonProps = {
    size?: 'large' | 'medium' | 'small',
    disabled?: boolean,
    label?: string,
    icon?: React.ReactElement,
    statusStyle?: {
        default:
        {
            container: {
                backgroundColor: string
            },
            text: {
                color: string
            }
        },
        focused: {
            container: {
                backgroundColor: string
            },
            text: {
                color: string
            }
        },
        disabled: {
            container: {
                backgroundColor: string
            },
            text: {
                color: string
            }
        }
    },
    iconPosition?: 'left' | 'right',
    style?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    theme: ComponentThemeType['button']
}

export type CheckBoxProps = {
    onChange?: (prop: boolean) => void
    onPress?: (prop: boolean) => void
    style?: StyleProp<ViewStyle>
    value?: boolean | undefined
    disabled?: boolean,
    iconColor?: string
    theme: ComponentThemeType['checkbox']
}

export type ChipProps = {
    label?: string,
    textStyle?: StyleProp<TextStyle>,
    style?: StyleProp<ViewStyle>,
    value?: boolean,
    icon?: { iconName: string, iconType: IconType, iconPosition: 'left' | 'right' },
    colorStyle?: { backgroundColor: string, selectBackgroundColor: string, selectTitleColor: string, titleColor: string },
    size?: 'large' | 'medium' | 'small',
    onChange: (event: boolean) => void,
    disabled?: boolean,
    theme: ComponentThemeType['chip']
}

export type DividerProps = {
    borderStyle?: 'solid' | 'dotted' | 'dashed'
    width?: number,
    color?: string,
    style?: StyleProp<ViewStyle>
    theme: ComponentThemeType['divider']
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
    theme: ComponentThemeType['dropdown']
    testID?: string
}

export type DrowdownRouteProps = DrowdownProps & { multiple?: boolean, }

export type IconButtonProps = {
    iconColor?: string,
    containerColor?: string,
    style: ViewStyle,
    icon: { type: IconType, name: string, size: number },
    focusedColor: string
}

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
        theme: ComponentThemeType['switch']
    }

export type MenuProps = {
    items: Array<{ label: string, left?: React.ReactNode, right?: React.ReactNode, onPress?: () => void }>,
    containerStyle?: StyleProp<ViewStyle>,
    rowTextStyle?: StyleProp<TextStyle>,
    menuStyle?: ViewStyle,
    button?: (isOpen: boolean) => React.ReactNode,
    rowStyle?: StyleProp<ViewStyle>,
    closeOnPress?: boolean,
    theme: ComponentThemeType['menu']
}
export type ProgressBarProps = {
    progress?: number,
    barColor?: string,
    progressColor?: string,
    progressStyle?: StyleProp<ViewStyle>,
    testID?: string,
    theme: ComponentThemeType['progressBar']
}

export type RadioButtonProps = {
    onChange: (event: boolean) => void
    style?: StyleProp<ViewStyle>,
    testID: string,
    theme: ComponentThemeType['radioButton']
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
    value?: number
    buttonStyle?: StyleProp<ViewStyle>
    barStyle?: StyleProp<ViewStyle>
    progressStyle?: StyleProp<ViewStyle>
    theme: ComponentThemeType['slider']
}

export type ActionProps = {
    text?: string,
    style?: StyleProp<ViewStyle>,
    icon?: React.ReactNode,
    textStyle?: StyleProp<TextStyle>,
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
    helperText?: string,
    helperTextStyle?: StyleProp<TextStyle>,
    variant?: 'filled' | 'outlined',
    inputContainerStyle?: StyleProp<ViewStyle>,
    labelContainerStyle?: StyleProp<ViewStyle>,
    count?: boolean,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    editable?: boolean,
    inputStyle?: StyleProp<TextStyle>,
    errorMessage?: string,
    containerStyle?: StyleProp<ViewStyle>,
    error?: boolean,
    left?: React.ReactNode,
    right?: React.ReactNode,
}

export type ToggleButtonProps = {
    buttons: {
        label: string,
        onPress: (event: boolean) => void,
        id?: number
    }[]
    size?: 'small' | 'medium',
    theme: ComponentThemeType['toggleButton']
}

export type SpeedDialProps = {
    items: Array<{ icon?: React.ReactNode, title?: string, titleColor?: string, backgroundColor?: string, onPress?: () => void }>,
    baseItemBackground?: string,
    variant: 'flat' | 'spread',
    onChange?: (event: boolean) => void,
    baseItemIcon?: React.ReactNode,
    theme: ComponentThemeType['speedDial']
};

export type ModalProps = {
    containerStyle?: StyleProp<ViewStyle>,
    modalStyle?: StyleProp<ViewStyle>,
    visible?: boolean,
    children?: React.ReactNode,
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
    headerTextColor?: { select: string, default: string },
    headerSliderStyle?: StyleProp<ViewStyle>,
    headerContainerStyle?: StyleProp<ViewStyle>,
    headerTextStyle?: StyleProp<TextStyle>,
    showDivider?: boolean,
    dividerStyle?: StyleProp<ViewStyle>,
    dividerColor?: string,
    icons?: React.ReactElement<typeof Icon>[],
    theme: ComponentThemeType['pagerView']
}
export type ActivityIndicatorProps = {
    children?: React.ReactNode
    theme: ComponentThemeType['activityIndicator']
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
    | 'ant-design'
    | 'fontisto'
    | 'evilicon'
    | 'entypo'
    | 'antdesign'
    | 'font-awesome-5';
