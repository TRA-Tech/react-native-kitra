import type { FC, PropsWithChildren } from 'react';
import type React from 'react';
import type { Animated, DimensionValue, FlatList, ImageSourcePropType,
  StyleProp, TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
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
    /**
        *The data to render in the accordion list
    */
    data: any[],
    /**
        *Renders the given React element to the left side
    */
    left?: (event: boolean) => React.ReactElement,
    /**
        *Renders the given React element to the right side
    */
    right?: (event: boolean) => React.ReactElement,
    /**
        *Callback called when accordion list is opened
    */
    onExpand?: () => void,
    /**
        *The label to display at the top of the accordion list
    */
    label?: string,
    /**
        *Additional styles to apply to the accordion list container
    */
    containerStyle?: StyleProp<ViewStyle>,
    /**
        *Additional styles to apply to the label container
    */
    labelContainerStyle?: StyleProp<ViewStyle>,
    /**
        *A callback function that will be called when a row is selected
    */
    onSelect: (event: any) => void,
    /**
        *A function that returns a string or JSX element to display for each row
    */
    itemDisplay: (event: any) => any,
    /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to each the row text
    */
    rowTextStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to each row container
    */
    rowStyle?: StyleProp<ViewStyle>
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['accordionList'])>
    /**
        *Used to locate this view in end-to-end tests
    */
    testID?: string
}

export type AvatarGroupProps = {
    /**
        *Takes avatar props into array
    */
    avatars: Array<Omit<AvatarProps, 'theme' | 'size'>>,
    /**
        *Limit of avatars to be listed. Defaults to 10
    */
    avatarLimit?: number,
    /**
        *Additional styles to apply to the limit container
    */
    limitContainerStyle?: StyleProp<TextStyle>
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['avatarGroup'])>
}

export type AvatarProps = {
    /**
        *The size of the avatar. Defaults to 'medium'
    */
    size?: 'small' | 'medium',
     /**
        *Used to specify the image source
    */
    source?: ImageSourcePropType,
     /**
        *Specifies the border type of the avatar. Defaults to 'circular'
    */
    variant?: 'circular' | 'rounded',
     /**
        *Used to add icon to avatar
    */
    avatarIcon?: React.ReactNode,
     /**
        *Additional styles to apply to the avatar container
    */
    containerStyle?: StyleProp<ViewStyle>,
     /**
        *Label to be displayed on the avatar
    */
    label?: string,
     /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
     /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['avatar'])>
}

export type BadgeProps = {
    /**
        *Visibility status. Defaults to true
    */
    visible?: boolean,
    /**
        *Label to be displayed on the badge
    */
    label?: string | number,
    /**
        *The size of the badge. Defaults to 'medium'
    */
    size?: 'medium' | 'small',
    /**
        *Additional styles to apply to the badge container
    */
    containerStyle?: StyleProp<ViewStyle>,
    /**
        *Additional styles to apply to the badge
    */
    badgeStyle?:StyleProp<ViewStyle>,
    /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
    /**
        *Specifies the border type of the badge. Defaults to 'circular'
    */
    variant?: 'circular' | 'rectangular'
    /**
        *Icon to be added to badge
    */
    icon?: React.ReactNode,
    /**
        *Location of the badge. Defaults to 'top-right'
    */
    badgePosition: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['badge'])>
}

export type ButtonProps = {
    /**
        *The size of the button. Defaults to 'medium'
    */
    size?: 'large' | 'medium' | 'small',
    /**
        *Whether the press behavior is disabled
    */
    disabled?: boolean,
    /**
        *The label to display on the button
    */
    label?: string,
    /**
        *Additional element to apply to left side of the button
    */
    left?:(event:boolean)=> React.ReactElement,
     /**
        *Additional element to apply to right side of the button
    */
    right?:(event:boolean)=> React.ReactElement,
    /**
        *The position of the icon in relation to the label. Defaults to 'left'
    */
    iconPosition?: 'left' | 'right',
    /**
        *Additional styles to apply to the button
    */
    style?: StyleProp<ViewStyle>,
    /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
    /**
        *Determines what the opacity of the wrapped view should be when touch is active. Defaults to 1.
    */
        activeOpacity?:number,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['button'])>

}

export type CheckBoxProps = {
    /**
        *Callback function to be called when the value of a check box component changes
    */
    onChange?: (event: boolean) => void
    /**
        *Callback function to be called when the checkbox component is pressed
    */
    onPress?: (event: boolean) => void
    /**
        *Additional styles to apply to the check box
    */
    style?: StyleProp<ViewStyle>
    /**
        *The value of the check box. Defaults to false
    */
    value?: boolean | undefined
    /**
        *Whether the press behavior is disabled
    */
    disabled?: boolean,
     /**
        *Variant of the text input. Defaults to 'circular'
    */
        variant?:'circular' |'rectangular'
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['checkbox'])>
}

