---
sidebar_position: 7
---

# Chip
The **Chips** can be used to display entities in small blocks.

### Import

```js
import { Chip } from '@tra-tech/react-native-kitra';
```

### Usage

```js
import { Chip } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Chip
        icon={{ iconName: 'penguin', iconPosition: 'left', iconType: 'material-community' }}
        label="Small"
        size='large'
        onChange={e => console.log(e)}
        colorStyle={{ backgroundColor: 'tomato', selectBackgroundColor: 'white', selectTitleColor: 'tomato', titleColor: 'white' }}
      />
  </View>
);

export default App;
```

### Props

| Prop name    | Type                                                                                                           | Required | Description                                                                 |
|--------------|----------------------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------|
| label        | ``string``                                                                                                     | No       | Text of chip.                                                               |
| value        | ``boolean``                                                                                                     | No       | Status of chip.                  Default value: ``'false'``                                             |
| textStyle        | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                                      | No       | Additional styles to apply to the chip.                                     |
| style        | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                                      | No       | Additional styles to apply to the label.                                     |
| icon | `` { iconName: string,``<br/>``  iconType: IconType,``<br/>``  iconPosition: 'left' \| 'right'`` }     | No       | Adds an icon to a component with options for specifying the icon's name, type, and position  , enabling quick customization of the component's appearance.                              |
| colorStyle   | `` { backgroundColor: string, selectBackgroundColor: string, selectTitleColor: string,``<br/>`` titleColor: string } `` | No       | Styles for chip color.                                                      |
| size         | <code> 'small' \| 'medium' \| 'large'</code>                                                                               | No       | The size of the chip. Default value: ``'small'``                              |
| onChange     | ``(event:boolean)=> void``                                                                                     | Yes      | Returns whether the chip is selected.                                       |
| disabled      | ``boolean ``                                                                                                   | No       | If true the user won't be able to toggle the chip. Default value: ``false`` |
| theme        | ``UITheme ``                                                                                                   | No       | The theme to use for the component.                                      |
| typography   | ``UITypography``                                                                                               | No       | The typography to use for the component.                                 |
