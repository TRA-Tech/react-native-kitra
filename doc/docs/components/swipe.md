---
sidebar_position: 19
---

# Swipe

The **Swipe** component is a swipeable container for content with left and/or right swipe actions.
### Import

```js
import { Swipe } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { Swipe, Icon } from '@tra-tech/react-native-kitra';
import { TouchableOpacity, Image } from 'react-native';

const App = () => (
  <Swipe
    variant="radius"
    rightActions={[
      {
        icon: <Icon type="feather" name="send" size={18} color="white" />,
        style: {
          backgroundColor: '#67A7C1',
          width: 82,
        },
      },
      {
        text: 'Sil',
        style: {
          backgroundColor: 'red',
        },
      },
      {
        icon: <Icon type="evilicon" name="trash" size={18} color="white" />,
        text: 'Diğer',
        style: {
          backgroundColor: 'orange',
        },
      },
    ]}
    leftAction={{
      icon: <Icon type="evilicon" name="trash" size={18} color="white" />,
      text: 'Sil',
      style: {
        backgroundColor: '#FF3434',
      },
    }}
  >
    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: 'white', height: 82 }}>
      <Image style={{ height: 82, width: '100%', overflow: 'hidden' }} source={{ uri: 'https://freepngdownload.com/image/thumb/tiger-cat-png.png' }} />
    </TouchableOpacity>
  </Swipe>
);

export default App;
```
### Props

| Name        | Type                                          | Required | Description                                                                                                                                                             |
|------------------|-----------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| children         | [``React.ReactNode``](https://reactnative.dev/docs/react-node)                               | No      | The content to be wrapped by the `Swipeable` component.                                                                                                                 |
| variant          | ``'radius'\|``<br/>`` 'no-radius'   ``                      | No       | Determines whether to use a rounded border radius on the component. Default value: ``'no-radius'``                                                                                                     |
| rightActions     | ``Array<ActionProps>`` | No       | An array of objects representing the right swipe actions to be rendered. Each object can optionally contain a `text` string and can optionally contain an `icon` React component. |
| leftAction       | ``ActionProps``     | No       | An object representing the left swipe action to be rendered. The object can optionally contain a `text` string and can optionally contain an `icon` React component.              |
| theme            | ``UITheme``                                        | No      | An object containing colors and other styling properties used by the component.                                                                                         |
| typography       | ``UITypography``                                        | No      | An object containing font sizes and styles used by the component.                                                                                                       |

### Types

| Name | Type |
|-----------|-----------|
| ActionProps | ``label?: string, style?: StyleProp<ViewStyle>, icon?: React.ReactNode,``<br/>`` labelStyle?: StyleProp<TextStyle>, onPress: (ref:React.RefObject<Swipeable>)=>void``  |