export type ChipProps = {
    /**
        *The label to display on the chip
    */
    label?: string,
    /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to the chip
    */
    style?: StyleProp<ViewStyle>,
    /**
        *The value of the chip. Defaults to false
    */
    value?: boolean,
    /**
        *Additional element to apply to left side of the chip
    */
    left?:(event:boolean)=> React.ReactElement,
    /**
        *Additional element to apply to right side of the chip
    */
    right?:(event:boolean)=> React.ReactElement,
    /**
        *The size of the chip. Defaults to 'small'
    */
    size?: 'large' | 'medium' | 'small',
    /**
        *Callback function to be called when the value of a chip component changes
    */
    onChange?: (event: boolean) => void,
    /**
        *Whether the press behavior is disabled
    */
    disabled?: boolean,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['chip'])>
}

export type DividerProps = {
    /**
        *Additional styles to apply to the divider border style. Defaults to 'solid'
    */
    variant?: 'solid' | 'dotted' | 'dashed'
    /**
        *Width of divider
    */
    width?: DimensionValue,
    /**
        *Additional styles to apply to the divider.
    */
    style?: StyleProp<ViewStyle>
    /**
        *Border width to be apply to the divider
    */
    borderWidth?:number,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<DeepPartial<(ComponentThemeType['divider'])>>
}

export type DrowdownProps = {
    /**
        *The size of the dropdown. Defaults to 'medium'
    */
    size?: 'large' | 'medium' | 'small',
    /**
        *Whether to include a "Select All" option in the dropdown. Defaults to false
    */
    selectall?: boolean,
    /**
        *Whether the press behavior is disabled
    */
    disabled?: boolean | undefined,
    /**
        *The number of items to display in the button
    */
    displayLength?: number,
    /**
        *An array of objects or strings to be used as options in the dropdown
    */
    data: Array<any>,
    /**
        *Additional styles to apply to the dropdown button
    */
    buttonStyle?: StyleProp<ViewStyle>,
    /**
        *A function that takes an item from the data array and returns a value to be displayed in the dropdown
    */
    displayedRowValue: (item: any) => any,
    /**
        *A function that takes an item from the data array and returns a value to be displayed on the dropdown button
    */
    displayedButtonValue: (item: any) => any,
    /**
        *Additional styles to be applied to the dropdown container
    */
    containerStyle?: StyleProp<ViewStyle>
    /**
        *The default text to be displayed on the dropdown button when no options are selected
    */
    buttonTitle?: string,
    /**
        *Additional styles to apply to each item in the dropdown
    */
    rowStyle?: StyleProp<ViewStyle>
    /**
        *Function to be called whenever an item is selected in the dropdown
    */
    onSelect?: (item: any) => void,
    /**
        *Default value to be pre-selected in the dropdown
    */
        defaultValue?: any,
    /**
        *Additional styles to apply to the text inside each item in the dropdown
    */
    rowTextStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to the text inside the dropdown button
    */
    buttonTextStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to the dropdown list container
    */
    listContainerStyle?: StyleProp<ViewStyle>,
    /**
        *Renders the given React element to the left side
    */
    left?: (event: boolean) => React.ReactNode,
    /**
        *Renders the given React element to the right side
    */
    right?: (event: boolean) => React.ReactNode,
    /**
        *Function to be called whenever submit button pressed
    */
    onComplete?: (item: any) => void,
    /**
        *Controls whether the dropdown component's dropdown menu is positioned automatically. Defaults to true
    */
    autoPosition?: boolean,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['dropdown'])>
     /**
        *The value of the dropdown.
    */
    value?:any
    /**
        *Used to locate this view in end-to-end tests
    */
    testID?: string
}

export type MultipleDropdownProps = DrowdownProps & {
    /**
        *Additional styles to apply to complete selection button label
    */
    completeButtonLabelStyle?:StyleProp<TextStyle>,
    /**
        *Text to be displayed in the complete button
    */
    completeButtonLabel?:string,
    /**
        *Text to be displayed in the selectall button
    */
   selectallButtonLabel?:string,
       /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['multipleDropdown'])>
}
export type DrowdownRouteProps= MultipleDropdownProps& {
    /**
        * Determines whether the dropdown should allow multiple selections. Defaults to false
    */
    multiple?: boolean
}

