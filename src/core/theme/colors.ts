export const COLOR_SYSTEM_LIGHT = {
  system: {
    primary: '#195CEF',
    disabled: '#A8B8DA',
    disabledDark: '#BEC5D4',
    disabledLightDark: '#C9D5EF',
    disabledLight: '#DDE4F3',
    primary5: '#F6F9FF',
    primary15: '#E6EEFF',
    primary30: '#CFDDFF',
    background: '#FFFFFF',
    filled: '#FFFFFF',
  },
  status: {
    focused: '#124CCA',
    secondary: '#FC6736',
    secondaryLight: '#FFF0EB',
    tertiary: '#FCE836',
    error: '#FF0000',
    errorLight: '#FFE6E6',
    success: '#00CE5E',
    successLight: '#E6FBEF',
    warning: '#E2D029',
    warningLight: '#FFFAD0',
  },
  neutral: {
    black: '#1F1F1F',
    lightBlack: '#404040',
    grey: '#9A9A9A',
    default: '#DDDDDD',
    disabledText: '#DFE1E6',
    lightGrey: '#EFF0F3',
    darkWhite: '#FDFCFF',
    white: '#FFFFFF',
  },
  button: {
    disabled: '#A8B8DA',
    disabledText: '#DFE1E6',
    text: '#FFFFFF',
  },
  input: {
    default: '#DDDDDD',
    lightDefault: '#EFF0F3',
    fill: '#FFFFFF',
  },
  custom: {},
};

export const COLOR_SYSTEM_DARK = {
  system: {
    primary: '#195CEF',
    disabled: '#A8B8DA',
    disabledDark: '#BEC5D4',
    disabledLightDark: '#C9D5EF',
    disabledLight: '#DDE4F3',
    primary5: '#F6F9FF',
    primary15: '#E6EEFF',
    primary30: '#CFDDFF',
    background: '#FFFFFF',
    filled: '#FFFFFF',
  },
  status: {
    focused: '#124CCA',
    secondary: '#FC6736',
    secondaryLight: '#FFF0EB',
    tertiary: '#FCE836',
    error: '#FF0000',
    errorLight: '#FFE6E6',
    success: '#00CE5E',
    successLight: '#E6FBEF',
    warning: '#E2D029',
    warningLight: '#FFFAD0',
  },
  neutral: {
    black: '#1F1F1F',
    lightBlack: '#404040',
    grey: '#9A9A9A',
    default: '#DDDDDD',
    disabledText: '#DFE1E6',
    lightGrey: '#EFF0F3',
    darkWhite: '#FDFCFF',
    white: '#FFFFFF',
  },
  button: {
    disabled: '#A8B8DA',
    disabledText: '#DFE1E6',
    text: '#FFFFFF',
  },
  input: {
    default: '#DDDDDD',
    lightDefault: '#EFF0F3',
    fill: '#FFFFFF',
  },
  custom: {},
};

