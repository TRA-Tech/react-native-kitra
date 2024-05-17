---
sidebar_position: 2
---
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={useColorMode().colorMode} />

## Applying theme
To use themes, you need to wrap the root component with provider.

```jsx
import { KitraProvider } from '@tra-tech/react-native-kitra';
import App from './src/App';

export default function Main() {
  return (
    <KitraProvider>
      <App />
    </KitraProvider>
  );
}
```

## Accessing and updating theme 

To access the current theme, use the **useTheme** hook. This hook returns the current theme object and a **updateTheme** function to update the theme.

The **theme** object is a key-value pair of colors that define the current theme of the app. The **updateTheme** function is used to update the current theme by merging in new colors. You can customize these values to create your own theme.

```jsx
import { useTheme } from '@tra-tech/react-native-kitra';

const MyCustomTheme= {
  dark:{
    system:{
      primary: "#00A5EE"
    },
    custom: {
      someColor: "#FF0000"
    }
  },
  light:{
    system:{
      primary:'#195CEF
    },
    custom: {
      someColor: "#00FF00"
    }
  }
}

export function App() {
  const {theme,updateTheme}= useTheme();

  useEffect(() => {
    updateTheme(MyCustomTheme)
  }, []);
  
  return (
  <View>
    <MyCustomComponent style={{backgroundColor:theme?.someColor}}>
    <MyOtherCustomComponent style={{backgroundColor:theme.primary}}>
  </View>
  );
}



```

## Colors

import { ToastContainer, toast } from "react-toastify";
import PaletteColor from "../../src/components/colorPalette";
import {useColorMode} from '@docusaurus/theme-common';

### System

#### Light
<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor  colorName="Primary" colorValue="#195CEF" />
  <PaletteColor colorName="Primary 5" colorValue="#F6F9FF" />
  <PaletteColor colorName="Primary 15" colorValue="#E6EEFF" />
  <PaletteColor colorName="Primary 30" colorValue="#CFDDFF" />
  <PaletteColor colorName="Disabled" colorValue="#A8B8DA" />
  <PaletteColor colorName="Disabled Dark" colorValue="#BEC5D4" />
  <PaletteColor colorName="Disabled Light Dark" colorValue="#C9D5EF" />
  <PaletteColor colorName="Disabled Light" colorValue="#DDE4F3" />
  <PaletteColor colorName="Background" colorValue="#FFFFFF" />
  <PaletteColor colorName="Filled" colorValue="#FFFFFF" />
</div>

#### Dark
<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor  colorName="Primary" colorValue="#3B79FF" />
  <PaletteColor colorName="Primary 5" colorValue="#21273E" />
  <PaletteColor colorName="Primary 15" colorValue="#323A5E" />
  <PaletteColor colorName="Primary 30" colorValue="#A9B6D7" />
  <PaletteColor colorName="Disabled" colorValue="#252F54" />
  <PaletteColor colorName="Disabled Dark" colorValue="#445284" />
  <PaletteColor colorName="Disabled Light Dark" colorValue="#1B1E2B" />
  <PaletteColor colorName="Disabled Light" colorValue="#252F54" />
  <PaletteColor colorName="Background" colorValue="#171922" />
  <PaletteColor colorName="Filled" colorValue="#171922" />
</div>

### Status

#### Light
<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Focused" colorValue="#124CCA" />
  <PaletteColor colorName="Secondary" colorValue="#FC6736" />
  <PaletteColor colorName="Secondary Light" colorValue="#FFF0EB" />
  <PaletteColor colorName="Tertiary" colorValue="#FCE836" />
  <PaletteColor colorName="Error" colorValue="#FF0000" />
  <PaletteColor colorName="Error Light" colorValue="#FFE6E6" />
  <PaletteColor colorName="Success" colorValue="#00CE5E" />
  <PaletteColor colorName="Success Light" colorValue="#E6FBEF" />
  <PaletteColor colorName="Warning" colorValue="#E2D029" />
  <PaletteColor colorName="Warning Light" colorValue="#FFFAD0" />
</div>

#### Dark

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Focused" colorValue="#124CCA" />
  <PaletteColor colorName="Secondary" colorValue="#FC6736" />
  <PaletteColor colorName="Secondary Light" colorValue="#452926" />
  <PaletteColor colorName="Tertiary" colorValue="#EED815" />
  <PaletteColor colorName="Error" colorValue="#FF0000" />
  <PaletteColor colorName="Error Light" colorValue="#42171D" />
  <PaletteColor colorName="Success" colorValue="#01BA55" />
  <PaletteColor colorName="Success Light" colorValue="#123D2E" />
  <PaletteColor colorName="Warning" colorValue="#E2D029" />
  <PaletteColor colorName="Warning Light" colorValue="#403E23" />