export type IconProps = {
    /**
        *Name of icon
    */
    name: string;
    /**
        *Color of icon
    */
    color?: string;
    /**
        *Size of icon
    */
    size: number;
    /**
        *Additional styles to apply to the icon
    */
    style?: ViewStyle,
    /**
        *Specifies whether fonts should scale to respect Text Size accessibility settings. Defaults to true
    */
    allowFontScaling?: boolean;
};

export type IconComponentProps =
    TextProps & {
    /**
        *Name of icon
    */
        name: string;
        /**
        *Color of icon
    */
        color?: string;
        /**
        *Size of icon
    */
        size: number;
    /**
     * Determines whether the icon responds to pointer events.
     *
     * - `"auto"`: The default value. The behavior is determined by the parent component's pointerEvents property.
     * - `"none"`: The icon does not respond to pointer events.
     * - `"box-only"`: The icon only responds to pointer events on the
     * box surrounding it. The icon itself does not respond to pointer events.
     * - `"box-none"`: The icon does not respond to pointer events on
     * the box surrounding it, but its children can respond to pointer events.
     */
        pointerEvents?: ViewProps['pointerEvents'];
    };

export type SwitchProps={
    /**
        *The theme to use for the component
    */
        theme?: DeepPartial<(ComponentThemeType['switch'])>
    }

export type MenuProps = {
    /**
     * Items to be listed in the menu
     *
     * - `"label"`: The label to display on the menu item
     * - `"left"`: Renders the given React element to the left side of the menu item
     * - `"right"`: Renders the given React element to the right side of the menu item
     * - `"onPress"`: Callback function to be called when the menu item component is pressed
     */
    items: Array<{ label: string, left?: React.ReactNode, right?: React.ReactNode, onPress?: () => void }>,
    /**
        *Additional styles to apply to the menu container
    */
    containerStyle?: StyleProp<ViewStyle>,
    /**
        *Additional styles to apply to each the row text

    */
    rowTextStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to the menu
    */
    menuStyle?: ViewStyle,
    /**
        *Used to open or close the menu
    */
    button?: (event: boolean) => React.ReactNode,
    /**
        *Additional styles to apply to each row container
    */
    rowStyle?: StyleProp<ViewStyle>,
    /**
        *Specifies whether it should close when an option is selected
    */
    closeOnPress?: boolean,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['menu'])>
}
export type ProgressBarProps = {
    /**
        *The progress value as a percentage. Defaults to 0
    */
    progress?: number,
    /**
        *Additional styles to apply to the progress
    */
    progressStyle?: StyleProp<ViewStyle>,
    /**
        *Used to locate this view in end-to-end tests
    */
    testID?: string,
    /**
        *Additional styles to apply to the progress bar
    */
    barStyle?: StyleProp<ViewStyle>,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['progressBar'])>
}

export type RadioButtonProps = {
    /**
        *Callback function to be called when the value of radio button component changes
    */
    onChange: (event: boolean) => void
    /**
        *Additional styles to apply to the radio button container
    */
    style?: StyleProp<ViewStyle>,
    /**
        *Used to locate this view in end-to-end tests
    */
    testID?: string,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['radioButton'])>
}

export type SearchBarProps = {
    size?: 'small' | 'medium' | 'large',
    style?: StyleProp<ViewStyle>,
    value?: string
    filterPattern: (text: string) => Array<any>,
    filterOnChange: (event: any) => any;
}

export type SliderProps = {
     /**
        *Additional styles to apply to the slider container
    */
        containerStyle?: StyleProp<ViewStyle>,
    /**
        *Determines whether to show the percentage indicator above the slider button
     */
    showPercentage?: boolean
    /**
        *Callback function that is called when the user releases the slider button
    */
    onChangeEnd: (value: number) => void
    /**
        *The initial value of the slider
    */
    defaultValue?: number
    /**
        *Additional styles to apply to the slider button
    */
    buttonStyle?: StyleProp<ViewStyle>
    /**
        *Additional styles to apply to the slider bar
    */
    barStyle?: StyleProp<ViewStyle>
    /**
        *Additional styles to apply to the progress bar
    */
    progressStyle?: StyleProp<ViewStyle>
    /**
        *The theme to use for the component
     */
    theme?: DeepPartial<(ComponentThemeType['slider'])>
}

export type ActionProps = {
    /**
        *The label to display on the swipe action button
    */
    label?: string,
    /**
        *Additional styles to apply to the swipe action button
    */
    style?: StyleProp<ViewStyle>,
    /**
        *Used to add icon to swipe action button
    */
    icon?: React.ReactNode,
    /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
    /**
        *Callback function to be called when the swipe action button is pressed
    */
    onPress?: (ref: React.RefObject<Swipeable>) => void
}

