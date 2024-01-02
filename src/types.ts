import type { FC, PropsWithChildren } from 'react';
import type React from 'react';
import type { Animated, ImageSourcePropType, StyleProp, TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';
import type Icon from './components/Icons/Icon';
import type IoniconsIcon from './components/Icons/Ionicons';
import type { defaultTypography } from './core/typography/typography';

export type DefaultProps = { theme?: { [index: string]: string } } & { typography?: TypographyType }

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

export type ThemeType = { dark: { [index: string]: string }, light: { [index: string]: string } }

export type TypographyType = typeof defaultTypography & any;

export type AccordionListProps = {
    data: any[],
    left: (expanded: boolean) => React.ReactNode,
    right: (expanded: boolean) => React.ReactNode,
    onExpand: () => void,
    label: string,
    labelContainerStyle: StyleProp<ViewStyle>,
    onSelect: (params: any) => void,
    itemDisplay: (params: any) => any,
    labelStyle: StyleProp<TextStyle>,
    rowTextStyle: StyleProp<TextStyle>,
    rowStyle: StyleProp<ViewStyle>
    testID?: string
}

export type AvatarGroupProps = {
    avatarsType: Array<AvatarProps>,
    avatarLimit?: number,
    limitContainerStyle?: { style: StyleProp<TextStyle>, backgroundColor: string }
}

export type AvatarProps = {
    size?: 'small' | 'medium',
    source?: ImageSourcePropType,
    borderStyle?: 'circular' | 'rounded',
    avatarIcon?: React.ReactNode,
    containerStyle?: StyleProp<ViewStyle>,
    label?: string,
    labelStyle?: StyleProp<TextStyle>,
    badgePosition?: 'top' | 'bottom',
    badgeStyle?: { containerStyle?: StyleProp<ViewStyle>, textStyle?: StyleProp<TextStyle> },
    badgeContent?: React.ReactNode,
}

export type BadgeProps = {
    visible?: boolean,
    label?: string | number,
    size?: 'medium' | 'small',
    containerStyle?: StyleProp<ViewStyle>,
    textStyles?: StyleProp<TextStyle>,
    borderStyle?: 'circular' | 'rectangular'
    icon?: React.ReactNode
}

export type ButtonProps = {
    size?: 'large' | 'medium' | 'small',
    disabled?: boolean,
    label?: string,
    children?: any,
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
    textStyle?: StyleProp<TextStyle>
}

export type CheckBoxProps = {
    onChange?: (prop: boolean) => void
    onPress?: (prop: boolean) => void
    style?: StyleProp<ViewStyle>
    value?: boolean | undefined
    disabled?: boolean,
    iconColor?: string
}

export type ChipProps = {
    label?: string,
    textStyle?: StyleProp<TextStyle>,
    style?: StyleProp<ViewStyle>,
    value?:boolean,
    icon?: { iconName: string, iconType: IconType, iconPosition: 'left'|'right'},
    colorStyle?: { backgroundColor: string, selectBackgroundColor: string, selectTitleColor: string, titleColor: string },
    size?: 'large' | 'medium' | 'small',
    onChange: (event: boolean) => void,
    disable?: boolean,
}

export type DividerProps = {
    borderStyle?: 'solid' | 'dotted' | 'dashed'
    width?: number,
    color?: string,
    style?: StyleProp<ViewStyle>
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
    onSelect: (item: string | object) => void,
    defaultValue?: Array<object | string>,
    rowTextStyle?: StyleProp<TextStyle>,
    buttonTextStyle?: StyleProp<TextStyle>,
    listContainerStyle?: StyleProp<ViewStyle>,
    left?: React.ReactNode,
    right?: React.ReactNode,
    onComplete?: (item: string | object) => void,
    buttonBackgroundColor?: { focusBackground: string, defaultBackground: string },
    iconStyle?: { color: string, container: StyleProp<ViewStyle> }
    autoPosition?: boolean,
    testID?: string
}

export type DrowdownRouteProps = DrowdownProps & { multiple?: boolean, }

export type IconButtonProps = {
    iconColor?: string,
    containerColor?: string,
    style: ViewStyle,
    icon: {type:IconType, name:string, size:number},
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

export type MenuProps = {
    items: Array<{ label: string, left?: React.ReactNode, right?: React.ReactNode, onPress?: () => void }>,
    containerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    dividerColor?: string,
    menuStyle?: ViewStyle,
    button?: (isOpen: boolean) => React.ReactNode,
    rowStyle?: StyleProp<ViewStyle>,
    closeOnPress?: boolean
}
export type ProgressBarProps = {
    progress?: number,
    barColor?: string,
    progressColor?: string,
    progressStyle?: StyleProp<ViewStyle>,
    testID?: string
}

export type RadioButtonProps = {
    onChange: (event: boolean) => void
    style?: StyleProp<ViewStyle>,
    testID: string,
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
}

export type ActionProps = {
    text?: string,
    style?: StyleProp<ViewStyle>,
    icon?: React.ReactNode,
    textStyle?: StyleProp<TextStyle>,
    onPress?: () => void
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
    disabled?: boolean,
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
}

export type SpeedDialProps = {
    items: Array<{ icon?: React.ReactNode, title?: string, titleColor?: string, backgroundColor?: string, onPress?: () => void }>,
    baseItemBackground?: string,
    variant: 'flat' | 'spread',
    baseItemIcon?: React.ReactNode
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
    icons?: React.ReactElement<typeof Icon>[]
}
export type ActivityIndicatorProps = {
    children?: React.ReactNode
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
