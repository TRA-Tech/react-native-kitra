---
sidebar_position: 8
---

# Divider
The **Divider**  is a thin, lightweight separator that groups content in lists and page layouts.

### Import

```js
import { Divider } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { Divider } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 50 }}>
    <Divider borderStyle="dashed" color="red" width={350} />
    <Divider borderStyle="dotted" color="purple" width={300} />
    <Divider borderStyle="solid" color="green" width={200} />
  </View>
);

export default App;
```
### Props

| Prop name  | Type                                                                      | Required | Description                                          |
|------------|---------------------------------------------------------------------------|----------|------------------------------------------------------|
| borderStyle |<code >'solid' \| 'dotted' \| 'dashed' </code>                            | No       | Additional styles to apply to the divider border style. Default value: ``'solid'``          |
| width      | ``number``                                                                | No       | Width of divider. Default value: ``'100%'``             |
| color      | ``string``                                                                | No       | Color of divider. |
| style      | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to the divider.           |
| theme      | ``UITheme ``                                                              | No       | The UI theme to use for the component.               |

