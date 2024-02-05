---
sidebar_position: 11
---

# Menu

The **Menu** display a list of options. Their placement depends on the container location. They can be opened up or down.

### Import

```js
import { Menu } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { Menu, Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const MenuData = [  
{ label: 'Add',left: <Icon type="antdesign" name="addfolder" size={17} color="#D7D1E9" />,right: <Icon type="antdesign" name="addfile" size={17} color="#D7D1E9" />,onPress(){console.log('pressed')}},
{ label: 'Delete', left: <Icon type="antdesign" name="delete" size={17} color="#D7D1E9" /> },
{ label: 'Update', left: <Icon type="antdesign" name="upcircleo" size={17} color="#D7D1E9" /> },
{ label: 'Skip', right: <Icon type="antdesign" name="fastforward" size={12} color="#D7D1E9" /> }];

const App = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Menu
      menuStyle={{ backgroundColor: '#8973CD' }}
      button={() => <Icon name="plus" type="ant-design" size={30} color="#8973CD" />}
      labelStyle={{ color: '#D7D1E9' }}
      dividerColor="#EDEAF8"
      items={MenuData}
    />
  </View>
);

export default App;
```

### Props

| Prop name      | Type                                                                                                | Required | Description                                       |
|----------------|-----------------------------------------------------------------------------------------------------|----------|---------------------------------------------------|
| items          | ``Array<{label:string,``<br/>`` left?: React.ReactNode, right?:React.ReactNode, onPress ?: ()=>void}>`` | Yes       | Items to be listed in the menu.                   |
| containerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                           | No       | Additional styles to apply to the menu container. |
| labelStyle     | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                           | No       | Additional styles to apply to the label text.     |
| rowStyle     | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                           | No       | Additional styles to apply to the row container.     |
| dividerColor   | ``string``                                                                                          | No       | Color of divider.                                 |
| menuStyle      | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                           | No       | Additional styles to apply to the menu.           |
| button     | [``(isOpen: boolean)=> React.ReactNode``](https://reactnative.dev/docs/react-node)               | No       | This button opens the menu. It also returns whether the menu is open or closed.|
| closeOnPress     | ``boolean                                ``                                                    | No       | Indicates that it should close when an option is selected        |
| theme          | ``UITheme                                     ``                                                    | No       | The theme to use for the component.            |
| typography     | ``UITypography                                ``                                                    | No       | The typography to use for the component.       |