export type SwipeProps = {
     /**
        *The content to be wrapped by the Swipeable component
    */
    children?: any,
     /**
        *Determines whether to use a rounded border radius on the component. Defaults to 'no-radius'
    */
    variant?: 'radius' | 'no-radius',
     /**
        *An array of objects representing the right swipe actions to be rendered
    */
    rightActions?: Array<ActionProps>,
     /**
        *An object representing the left swipe action to be rendered
    */
    leftAction?: ActionProps,
}

export type RenderRightActionProps = {
    item: ActionProps,
    dragValue: number,
    progress: Animated.AnimatedInterpolation<string | number>,
    index: number
}

export type TextInputProps = {
    /**
        *The size of the text input. Defaults to 'medium'
    */
    size?: 'large' | 'medium' | 'small',
    /**
        *Text to be displayed under the text input
    */
    bottomLabel?: string,
    /**
        *Additional styles to apply to the bottom label
    */
    bottomLabelStyle?: StyleProp<TextStyle>,
    /**
        *Variant of the text input. Defaults to 'filled'
    */
    variant?: 'filled' | 'outlined',
    /**
        *Additional styles to apply to the input container
    */
    inputContainerStyle?: StyleProp<ViewStyle>,
    /**
        *Additional styles to apply to the label container
    */
    labelContainerStyle?: StyleProp<ViewStyle>,
    /**
        *Shows the number of text input characters. Defaults to false
    */
    count?: boolean,
    /**
        *The text to use for the floating label
    */
    label?: string,
    /**
        *Additional styles to apply to the label
    */
    labelStyle?: StyleProp<TextStyle>,
    /**
        *If false, text is not editable. Defaults to true.
    */
    editable?: boolean,
    /**
        *Additional styles to apply to the text input.
    */
    inputStyle?: StyleProp<TextStyle>,
    /**
        *Additional styles to apply to the container
    */
    containerStyle?: StyleProp<ViewStyle>,
    /**
        *Checks error status
    */
    error?: boolean,
    /**
        *Renders the given React element to the left side
    */
    left?:(event:boolean)=> React.ReactNode,
    /**
        *Renders the given React element to the right side
    */
    right?:(event:boolean)=> React.ReactNode,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['textInput'])>
}

export type ToggleButtonProps = {
    /**
     * Array of buttons
     *
     * - `"label"`: The label to display on the toggle button
     * - `"onPress"`: Callback function to be called when the toggle button is pressed
     * - `"id"`:  Id of the toggle button
     */
    buttons: {
        label: string,
        onPress: (event: boolean) => void,
        id?: number
    }[]
    /**
        *The size of the toggle button. Defaults to 'medium'
    */
    size?: 'small' | 'medium',
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['toggleButton'])>
}

export type SpeedDialProps = {
     /**
        *Additional styles to apply to the container
    */
        containerStyle?: StyleProp<ViewStyle>,
    /**
        *Items to be listed in the speed dial.
        *
        * - `"icon"`:  Used to add icon to speeddial item
        * - `"title"`:  The title to display on the speeddial item
        * - `"titleColor"`:  Color of the title to be displayed in the speed dial item
        * - `"backgroundColor"`:  The background color of the speed dial item
        * - `"onPress"`: Callback function to be called when the speed dial item is pressed
    */
    items: Array<{ icon?: React.ReactNode, title?: string,
         titleColor?: string, backgroundColor?: string, onPress?: () => void }>,
    /**
        *Represents the opening animation. Defaults to 'flat'
    */
    variant: 'flat' | 'spread',
    /**
        *Callback function that returns whether the SpeedDial component is on or off
    */
    onChange?: (event: boolean) => void,
    /**
        *Icon of base item
    */
    baseItemIcon?: React.ReactNode,
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['speedDial'])>
};

export type PagerViewProps = {
    ref: React.RefObject<FlatList>,
    children: React.ReactNode
    containerStyle?: StyleProp<ViewStyle>
    pageContainerStyle?: StyleProp<ViewStyle>
    headerSliderStyle?: StyleProp<ViewStyle>,
    headerContainerStyle?: StyleProp<ViewStyle>,
    headerLabelStyle?: StyleProp<TextStyle>,
    theme?: DeepPartial<(ComponentThemeType['pagerView'])>
}
export type ActivityIndicatorProps = {
    /**
        *Loading indicator to display
    */
    children?: React.ReactNode
    /**
        *The theme to use for the component
    */
    theme?: DeepPartial<(ComponentThemeType['activityIndicator'])>
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
    | 'font-awesome-5'
    | 'font-awesome-6';

export type DeepPartial<T> = T extends object ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    } : T;
