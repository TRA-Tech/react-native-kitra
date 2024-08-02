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
    primary: '#3B79FF',
    disabled: '#252F54',
    disabledDark: '#445284',
    disabledLightDark: '#1B1E2B',
    disabledLight: '#252F54',
    primary5: '#21273E',
    primary15: '#323A5E',
    primary30: '#A9B6D7',
    background: '#171922',
    filled: '#171922',
  },
  status: {
    focused: '#124CCA',
    secondary: '#FC6736',
    secondaryLight: '#452926',
    tertiary: '#EED815',
    error: '#FF0000',
    errorLight: '#42171D',
    success: '#01BA55',
    successLight: '#123D2E',
    warning: '#E2D029',
    warningLight: '#403E23',
  },
  neutral: {
    black: '#FFFFFF',
    lightBlack: '#ECECEC',
    grey: '#9F9F9F',
    default: '#4C526E',
    disabledText: '#848EA2',
    lightGrey: '#2A303D',
    darkWhite: '#848EA2',
    white: '#1F1F1F',
  },
  button: {
    disabled: '#2D375D',
    disabledText: '#6D738A',
    text: '#FFFFFF',
  },
  input: {
    default: '#757575',
    lightDefault: '#2B2F3E',
    fill: '#171922',
  },
  custom: {},
};

