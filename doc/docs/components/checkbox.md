---
sidebar_position: 6
---

# CheckBox

The **CheckBox** component is a UI element that allows the user to toggle between two states: checked and unchecked.

### Import

```js  
import { CheckBox } from '@tra-tech/react-native-kitra';
```
### Usage

```js  
import { CheckBox } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import { View } from 'react-native';

const App = () => {
  const [value, setValue] = useState(false);

  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <CheckBox
        style={{ alignSelf: 'center' }}
        value={value}
        onChange={event => console.log(event)}
        onPress={() => setValue(prev => !prev)}
        iconColor="red"
      />
    </View>
  );
};

export default App;

```
### Props

| Prop name | Type | Required | Description |
| --- | --- | --- | --- |
| value | `boolean` | No | Determines whether the checkbox is checked or unchecked |
| onChange | `(value: boolean) => void` | No | A callback function that is called when the checkbox is pressed, with the new state value as an argument |
| style | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No | Additional styles to apply to the checkbox container |
| disabled | `boolean` | No | Determines whether the checkbox is disabled or not |
| iconColor | `string` | No | The color of the checkmark icon |
| theme | `UITheme` | No | An object containing the color palette used for the checkbox |
| ...TouchableOpacityProps | [``...TouchableOpacityProps``](https://reactnative.dev/docs/touchableopacity#props) | No | Any additional props to be passed to the underlying `TouchableOpacity` component. |