export const COLOR_COMPONENTS_LIGHT = {
  accordionList: {
    default: {
      background: COLOR_SYSTEM_LIGHT.neutral.lightGrey,
      border: COLOR_SYSTEM_LIGHT.neutral.lightGrey,
      label: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM_LIGHT.system.filled,
      collapseIconBackground: COLOR_SYSTEM_LIGHT.system.primary5,
      collapseIcon: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.grey,
      icon: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemChildLabel: COLOR_SYSTEM_LIGHT.neutral.grey,
    },
    active: {
      background: COLOR_SYSTEM_LIGHT.system.primary5,
      border: COLOR_SYSTEM_LIGHT.neutral.lightGrey,
      label: COLOR_SYSTEM_LIGHT.system.primary,
      itemBackground: COLOR_SYSTEM_LIGHT.system.filled,
      collapseIconBackground: COLOR_SYSTEM_LIGHT.system.primary15,
      collapseIcon: COLOR_SYSTEM_LIGHT.system.primary,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.grey,
      icon: COLOR_SYSTEM_LIGHT.system.primary,
      itemChildLabel: COLOR_SYSTEM_LIGHT.system.primary,
    },
  },
  avatar: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.primary15,
      label: COLOR_SYSTEM_LIGHT.system.primary,
    },
  },
  avatarGroup: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.primary15,
      label: COLOR_SYSTEM_LIGHT.system.primary,
      moreBackground: COLOR_SYSTEM_LIGHT.status.secondary,
      morelabel: COLOR_SYSTEM_LIGHT.button.text,
    },
  },
  badge: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
      label: COLOR_SYSTEM_LIGHT.button.text,
      border: COLOR_SYSTEM_LIGHT.system.filled,
    },
  },
  button: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
      label: COLOR_SYSTEM_LIGHT.button.text,
      icon: COLOR_SYSTEM_LIGHT.button.text,
    },
    pressed: {
      background: COLOR_SYSTEM_LIGHT.status.focused,
      label: COLOR_SYSTEM_LIGHT.button.text,
      icon: COLOR_SYSTEM_LIGHT.button.text,
    },
    disabled: {
      background: COLOR_SYSTEM_LIGHT.button.disabled,
      label: COLOR_SYSTEM_LIGHT.button.disabledText,
      icon: COLOR_SYSTEM_LIGHT.button.disabledText,
    },
  },
  checkbox: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.system.primary,
      icon: COLOR_SYSTEM_LIGHT.button.text,
    },
    filled: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
      border: COLOR_SYSTEM_LIGHT.system.primary,
      icon: COLOR_SYSTEM_LIGHT.button.text,
    },
    disabled: {
      background: COLOR_SYSTEM_LIGHT.neutral.default,
      border: COLOR_SYSTEM_LIGHT.neutral.default,
      icon: COLOR_SYSTEM_LIGHT.neutral.darkWhite,
    },
  },
  chip: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.system.primary,
      icon: COLOR_SYSTEM_LIGHT.system.primary,
      label: COLOR_SYSTEM_LIGHT.system.primary,
    },
    active: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
      border: COLOR_SYSTEM_LIGHT.system.primary,
      icon: COLOR_SYSTEM_LIGHT.button.text,
      label: COLOR_SYSTEM_LIGHT.button.text,
    },
    disabled: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.system.disabledDark,
      icon: COLOR_SYSTEM_LIGHT.system.disabledDark,
      label: COLOR_SYSTEM_LIGHT.system.disabledDark,
    },
  },
  divider: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
    },
  },
  dropdown: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.neutral.default,
      label: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      collapseIcon: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM_LIGHT.system.background,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
    },
    active: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.status.focused,
      label: COLOR_SYSTEM_LIGHT.status.focused,
      collapseIcon: COLOR_SYSTEM_LIGHT.system.primary,
      itemBackground: COLOR_SYSTEM_LIGHT.system.background,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
    },
    selected: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.neutral.default,
      label: COLOR_SYSTEM_LIGHT.system.primary,
      collapseIcon: COLOR_SYSTEM_LIGHT.system.primary,
      itemBackground: COLOR_SYSTEM_LIGHT.system.primary5,
      itemLabel: COLOR_SYSTEM_LIGHT.system.primary,
    },

  },
  multipleDropdown: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.neutral.default,
      label: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      collapseIcon: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM_LIGHT.system.background,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM_LIGHT.system.primary,
      completeBackground: COLOR_SYSTEM_LIGHT.system.primary,
      completeLabel: COLOR_SYSTEM_LIGHT.button.text,
      checkIcon: COLOR_SYSTEM_LIGHT.button.text,
      checkBackground: COLOR_SYSTEM_LIGHT.system.primary,
      checkBorder: COLOR_SYSTEM_LIGHT.system.primary,
    },
    active: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.status.focused,
      label: COLOR_SYSTEM_LIGHT.status.focused,
      collapseIcon: COLOR_SYSTEM_LIGHT.system.primary,
      itemBackground: COLOR_SYSTEM_LIGHT.system.background,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM_LIGHT.system.primary,
      completeBackground: COLOR_SYSTEM_LIGHT.system.primary,
      completeLabel: COLOR_SYSTEM_LIGHT.button.text,
      checkIcon: COLOR_SYSTEM_LIGHT.button.text,
      checkBackground: COLOR_SYSTEM_LIGHT.system.filled,
      checkBorder: COLOR_SYSTEM_LIGHT.system.primary,

    },
    selected: {
      background: COLOR_SYSTEM_LIGHT.system.background,
      border: COLOR_SYSTEM_LIGHT.neutral.default,
      label: COLOR_SYSTEM_LIGHT.system.primary,
      collapseIcon: COLOR_SYSTEM_LIGHT.system.primary,
      itemBackground: COLOR_SYSTEM_LIGHT.system.primary5,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM_LIGHT.system.primary,
      completeBackground: COLOR_SYSTEM_LIGHT.system.primary,
      completeLabel: COLOR_SYSTEM_LIGHT.button.text,
      checkIcon: COLOR_SYSTEM_LIGHT.button.text,
      checkBackground: COLOR_SYSTEM_LIGHT.system.primary,
      checkBorder: COLOR_SYSTEM_LIGHT.system.primary,

    },

  },
  menu: {
    default: {
      icon: COLOR_SYSTEM_LIGHT.neutral.grey,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM_LIGHT.system.filled,
      divider: COLOR_SYSTEM_LIGHT.system.primary5,
    },
    active: {
      icon: COLOR_SYSTEM_LIGHT.system.primary,
      itemLabel: COLOR_SYSTEM_LIGHT.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM_LIGHT.system.filled,
      divider: COLOR_SYSTEM_LIGHT.system.primary5,

    },
  },
  progressBar: {
    default: {
      progress: COLOR_SYSTEM_LIGHT.system.primary,
      bar: COLOR_SYSTEM_LIGHT.system.primary15,
    },
  },
  pagerView: {
    default: {
      headerBackground: COLOR_SYSTEM_LIGHT.system.primary5,
      headerLabel: COLOR_SYSTEM_LIGHT.system.primary,
    },
    active: {
      headerBackground: COLOR_SYSTEM_LIGHT.system.primary,
      headerLabel: COLOR_SYSTEM_LIGHT.button.text,
    },
  },
  switch: {
    default: {
      track: COLOR_SYSTEM_LIGHT.system.disabledLight,
      thumb: COLOR_SYSTEM_LIGHT.system.filled,
    },
    active: {
      track: COLOR_SYSTEM_LIGHT.system.primary,
      thumb: COLOR_SYSTEM_LIGHT.system.filled,
    },
  },
  speedDial: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
      icon: COLOR_SYSTEM_LIGHT.button.text,
    },
  },
  toggleButton: {
    default: {
      background: COLOR_SYSTEM_LIGHT.system.filled,
      label: COLOR_SYSTEM_LIGHT.system.primary,
      border: COLOR_SYSTEM_LIGHT.system.primary,
    },
    active: {
      background: COLOR_SYSTEM_LIGHT.system.primary,
      label: COLOR_SYSTEM_LIGHT.button.text,
      border: COLOR_SYSTEM_LIGHT.system.primary,
    },
  },
  radioButton: {
    default: {
      background: COLOR_SYSTEM_LIGHT.neutral.lightGrey,
      dot: COLOR_SYSTEM_LIGHT.system.primary,
      border: COLOR_SYSTEM_LIGHT.system.disabledLightDark,
    },
    active: {
      background: COLOR_SYSTEM_LIGHT.button.text,
      dot: COLOR_SYSTEM_LIGHT.system.primary,
      border: COLOR_SYSTEM_LIGHT.system.primary,
    },
  },
};

export const DEFAULT_THEME = {
  dark: { ...COLOR_SYSTEM_DARK, components: COLOR_COMPONENTS_LIGHT },
  light: { ...COLOR_SYSTEM_LIGHT, components: COLOR_COMPONENTS_LIGHT },
};
