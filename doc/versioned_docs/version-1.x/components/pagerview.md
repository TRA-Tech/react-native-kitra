---
sidebar_position: 14
---

# Pagerview

 The **PagerView** component is that is designed to create a tab-based view with a sliding indicator on top of it.  It uses the "react-native-pager-view" library to handle animations.



### Import

```js
import { PagerView } from '@tra-tech/react-native-kitra';
 
```
### Usage

```js
import { PagerView } from '@tra-tech/react-native-kitra';

import { Text, View, StyleSheet } from 'react-native';

const App = () => (
  <View style={{  flex: 1 }}>
    <PagerView containerStyle={{ marginTop: 10 }} >
      <View key="React" style={style.itemContainer}>
        <Text>Pager</Text>
      </View>
      <View key="Native" style={style.itemContainer}>
        <Text>View</Text>
      </View>
      <View key="Kitra" style={style.itemContainer}>
        <Text>Component</Text>
      </View>
    </PagerView>
  </View>
);

const style = StyleSheet.create({
  itemContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default App;
 
```
### Props

| Prop name      | Type                                                                      | Required | Description                                        |
|----------------|---------------------------------------------------------------------------|----------|----------------------------------------------------|
| children          | [``React.ReactNode``](https://reactnative.dev/docs/react-node)         | Yes       |A required prop that represents the content to display within the PagerView component.|
| containerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to the pager view container. |
| pageContainerStyle          | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                   | No       | Additional styles to apply to the page container.      |
| headerTextColor          | ``{select: string,``<br/>`` default: string}``                   | No       | Text colors of header text.      |
| headerSliderStyle          | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                      | No       | Style of header slider.      |
| headerContainerStyle          | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                      | No       | Style of header slider container.      |
| headerTextStyle          | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                     | No        | Text style of header text. |
| injectPagerRef          | ``boolean``                 | No  | An optional boolean prop that determines whether to inject the PagerView reference into each child component's props. Default value: ``false``|
| showDivider          | ``boolean``                 | No  |   Determines whether the divider is shown or not. Default value:``true`` |
| dividerStyle          | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                 | No  |   Style of divider  |
| dividerColor          | ``string``                 | No  |   Color of divider |
| icons     | ``React.ReactElement<typeof ``    [``Icon>``](http://localhost:3000/docs/components/icon) []                           | No       | Icon list for header texts.       |
| theme          | ``UITheme ``                                                              | No       | The theme to use for the component.                |
| typography     | ``UITypography``                                                          | No       | The typography to use for the component.        |



 