export const COLOR_COMPONENTS_LIGHT = (COLOR_SYSTEM:{colors:typeof COLOR_SYSTEM_LIGHT}) => (
  ({
    accordionList: {
      default: {
        background: COLOR_SYSTEM.colors.neutral.lightGrey,
        label: COLOR_SYSTEM.colors.neutral.lightBlack,
        itemBackground: COLOR_SYSTEM.colors.system.filled,
        collapseIconBackground: COLOR_SYSTEM.colors.system.primary5,
        collapseIcon: COLOR_SYSTEM.colors.neutral.lightBlack,
        itemLabel: COLOR_SYSTEM.colors.neutral.grey,
      },
      active: {
        background: COLOR_SYSTEM.colors.system.primary5,
        label: COLOR_SYSTEM.colors.system.primary,
        itemBackground: COLOR_SYSTEM.colors.system.filled,
        collapseIconBackground: COLOR_SYSTEM.colors.system.primary15,
        collapseIcon: COLOR_SYSTEM.colors.system.primary,
        itemLabel: COLOR_SYSTEM.colors.neutral.grey,
      },
    },
    activityIndicator: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary5,
        indicator: COLOR_SYSTEM.colors.system.primary,
      },
    },
    avatar: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary15,
        label: COLOR_SYSTEM.colors.system.primary,
      },
    },
    avatarGroup: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary15,
        label: COLOR_SYSTEM.colors.system.primary,
        moreBackground: COLOR_SYSTEM.colors.status.secondary,
        morelabel: COLOR_SYSTEM.colors.button.text,
      },
    },
    badge: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary,
        label: COLOR_SYSTEM.colors.button.text,
        border: COLOR_SYSTEM.colors.system.filled,
      },
    },
    button: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary,
        label: COLOR_SYSTEM.colors.button.text,
      },
      pressed: {
        background: COLOR_SYSTEM.colors.status.focused,
        label: COLOR_SYSTEM.colors.button.text,
      },
      disabled: {
        background: COLOR_SYSTEM.colors.button.disabled,
        label: COLOR_SYSTEM.colors.button.disabledText,
      },
    },
    checkbox: {
      default: {
        background: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.system.primary,
        icon: COLOR_SYSTEM.colors.button.text,
      },
      filled: {
        background: COLOR_SYSTEM.colors.system.primary,
        border: COLOR_SYSTEM.colors.system.primary,
        icon: COLOR_SYSTEM.colors.button.text,
      },
      disabled: {
        background: COLOR_SYSTEM.colors.neutral.default,
        border: COLOR_SYSTEM.colors.neutral.default,
        icon: COLOR_SYSTEM.colors.neutral.darkWhite,
      },
    },
    chip: {
      default: {
        background: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.system.primary,
        label: COLOR_SYSTEM.colors.system.primary,
      },
      active: {
        background: COLOR_SYSTEM.colors.system.primary,
        border: COLOR_SYSTEM.colors.system.primary,
        label: COLOR_SYSTEM.colors.button.text,
      },
      disabled: {
        background: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.system.disabledDark,
        label: COLOR_SYSTEM.colors.system.disabledDark,
      },
    },
    divider: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary,
      },
    },
    dropdown: {
      default: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.neutral.default,
        background: COLOR_SYSTEM.colors.system.filled,
        label: COLOR_SYSTEM.colors.neutral.lightBlack,
        collapseIcon: COLOR_SYSTEM.colors.neutral.lightBlack,
        itemBackground: COLOR_SYSTEM.colors.system.background,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      },
      active: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.status.focused,
        background: COLOR_SYSTEM.colors.system.filled,
        label: COLOR_SYSTEM.colors.status.focused,
        collapseIcon: COLOR_SYSTEM.colors.system.primary,
        itemBackground: COLOR_SYSTEM.colors.system.background,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      },
      selected: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.neutral.default,
        background: COLOR_SYSTEM.colors.system.filled,
        label: COLOR_SYSTEM.colors.system.primary,
        collapseIcon: COLOR_SYSTEM.colors.system.primary,
        itemBackground: COLOR_SYSTEM.colors.system.primary5,
        itemLabel: COLOR_SYSTEM.colors.system.primary,
      },
      disabled: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.input.lightDefault,
        background: COLOR_SYSTEM.colors.input.lightDefault,
        label: COLOR_SYSTEM.colors.neutral.grey,
        collapseIcon: COLOR_SYSTEM.colors.neutral.grey,
        itemBackground: COLOR_SYSTEM.colors.neutral.lightGrey,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightGrey,
      },

    },
    multipleDropdown: {
      default: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        background: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.neutral.default,
        label: COLOR_SYSTEM.colors.neutral.lightBlack,
        collapseIcon: COLOR_SYSTEM.colors.neutral.lightBlack,
        itemBackground: COLOR_SYSTEM.colors.system.background,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        selectAllLabel: COLOR_SYSTEM.colors.system.primary,
        completeBackground: COLOR_SYSTEM.colors.system.primary,
        completeLabel: COLOR_SYSTEM.colors.button.text,
        checkIcon: COLOR_SYSTEM.colors.button.text,
        checkBackground: COLOR_SYSTEM.colors.system.primary,
        checkBorder: COLOR_SYSTEM.colors.system.primary,
      },
      active: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        background: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.status.focused,
        label: COLOR_SYSTEM.colors.status.focused,
        collapseIcon: COLOR_SYSTEM.colors.system.primary,
        itemBackground: COLOR_SYSTEM.colors.system.background,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        selectAllLabel: COLOR_SYSTEM.colors.system.primary,
        completeBackground: COLOR_SYSTEM.colors.system.primary,
        completeLabel: COLOR_SYSTEM.colors.button.text,
        checkIcon: COLOR_SYSTEM.colors.button.text,
        checkBackground: COLOR_SYSTEM.colors.system.filled,
        checkBorder: COLOR_SYSTEM.colors.system.primary,

      },
      selected: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        background: COLOR_SYSTEM.colors.system.background,
        border: COLOR_SYSTEM.colors.neutral.default,
        label: COLOR_SYSTEM.colors.system.primary,
        collapseIcon: COLOR_SYSTEM.colors.system.primary,
        itemBackground: COLOR_SYSTEM.colors.system.primary5,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        selectAllLabel: COLOR_SYSTEM.colors.system.primary,
        completeBackground: COLOR_SYSTEM.colors.system.primary,
        completeLabel: COLOR_SYSTEM.colors.button.text,
        checkIcon: COLOR_SYSTEM.colors.button.text,
        checkBackground: COLOR_SYSTEM.colors.system.primary,
        checkBorder: COLOR_SYSTEM.colors.system.primary,

      },
      disabled: {
        collapseBackground: COLOR_SYSTEM.colors.system.background,
        background: COLOR_SYSTEM.colors.input.lightDefault,
        border: COLOR_SYSTEM.colors.input.lightDefault,
        label: COLOR_SYSTEM.colors.neutral.grey,
        collapseIcon: COLOR_SYSTEM.colors.neutral.grey,
        itemBackground: COLOR_SYSTEM.colors.system.background,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        selectAllLabel: COLOR_SYSTEM.colors.system.primary,
        completeBackground: COLOR_SYSTEM.colors.system.primary,
        completeLabel: COLOR_SYSTEM.colors.button.text,
        checkIcon: COLOR_SYSTEM.colors.button.text,
        checkBackground: COLOR_SYSTEM.colors.system.primary,
        checkBorder: COLOR_SYSTEM.colors.system.primary,

      },
    },
    menu: {
      default: {
        icon: COLOR_SYSTEM.colors.neutral.grey,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        itemBackground: COLOR_SYSTEM.colors.system.filled,
        divider: COLOR_SYSTEM.colors.system.primary5,
      },
      active: {
        icon: COLOR_SYSTEM.colors.system.primary,
        itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        itemBackground: COLOR_SYSTEM.colors.system.filled,
        divider: COLOR_SYSTEM.colors.system.primary5,

      },
    },
    progressBar: {
      default: {
        progress: COLOR_SYSTEM.colors.system.primary,
        bar: COLOR_SYSTEM.colors.system.primary15,
      },
    },
    pagerView: {
      default: {
        headerBackground: COLOR_SYSTEM.colors.system.primary5,
        headerLabel: COLOR_SYSTEM.colors.system.primary,
      },
      active: {
        headerBackground: COLOR_SYSTEM.colors.system.primary,
        headerLabel: COLOR_SYSTEM.colors.button.text,
      },
    },
    switch: {
      default: {
        track: COLOR_SYSTEM.colors.system.disabledLight,
        thumb: COLOR_SYSTEM.colors.button.text,
      },
      active: {
        track: COLOR_SYSTEM.colors.system.primary,
        thumb: COLOR_SYSTEM.colors.button.text,
      },
    },
    slider: {
      default: {
        thumb: COLOR_SYSTEM.colors.button.text,
        progress: COLOR_SYSTEM.colors.system.primary,
        bar: COLOR_SYSTEM.colors.system.primary15,
        percentageBackground: COLOR_SYSTEM.colors.system.primary,
        percentageLabel: COLOR_SYSTEM.colors.button.text,
      },
    },
    speedDial: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary,
        icon: COLOR_SYSTEM.colors.button.text,
      },
    },
    toggleButton: {
      default: {
        background: COLOR_SYSTEM.colors.system.primary5,
        label: COLOR_SYSTEM.colors.system.primary,
        border: COLOR_SYSTEM.colors.system.primary,
      },
      active: {
        background: COLOR_SYSTEM.colors.system.primary,
        label: COLOR_SYSTEM.colors.button.text,
        border: COLOR_SYSTEM.colors.system.primary,
      },
    },
    radioButton: {
      default: {
        background: COLOR_SYSTEM.colors.neutral.lightGrey,
        dot: COLOR_SYSTEM.colors.system.primary,
        border: COLOR_SYSTEM.colors.system.disabledLightDark,
      },
      active: {
        background: COLOR_SYSTEM.colors.button.text,
        dot: COLOR_SYSTEM.colors.system.primary,
        border: COLOR_SYSTEM.colors.system.primary,
      },
    },
    textInput: {
      default: {
        background: COLOR_SYSTEM.colors.input.fill,
        border: COLOR_SYSTEM.colors.input.default,
        label: COLOR_SYSTEM.colors.neutral.lightBlack,
        value: COLOR_SYSTEM.colors.neutral.black,
        bottomLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        countLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      },
      focused: {
        background: COLOR_SYSTEM.colors.input.fill,
        border: COLOR_SYSTEM.colors.status.focused,
        label: COLOR_SYSTEM.colors.neutral.lightBlack,
        value: COLOR_SYSTEM.colors.neutral.black,
        bottomLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
        countLabel: COLOR_SYSTEM.colors.neutral.lightBlack,

      },
      disabled: {
        background: COLOR_SYSTEM.colors.input.lightDefault,
        border: COLOR_SYSTEM.colors.input.lightDefault,
        label: COLOR_SYSTEM.colors.neutral.grey,
        value: COLOR_SYSTEM.colors.neutral.grey,
        bottomLabel: COLOR_SYSTEM.colors.neutral.grey,
        countLabel: COLOR_SYSTEM.colors.neutral.grey,
      },
      error: {
        background: COLOR_SYSTEM.colors.input.fill,
        border: COLOR_SYSTEM.colors.status.error,
        label: COLOR_SYSTEM.colors.neutral.lightBlack,
        value: COLOR_SYSTEM.colors.neutral.black,
        bottomLabel: COLOR_SYSTEM.colors.status.error,
        countLabel: COLOR_SYSTEM.colors.neutral.lightBlack,

      },
    },
  })
);

