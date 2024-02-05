---
sidebar_position: 16
---

# Radio Button

The **RadioButton** is a component that displays a circular button with a border and an inner circle that can be toggled on and off.

### Import

```js
import { Slider } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { RadioButton } from '@tra-tech/react-native-kitra';
import { View, StyleSheet } from 'react-native';

const App = () => (
  <View style={style.container}>
    <RadioButton style={{ alignSelf: 'center' }} onChange={x => console.log(x)} />
  </View>
);

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
});

export default App;
```
### Props

| Prop Name | Type | Required |  Description |
| --- | --- | --- |  --- |
| onChange | ``(event: boolean) => void`` | Yes  | A function that is called when the radio button is pressed. The current value of the radio button is passed as an argument to the function. |
| style | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No  | Additional styles to apply to the radio button container. |
| theme | ``UITheme`` | No  | The theme to use for the component. |

