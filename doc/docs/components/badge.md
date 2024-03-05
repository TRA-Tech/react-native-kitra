---
sidebar_position: 4
---

# Badge

The **Badge** is used to place a number or text label in a specific position. It's especially useful for notifications or alerts.

### Import

```js
import { Badge } from '@tra-tech/react-native-kitra';
```

### Usage

```js
import { Avatar, Chip, Icon } from '@tra-tech/react-native-kitra';
import { View, StyleSheet } from 'react-native';
import Badge from '../../components/Badge';

const App = () => (
  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
    <Badge containerStyle={{ margin: 10, backgroundColor: '#9A9A9A' }} variant="rectangular" size="medium" icon={<AntDesign name="apple1" color="#fff" />} />
    <Badge containerStyle={{ margin: 10, backgroundColor: '#FF3434' }} variant="rectangular" size="medium" icon={<AntDesign name="android1" color="#fff" />} />
  </View>
);

const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 20 },
});

export default App;
```
  <!-- <View style={style.container}> V2 BADGE
    <Badge containerStyle={{ backgroundColor: '#8973CD' }} borderStyle="circular" size="medium" label="01" position="top-right">
      <Avatar
        borderStyle="circular"
        size="medium"
        source={{ uri: 'https://randomuser.me/api/portraits/men/62.jpg' }}
      />
    </Badge>
    <Badge containerStyle={{ backgroundColor: '#8973CD' }} borderStyle="circular" size="medium" icon={<Icon name="plus" size={20} type="ant-design" />} position="top-right">
      <Avatar
        borderStyle="circular"
        size="medium"
      />
    </Badge>
    <Badge containerStyle={{ backgroundColor: '#8973CD' }} borderStyle="circular" size="small" position="top-right">
      <Avatar
        borderStyle="circular"
        size="small"
      />
    </Badge>
    <Badge containerStyle={{ backgroundColor: '#8973CD' }} borderStyle="circular" size="small" position="top-right" label="21">
      <Chip label="Chip" size="large" onChange={() => null} />
    </Badge>
  </View> -->
### Props

| Prop name             | Type                                            | Required | Description                                                                                |
|-----------------------|-------------------------------------------------|----------|--------------------------------------------------------------------------------------------|
| visible                  | ``boolean``                                   | No      | Visibility status.  Default value: ``true``                                               |
| label                |<code> string \| number </code> | No      | The number or text to be written in the badge.                                             |
| size                  | <code> 'small' \| 'medium'</code>                          | No       | The size of the badge. Default value: ``'medium'``                                          |
| containerStyle   |[``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)| No       | Additional styles to apply to the badge container.                        |
| labelStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the children text.                      |
| variant               |<code>'circular'  \| 'rectangular'</code>                  | No   | Specifies the border type of the badge. Default value: ``'circular'``       |
| icon            |[``React.ReactNode``](https://reactnative.dev/docs/react-node)                                | No       | Icon to be added to badge.                                                                |
| children                 |[``React.ReactNode``](https://reactnative.dev/docs/react-node) | Yes  | A required prop that represents the content to display within the Badge component. |
| position                 |<code>'top-right'\| 'top-left' \| 'bottom-left' \| 'bottom-right'</code> | No       | Position the Badge component. Default value: ``'top-right'``   |
| theme                 |``UITheme ``                                       | No       | The theme to use for the component.                                                     |
| typography            |``UITypography``                                    | No       | The typography to use for the component.                                                |
