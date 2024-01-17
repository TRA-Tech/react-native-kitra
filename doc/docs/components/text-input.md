---
sidebar_position: 21
---

# Text Input

The **Text Input**, a text input with label, count, helper text, left and right icons, and animations for the label and input box.
### Import

```js
import { TextInput } from '@tra-tech/react-native-kitra';
```

### Usage

```js
import { TextInput, Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ justifyContent: 'center', flex: 1 }}>
    <TextInput
      label="E-mail"
      size="large"
      left={<Icon type="ant-design" name="check" size={20} />}
      right={<Icon type="ant-design" name="apple1" size={20} />}
      count
      defaultValue="Default Value"
      maxLength={20}
      helperText="Normal"
      errorMessage="ERROR"
    />
  </View>
);

export default App;
```

### Props

| Prop name             | Type                                            | Required | Description                                                                                |
|-----------------------|-------------------------------------------------|----------|--------------------------------------------------------------------------------------------|
| size                  | <code>'small' \| 'medium' \| 'large'</code>                    | No      | The size of the text input. Default Value: ``'medium'  ``                 |
| iconPosition          | <code>'left' \| 'right' </code>                               | No      | Location of the icon.              |
| labelColor         | ``{focus:string, default:string}``                              | No      | Label color for focus and unfocus status              |
| helperText                 |``string``                                  | No      | Text of helper text.|
| helperTextStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the helper text.                         |
| variant          |<code>'filled' \| 'outlined'</code>| No       | Variant of the TextInput. Default value: ``'filled'`` ,                    |
| containerStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Style of outter input container.                     |
| inputContainerStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Style of inner input container.                     |
| labelContainerStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Style of label container.                        |
| count                  | ``boolean``                | No      | Shows the number of text input characters. Default value: ``false``.               |
| label                 |``string``| No                                                 | The text to use for the floating label.              |
| labelStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the label text.                         |
| editable            |``boolean``                   | No       | If false, text is not editable. Default value: ``true``. |
| inputStyle   |[``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)| No       | Additional styles to apply to the text input.                  |
| errorMessage            |``string``                    | No       | Error message. |
| error           |``boolean `` | No       | If error is true error message is shown.                    |
| left           |[``React.ReactNode``](https://reactnative.dev/docs/react-node)  | No       | Used to add a react node to the left of the text input.                    |
| right           |[``React.ReactNode``](https://reactnative.dev/docs/react-node)  | No       | Used to add a react node to the right of the text input.                      |
| ...TextInputProps           |[``TextInputProps``](https://reactnative.dev/docs/textinput#props) | No       | Any additional props to be passed TextInput component.                      |
| theme                 |``UITheme                                     `` | No       | The UI theme to use for the component.                                                     |
| typography            |``UITypography                                `` | No       | The UI typography to use for the component.                                                |