</div>

### Neutral

#### Light

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Black" colorValue="#1F1F1F" />
  <PaletteColor colorName="Light Black" colorValue="#404040" />
  <PaletteColor colorName="Grey" colorValue="#9A9A9A" />
  <PaletteColor colorName="Default" colorValue="#DDDDDD" />
  <PaletteColor colorName="Disabled Text" colorValue="#DFE1E6" />
  <PaletteColor colorName="Light Grey" colorValue="#EFF0F3" />
  <PaletteColor colorName="Dark White" colorValue="#FDFCFF" />
  <PaletteColor colorName="White" colorValue="#FFFFFF" />
</div>

#### Dark
<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Black" colorValue="#FFFFFF" />
  <PaletteColor colorName="Light Black" colorValue="#ECECEC" />
  <PaletteColor colorName="Grey" colorValue="#9F9F9F" />
  <PaletteColor colorName="Default" colorValue="#4C526E" />
  <PaletteColor colorName="Disabled Text" colorValue="#848EA2" />
  <PaletteColor colorName="Light Grey" colorValue="#2A303D" />
  <PaletteColor colorName="Dark White" colorValue="#848EA2" />
  <PaletteColor colorName="White" colorValue="#1F1F1F" />
</div>

### Button

#### Light

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Disabled" colorValue="#A8B8DA" />
  <PaletteColor colorName="Disabled Text" colorValue="#DFE1E6" />
  <PaletteColor colorName="Text" colorValue="#FFFFFF" />
</div>

#### Dark

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Disabled" colorValue="#2D375D" />
  <PaletteColor colorName="Disabled Text" colorValue="#6D738A" />
  <PaletteColor colorName="Text" colorValue="#FFFFFF" />
</div>


### Input

#### Light

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Default" colorValue="#DDDDDD" />
  <PaletteColor colorName="Light Default" colorValue="#EFF0F3" />
  <PaletteColor colorName="fill" colorValue="#FFFFFF" />
</div>

#### Dark

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Default" colorValue="#757575" />
  <PaletteColor colorName="Light Default" colorValue="#2B2F3E" />
  <PaletteColor colorName="fill" colorValue="#171922" />
</div>

## Component theme system

 All components provided by Kitra use the colors available in the theme by default. A component changes the colors it uses depending on the situation it is in. 
 
 For example, when the button component switches to the pressed state, all applied colors can be changed for that button.  This can be done for all component types at once by editing the theme file, or if a single component is to be customized, it can be used by overriding the colors to the **theme** prop of the component.


This example shows how to change the colors of the button component by status for only one button.

```jsx
import { Button, useTheme } from '@tra-tech/react-native-kitra';

const App = () => {
  const { theme: { colors: { neutral, status } } } = useTheme();

  return (
    <Button theme={{
      default: { background: status.error },
      pressed: { background: status.errorLight, label: neutral.black },
    }}
    />
  );
};

```

or if you want to change the theme of all button components

```jsx
import { Button, useTheme } from '@tra-tech/react-native-kitra';
import { useEffect } from 'react';

const appTheme = {
  dark: {
    components: {
      button: {
        default: { background: status.error },
        pressed: { background: status.errorLight, label: neutral.black },
      },
    },
  },
};

const App = () => {
  const { updateTheme } = useTheme();

  useEffect(() => {
    updateTheme(appTheme);
  }, []);

  return (
    <Button />
  );
};


```
Below are the default values used by the components and their states. These fields can be customized by changing them as in the example above


#### Accordion List

| Fields                    | Default              | Active              |
|---------------------------|----------------------|---------------------|
| Background                | neutral.lightGrey    | system.primary5     |
| Label                     | neutral.lightBlack   | system.primary      |
| Item Background           | system.filled        | system.filled       |
| Collapse Icon Background  | system.primary5      | system.primary15    |
| Collapse Icon             | neutral.lightBlack   | system.primary      |
| Item Label                | neutral.grey         | neutral.grey        |

#### Activity Indicator

| Fields      | Default          |
|-------------|------------------|
| Background  | system.primary15 |
| Label       | system.primary   |

#### Avatar

| Fields      | Default          |
|-------------|------------------|
| Background  | system.primary15 |
| Label       | system.primary   |

#### Avatar Group

| Fields           | Default           |
|------------------|-------------------|
| Background       | system.primary15  |
| Label            | system.primary    |
| More Background  | status.secondary  |
| More Label       | button.text       |


#### Badge

| Fields      | Default        |
|-------------|----------------|
| Background  | system.primary |
| Label       | button.text    |
| Border      | system.filled  |