export const COLOR_COMPONENTS_DARK = (COLOR_SYSTEM:{colors:typeof COLOR_SYSTEM_DARK}) => ({
  accordionList: {
    default: {
      background: COLOR_SYSTEM.colors.neutral.lightGrey,
      label: COLOR_SYSTEM.colors.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM.colors.system.filled,
      collapseIconBackground: COLOR_SYSTEM.colors.system.primary5,
      collapseIcon: COLOR_SYSTEM.colors.neutral.lightBlack,
      itemLabel: COLOR_SYSTEM.colors.neutral.grey,
    },
    active: {
      background: COLOR_SYSTEM.colors.system.primary5,
      label: COLOR_SYSTEM.colors.system.primary,
      itemBackground: COLOR_SYSTEM.colors.system.filled,
      collapseIconBackground: COLOR_SYSTEM.colors.system.primary15,
      collapseIcon: COLOR_SYSTEM.colors.system.primary,
      itemLabel: COLOR_SYSTEM.colors.neutral.grey,
    },
  },
  activityIndicator: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary5,
      indicator: COLOR_SYSTEM.colors.system.primary,
    },
  },
  avatar: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary15,
      label: COLOR_SYSTEM.colors.system.primary,
    },
  },
  avatarGroup: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary15,
      label: COLOR_SYSTEM.colors.system.primary,
      moreBackground: COLOR_SYSTEM.colors.status.secondary,
      morelabel: COLOR_SYSTEM.colors.button.text,
    },
  },
  badge: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary,
      label: COLOR_SYSTEM.colors.button.text,
      border: COLOR_SYSTEM.colors.system.filled,
    },
  },
  button: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary,
      label: COLOR_SYSTEM.colors.button.text,
    },
    pressed: {
      background: COLOR_SYSTEM.colors.status.focused,
      label: COLOR_SYSTEM.colors.button.text,
    },
    disabled: {
      background: COLOR_SYSTEM.colors.button.disabled,
      label: COLOR_SYSTEM.colors.button.disabledText,
    },
  },
  checkbox: {
    default: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.system.primary,
      icon: COLOR_SYSTEM.colors.button.text,
    },
    filled: {
      background: COLOR_SYSTEM.colors.system.primary,
      border: COLOR_SYSTEM.colors.system.primary,
      icon: COLOR_SYSTEM.colors.button.text,
    },
    disabled: {
      background: COLOR_SYSTEM.colors.neutral.default,
      border: COLOR_SYSTEM.colors.neutral.default,
      icon: COLOR_SYSTEM.colors.neutral.darkWhite,
    },
  },
  chip: {
    default: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.system.primary,
      label: COLOR_SYSTEM.colors.system.primary,
    },
    active: {
      background: COLOR_SYSTEM.colors.system.primary,
      border: COLOR_SYSTEM.colors.system.primary,
      label: COLOR_SYSTEM.colors.button.text,
    },
    disabled: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.system.disabledDark,
      label: COLOR_SYSTEM.colors.system.disabledDark,
    },
  },
  divider: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary,
    },
  },
  dropdown: {
    default: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.neutral.default,
      label: COLOR_SYSTEM.colors.neutral.lightBlack,
      collapseIcon: COLOR_SYSTEM.colors.neutral.lightBlack,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.background,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
    },
    active: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.status.focused,
      label: COLOR_SYSTEM.colors.status.focused,
      collapseIcon: COLOR_SYSTEM.colors.system.primary,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.background,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
    },
    selected: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.neutral.default,
      label: COLOR_SYSTEM.colors.system.primary,
      collapseIcon: COLOR_SYSTEM.colors.system.primary,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.primary5,
      itemLabel: COLOR_SYSTEM.colors.system.primary,
    },
    disabled: {
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.input.lightDefault,
      background: COLOR_SYSTEM.colors.input.lightDefault,
      label: COLOR_SYSTEM.colors.neutral.grey,
      collapseIcon: COLOR_SYSTEM.colors.neutral.grey,
      itemBackground: COLOR_SYSTEM.colors.neutral.lightGrey,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightGrey,
    },

  },
  multipleDropdown: {
    default: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.neutral.default,
      label: COLOR_SYSTEM.colors.neutral.lightBlack,
      collapseIcon: COLOR_SYSTEM.colors.neutral.lightBlack,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.background,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM.colors.system.primary,
      completeBackground: COLOR_SYSTEM.colors.system.primary,
      completeLabel: COLOR_SYSTEM.colors.button.text,
      checkIcon: COLOR_SYSTEM.colors.button.text,
      checkBackground: COLOR_SYSTEM.colors.system.primary,
      checkBorder: COLOR_SYSTEM.colors.system.primary,
    },
    active: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.status.focused,
      label: COLOR_SYSTEM.colors.status.focused,
      collapseIcon: COLOR_SYSTEM.colors.system.primary,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.background,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM.colors.system.primary,
      completeBackground: COLOR_SYSTEM.colors.system.primary,
      completeLabel: COLOR_SYSTEM.colors.button.text,
      checkIcon: COLOR_SYSTEM.colors.button.text,
      checkBackground: COLOR_SYSTEM.colors.system.filled,
      checkBorder: COLOR_SYSTEM.colors.system.primary,

    },
    selected: {
      background: COLOR_SYSTEM.colors.system.background,
      border: COLOR_SYSTEM.colors.neutral.default,
      label: COLOR_SYSTEM.colors.system.primary,
      collapseIcon: COLOR_SYSTEM.colors.system.primary,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.primary5,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM.colors.system.primary,
      completeBackground: COLOR_SYSTEM.colors.system.primary,
      completeLabel: COLOR_SYSTEM.colors.button.text,
      checkIcon: COLOR_SYSTEM.colors.button.text,
      checkBackground: COLOR_SYSTEM.colors.system.primary,
      checkBorder: COLOR_SYSTEM.colors.system.primary,
    },
    disabled: {
      background: COLOR_SYSTEM.colors.input.lightDefault,
      border: COLOR_SYSTEM.colors.input.lightDefault,
      label: COLOR_SYSTEM.colors.neutral.grey,
      collapseIcon: COLOR_SYSTEM.colors.neutral.grey,
      collapseBackground: COLOR_SYSTEM.colors.system.background,
      itemBackground: COLOR_SYSTEM.colors.system.background,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      selectAllLabel: COLOR_SYSTEM.colors.system.primary,
      completeBackground: COLOR_SYSTEM.colors.system.primary,
      completeLabel: COLOR_SYSTEM.colors.button.text,
      checkIcon: COLOR_SYSTEM.colors.button.text,
      checkBackground: COLOR_SYSTEM.colors.system.primary,
      checkBorder: COLOR_SYSTEM.colors.system.primary,
    },

  },
  menu: {
    default: {
      icon: COLOR_SYSTEM.colors.neutral.grey,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM.colors.system.filled,
      divider: COLOR_SYSTEM.colors.system.primary5,
    },
    active: {
      icon: COLOR_SYSTEM.colors.system.primary,
      itemLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      itemBackground: COLOR_SYSTEM.colors.system.filled,
      divider: COLOR_SYSTEM.colors.system.primary5,

    },
  },
  progressBar: {
    default: {
      progress: COLOR_SYSTEM.colors.system.primary,
      bar: COLOR_SYSTEM.colors.system.primary15,
    },
  },
  pagerView: {
    default: {
      headerBackground: COLOR_SYSTEM.colors.system.primary5,
      headerLabel: COLOR_SYSTEM.colors.system.primary,
    },
    active: {
      headerBackground: COLOR_SYSTEM.colors.system.primary,
      headerLabel: COLOR_SYSTEM.colors.button.text,
    },
  },
  switch: {
    default: {
      track: COLOR_SYSTEM.colors.system.disabledLight,
      thumb: COLOR_SYSTEM.colors.button.text,
    },
    active: {
      track: COLOR_SYSTEM.colors.system.primary,
      thumb: COLOR_SYSTEM.colors.button.text,
    },
  },
  slider: {
    default: {
      thumb: COLOR_SYSTEM.colors.button.text,
      progress: COLOR_SYSTEM.colors.system.primary,
      bar: COLOR_SYSTEM.colors.system.primary15,
      percentageBackground: COLOR_SYSTEM.colors.system.primary,
      percentageLabel: COLOR_SYSTEM.colors.button.text,
    },
  },
  speedDial: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary,
      icon: COLOR_SYSTEM.colors.button.text,
    },
  },
  toggleButton: {
    default: {
      background: COLOR_SYSTEM.colors.system.primary5,
      label: COLOR_SYSTEM.colors.system.primary,
      border: COLOR_SYSTEM.colors.system.primary,
    },
    active: {
      background: COLOR_SYSTEM.colors.system.primary,
      label: COLOR_SYSTEM.colors.button.text,
      border: COLOR_SYSTEM.colors.system.primary,
    },
  },
  radioButton: {
    default: {
      background: COLOR_SYSTEM.colors.neutral.lightGrey,
      dot: COLOR_SYSTEM.colors.system.primary,
      border: COLOR_SYSTEM.colors.system.disabledLightDark,
    },
    active: {
      background: COLOR_SYSTEM.colors.button.text,
      dot: COLOR_SYSTEM.colors.system.primary,
      border: COLOR_SYSTEM.colors.system.primary,
    },
  },
  textInput: {
    default: {
      background: COLOR_SYSTEM.colors.input.fill,
      border: COLOR_SYSTEM.colors.input.default,
      label: COLOR_SYSTEM.colors.neutral.lightBlack,
      value: COLOR_SYSTEM.colors.neutral.black,
      bottomLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      countLabel: COLOR_SYSTEM.colors.neutral.lightBlack,

    },
    focused: {
      background: COLOR_SYSTEM.colors.input.fill,
      border: COLOR_SYSTEM.colors.status.focused,
      label: COLOR_SYSTEM.colors.neutral.lightBlack,
      value: COLOR_SYSTEM.colors.neutral.black,
      bottomLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
      countLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
    },
    disabled: {
      background: COLOR_SYSTEM.colors.input.lightDefault,
      border: COLOR_SYSTEM.colors.input.lightDefault,
      label: COLOR_SYSTEM.colors.neutral.grey,
      value: COLOR_SYSTEM.colors.neutral.grey,
      bottomLabel: COLOR_SYSTEM.colors.neutral.grey,
      countLabel: COLOR_SYSTEM.colors.neutral.grey,
    },

    error: {
      background: COLOR_SYSTEM.colors.input.fill,
      border: COLOR_SYSTEM.colors.status.error,
      label: COLOR_SYSTEM.colors.neutral.lightBlack,
      value: COLOR_SYSTEM.colors.neutral.black,
      bottomLabel: COLOR_SYSTEM.colors.status.error,
      countLabel: COLOR_SYSTEM.colors.neutral.lightBlack,
    },
  },
});
export const DEFAULT_THEME = {
  dark: { colors: { ...COLOR_SYSTEM_DARK }, components: COLOR_COMPONENTS_DARK({ colors: COLOR_SYSTEM_DARK }) },
  light: { colors: { ...COLOR_SYSTEM_LIGHT }, components: COLOR_COMPONENTS_LIGHT({ colors: COLOR_SYSTEM_LIGHT }) },
};
