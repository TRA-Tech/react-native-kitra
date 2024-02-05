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
    someColor: "#420EA1"
  },
  light:{
    someColor:"#F0E52F"
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
import PaletteColor from "../../../src/components/colorPalette";
import {useColorMode} from '@docusaurus/theme-common';

### Main

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor  colorName="Primary" colorValue="#8973CD" />
  <PaletteColor colorName="Primary 5" colorValue="#F9F8FD" />
  <PaletteColor colorName="Primary 15" colorValue="#EDEAF8" />
  <PaletteColor colorName="Primary 30" colorValue="#DCD5F0" />
  <PaletteColor colorName="Secondary" colorValue="#82B98E" />
  <PaletteColor colorName="Tetriary" colorValue="#67A7C1" />
</div>

### Text

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Black" colorValue="#000000" />
  <PaletteColor colorName="Light Black" colorValue="#404040" />
  <PaletteColor colorName="Grey" colorValue="#9A9A9A" />
  <PaletteColor colorName="White" colorValue="#FFFFFF" />
  <PaletteColor colorName="Dark White" colorValue="#FDFCFF" />
  <PaletteColor colorName="Light Grey" colorValue="#F5F4F6" />
</div>

### Status

<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
  <PaletteColor colorName="Focused" colorValue="#654FA6" />
  <PaletteColor colorName="Error" colorValue="#FF3434" />
  <PaletteColor colorName="Success" colorValue="#09CE63" />
  <PaletteColor colorName="Disabled Light" colorValue="#D7D1E9" />
  <PaletteColor colorName="Disabled Dark" colorValue="#BDBCBF" />
  <PaletteColor colorName="Disabled Light Dark" colorValue="#F6F6F6" />
</div>
