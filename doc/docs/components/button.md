---
sidebar_position: 5
---

# Button

The **Button** component is a customizable button that can display either a label or an icon, or both. It is built using the [Pressable](https://reactnative.dev/docs/pressable) component from react-native and allows for various states like focused and disabled.

### Import

```js
import { Button } from "@tra-tech/react-native-kitra";    
``` 

### Usage

```js
import { Button, Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
    <Button 
      size="medium" 
      iconPosition="left" 
      label="Press Me!" 
      style={{ alignSelf: 'center', marginBottom: 10 }} 
      onPress={()=>console.log('pressed')}>
        <Icon type="material-community" size={20} name="penguin" />
    </Button>
  </View>
);

export default App;


``` 
### Props


| Prop | Type | Required | Description |
|------|------|----------|-------------|
| size | <code>'small' \| 'medium' \| 'large'</code> | No | The size of the button. Default value: ``'medium'``. |
| disabled | ``boolean`` | No | Determines whether the button is disabled. Default value: ``false``. |
| label | ``string`` | No | The label to display on the button. |
| iconPosition | <code >'left' \| 'right'</code>  | No | The position of the icon in relation to the label. Default value: ``'left'``. |
| style | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No | The style object for the button. |
| labelStyle | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props) | No | The style object for the button's text. |
| children | [``React.ReactNode``](https://reactnative.dev/docs/react-node) | No | Icons to be rendered inside the button. |
| statusStyle                 |``ActionProps``                                       | No       | Contains style definitions for a button component's normal, focused, and disabled states, specifying background and text colors.                                                     |
| theme | ``UITheme`` | No | The theme to use for the component. |
| typography | ``UITypography`` | No | The typography to use for the component. |
| ...PressableProps | [``Pressable``](https://reactnative.dev/docs/pressable#props) | No | Any additional props to be passed to the underlying `Pressable` component. |

### Types
| Name | Type |
|-----------|-----------|
| ActionProps | `` { default:{container: {backgroundColor: string},text: {color: string}},``<br/>`` focused: {container: {backgroundColor: string},text: {color: string}}, ``<br/>``disabled: {container: { backgroundColor: string},text:{color:string}}}``  |

