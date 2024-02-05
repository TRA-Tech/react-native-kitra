---
sidebar_position: 10
---

# Icon
The **Icon**  component that uses [``react-native-vector-icons``](https://github.com/oblador/react-native-vector-icons).

### Import

```js
import { Icon } from '@tra-tech/react-native-kitra';
```

### Import

```js
import { Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 20 }}>
    <Icon name="penguin" type="material-community" size={60} color="#8973CD" />
    <Icon name="plus" type="ant-design" size={40} color="#F9F8FD" />
  </View>
);

export default App;

```
<!-- Specifies whether fonts should scale to respect Text Size accessibility settings. Default value: ``'true'``. -->
### Props

| Prop name  | Type                                                                      | Required | Description                                          |
|------------|---------------------------------------------------------------------------|----------|------------------------------------------------------|
| type | [``Icon Sets``](https://github.com/oblador/react-native-vector-icons#bundled-icon-sets) | No       | Name of icon set. Default value: ``'ionicons'``.        |
| name      | ``string``                                                                | Yes       |  Name of icon.            |
| color      | ``string``                                                                | No       | Color of icon. |
| size      | ``number``                                                                | Yes       | Size of icon. |
| allowFontScaling| ``boolean``                                                         | Yes       | Specifies whether fonts should scale to respect Text Size accessibility settings. Default value: ``true``. |
| style      | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to the divider.           |
| theme      | ``UITheme ``                                                              | No       | The UI theme to use for the component.               |