#### Button

| Fields     |     Default    |     Pressed    |       Disabled       |
| :--------- | :------------: | :------------: | :------------------: |
| Background | system.primary | status.focused |    button.disabled   |
| Label      |   button.text  |   button.text  | neutral.disabledText |

#### Checkbox

| Fields     |      Default      |     Filled     |     Disabled      |
| :--------- | :---------------: | :------------: | :---------------: |
| Background | system.background | system.primary | neutral.default   |
| Border     |   system.primary  | system.primary | neutral.default   |
| Icon       |   button.text     | button.text    | neutral.darkWhite |


#### Chip

| Field      | Default            | Active          | Disabled          |
|------------|--------------------|-----------------|-------------------|
| Background | system.background  | system.primary  | system.background |
| Border     | system.primary     | system.primary  | system.disabledDark |
| Label      | system.primary     | button.text     | system.disabledDark |


#### Divider

| Fields     | Default          |
|------------|------------------|
| Background | system.primary   |

#### Dropdown

| Field               | Default             | Active           | Selected          |
|---------------------|---------------------|------------------|-------------------|
| Background          | system.filled       | system.filled    | system.filled     |
| Border              | neutral.default     | status.focused   | neutral.default   |
| Collapse Background | system.background   | system.background| system.background |
| Label               | neutral.lightBlack  | status.focused   | system.primary    |
| Collapse Icon       | neutral.lightBlack  | system.primary   | system.primary    |
| Item Background     | system.background   | system.background| system.primary5   |
| Item Label          | neutral.lightBlack  | neutral.lightBlack | system.primary  |

#### Multiple Select Dropdown

| Field                | Default             | Active            | Selected          |
|----------------------|---------------------|-------------------|-------------------|
| Background           | system.background   | system.background | system.background |
| Border               | neutral.default     | status.focused    | neutral.default   |
| Label                | neutral.lightBlack  | status.focused    | system.primary    |
| Collapse Icon        | neutral.lightBlack  | system.primary    | system.primary    |
| Item Background      | system.background   | system.background | system.primary5   |
| Item Label           | neutral.lightBlack  | neutral.lightBlack| neutral.lightBlack|
| Select All Label     | system.primary      | system.primary    | system.primary    |
| Complete Background  | system.primary      | system.primary    | system.primary    |
| Complete Label       | button.text         | button.text       | button.text       |
| Check Icon           | button.text         | button.text       | button.text       |
| Check Background     | system.primary      | system.filled     | system.primary    |
| Check Border         | system.primary      | system.primary    | system.primary    |


#### Menu

| Field           | Default            | Active             |
|-----------------|--------------------|--------------------|
| Icon            | neutral.grey       | system.primary     |
| Item Label      | neutral.lightBlack | neutral.lightBlack |
| Item Background | system.filled      | system.filled      |
| Divider         | system.primary5    | system.primary5    |


#### Pager View

| Field             | Default         | Active         |
|-------------------|-----------------|----------------|
| Header Background | system.primary5 | system.primary |
| Header Label      | system.primary  | button.text    |


#### Progress Bar

| Field    | Default        |
|----------|----------------|
| Progress | system.primary |
| Bar      | system.primary15 |

#### Radio Button

| Field       | Default              | Active       |
|-------------|----------------------|--------------|
| Background  | neutral.lightGrey    | button.text  |
| Dot         | system.primary       | system.primary |
| Border      | system.disabledLightDark | system.primary |


#### Switch

| Field | Default           | Active       |
|-------|-------------------|--------------|
| Track | system.disabledLight | system.primary |
| Thumb | button.text       | button.text |


#### Speed Dial

| Field      | Default        |
|------------|----------------|
| Background | system.primary |
| Icon       | button.text    |


#### Text Input

| Field         | Default            | Focused            | Error              | Disabled           |
|---------------|--------------------|--------------------|--------------------|--------------------|
| Background    | input.fill         | input.fill         | input.fill         | input.lightDefault|
| Border        | input.default      | status.focused     | status.error       | input.lightDefault|
| Label         | neutral.lightBlack | neutral.lightBlack| neutral.lightBlack| neutral.grey       |
| Value         | neutral.black      | neutral.black      | neutral.black      | neutral.black      |
| Bottom Label  | neutral.lightBlack | neutral.lightBlack| status.error       | neutral.grey       |
| Count Label   | neutral.lightBlack | neutral.lightBlack| neutral.lightBlack| neutral.grey       |

#### Toggle Button

| Field      | Default          | Active        |
|------------|------------------|---------------|
| Background | system.primary5  | system.primary|
| Label      | system.primary   | button.text   |
| Border     | system.primary   | system.primary|



