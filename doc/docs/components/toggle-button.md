---
sidebar_position: 22
---

# Toggle Button

The **ToggleButton** component is a custom toggle button that allows users to select from a list of options. 

### Import

```js
import { ToggleButton } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { ToggleButton } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <ToggleButton
      buttons={[
        { label: 'React', onPress: () => null },
        { label: 'Native', onPress: () => null },
        { label: 'Kitra', onPress: () => null },
      ]}
    />
  </View>
);

export default App;
```
### Props

| Prop Name | Data Type | Required | Description |
| --- | --- | --- | --- |
| `buttons` | ``Array<{ label: string,``<br/>`` onPress: (event: boolean) => void,``<br/>`` id?: number }> `` | Yes | Array of buttons. |
| `size` | <code>'small' \| 'medium'</code>  | No | The size of the button. Default value: ``'medium'`` |
| `theme` | `UITheme` | No | The theme to use for the component. |
| `typography` | `UITypography` | No | The typography to use for the component.   |

