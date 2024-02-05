---
sidebar_position: 18
---

# Speed Dial

**Speed Dial** component is a menu of related actions that allows a user to perform an action. These separations help to improve the user experience by not taking users away from the main separation for a specific action.

### Import

```js
import { SpeedDial } from '@tra-tech/react-native-kitra';

```
### Import

```js
import { SpeedDial, Icon } from '@tra-tech/react-native-kitra';

const App = () => (

  <SpeedDial
    variant="flat"
    baseItemBackground="#8973CD"
    items={[
      { icon: <Icon type="material-community" name="penguin" size={20} />, title: 'Penguin', backgroundColor: 'blue' },
      { icon: <Icon type="material-community" name="close" size={20} />, title: 'Close', backgroundColor: 'pink' },
      { icon: <Icon type="material-community" name="plus" size={20} />, title: 'Plus', titleColor: 'red' },
      { icon: <Icon type="material-community" name="penguin" size={20} />, onPress: () => console.log('pressed') },
      { icon: <Icon type="material-community" name="penguin" size={20} /> },
    ]}
  />
);

export default App;
```

### Props

| Prop name          | Type                                                                                                                 | Required | Description                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------|----------|------------------------------------------------------------------|
| items              | ``Array<{``<br />``icon?: React.ReactNode,``<br />`` title?:string,``<br />`` titleColor?:string,``<br />`` backgroundColor?:string,``<br />`` onPress?: ()=> void}>`` |Yes| Items to be listed in the speed dial.|
| baseItemBackground | ``string``                                                                                                           | No       | Background color of base item. Default value: ``theme.tertiary`` |
| variant             | <code> 'flat' \| 'spread' </code>|   No       | Represents the opening animation. Default value: ``'flat'``                                                 |
| onChange             | ``(event:boolean)=>void ``     | No       | Returns whether the component is on or off.                         |
| baseItemIcon       | [``React.ReactNode``](https://reactnative.dev/docs/react-node)                                                                            | No       | Icon of base item.                                               |
| theme              | ``UITheme ``                                                                                                         | No       | The theme to use for the component.                           |
| typography         | ``UITypography``                                                                                                     | No       | The typography to use for the component.                      |
