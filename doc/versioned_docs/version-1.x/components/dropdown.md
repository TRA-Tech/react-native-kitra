---
sidebar_position: 9
---

# Dropdown

The **Dropdown** component provides a dropdown menu functionality. It allows users to select one or multiple items from a list of options displayed in a dropdown menu. The component is highly customizable with various props that can be passed to modify its appearance and behavior.

### Import

```js
import { Dropdown } from '@tra-tech/react-native-kitra';
```

### Usage
````js
import { Dropdown } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import { View } from 'react-native';

const data = [{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }, { label: 'Item 3', value: 3 }, { label: 'Item 4', value: 4 }, { label: 'Item 5', value: 5 }];

const App = () => {
  const [select, setSelect] = useState();
  return (
    <View style={{ rowGap: 100 }}>
      <View style={{ zIndex: 101, flex: 1 }}>
        <Dropdown
          multiple
          selectall
          containerStyle={{ marginTop: 20 }}
          buttonTitle="Please Select"
          buttonTextStyle={{ color: 'black', marginLeft: 18 }}
          rowTextStyle={{ color: '#8973CD' }}
          buttonBackgrounColor={{ focusBackground: '#8973CD', defaultBackground: '#F9F8FD' }}
          displayLength={4}
          rowStyle={{ backgroundColor: '#F9F8FD' }}
          buttonStyle={{ width: '100%', height: 51, borderRadius: 50 }}
          listContainerStyle={{ backgroundColor: '#F9F8FD' }}
          onSelect={x => setSelect(x.label)}
          displayedButtonValue={x => x.label}
          displayedRowValue={x => x.label}
          data={data}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Dropdown
          selectall
          containerStyle={{ marginTop: 20 }}
          buttonTitle="Please Select"
          buttonTextStyle={{ color: 'black', marginLeft: 18 }}
          rowTextStyle={{ color: '#8973CD' }}
          buttonBackgrounColor={{ focusBackground: '#8973CD', defaultBackground: '#F9F8FD' }}
          displayLength={4}
          rowStyle={{ backgroundColor: '#F9F8FD' }}
          buttonStyle={{ width: '100%', height: 51, borderRadius: 50 }}
          listContainerStyle={{ backgroundColor: '#F9F8FD' }}
          onSelect={x => setSelect(x.value)}
          displayedButtonValue={x => x.label}
          displayedRowValue={x => x.label}
          data={data}
        />
      </View>
    </View>
  );
};

export default App;
````
### Props

| Prop name             | Type                      | Required | Description                                                                  |
|-----------------------|---------------------------|-----------|-------------------------------------------------------------------|
| multiple              | ``boolean``                   | No        | Determines whether the dropdown should allow multiple selections. Default value: ``false`` |
| disabled              | ``boolean``                    | No       | Determines whether the dropdown is disabled. Default value: ``false``.                           |
| left                  | [``(isVisible:boolean)=>React.ReactNode``](https://reactnative.dev/docs/react-node)            | No        | A React node that will be created to the left of the dropdown button and return its visible.|
| right                 | [``(isVisible:boolean)=>React.ReactNode``](https://reactnative.dev/docs/react-node)           | No        | A React node that will be created to the right of the dropdown button and return its visible. |
| data                  | <code> Array{'<'}(string \| object )> </code>               | Yes       | An array of objects or strings to be used as options in the dropdown list. |
| displayedRowValue     | <code>(item: string \| object) => any</code>                  | Yes       | A function that takes an item from the `data` array and returns a value to be displayed in the dropdown list. |
| displayedButtonValue  | <code>(item: string \| object) => any </code>                  | Yes       | A function that takes an item from the `data` array and returns a value to be displayed on the dropdown button. |
| listContainerStyle    | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                    | No        | An object containing styles to be applied to the dropdown list container. |
| defaultValue          | ``Array<string \| object>``                     | No        | An array of objects or strings to be pre-selected in the dropdown. |
| displayLength         | ``number``                    | No        | The number of  items to display in the button. |
| buttonTitle           |  ``string``                 | No        | The default text to be displayed on the dropdown button when no options are selected. |
| rowStyle              | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                    | No        | An object containing styles to be applied to each item in the dropdown list. |
| buttonStyle           | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                    | No        | An object containing styles to be applied to the dropdown button. |
| buttonTextStyle       | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                     | No        | An object containing styles to be applied to the text inside the dropdown button. |
| selectall             | ``boolean``                   | No        | Whether to include a "Select All" option in the dropdown. |
| onSelect              |<code>(item: Array&lt;string&gt; \| Array&lt;object&gt; \| string \| object) =&gt; void</code>   | No        | A function to be called whenever an item is selected in the dropdown. |
| onComplete            | <code >(item: object \| string) => void  </code>       | No        | A function to be called whenever submit button pressed. |
| rowTextStyle          | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                     | No        | An object containing styles to be applied to the text inside each item in the dropdown list. |
| containerStyle        | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                    | No        | An object containing styles to be applied to the dropdown container. |
| buttonBackgrounColor  | ``{ focusBackground: string, defaultBackground: string }``| No       | Used to customize the background color of the dropdown. |
| iconStyle             | ``{ color: string,``<br/>`` container: StyleProp<ViewStyle> }``    | No       | The color property determines the icon's color, and the container property defines the style of the container that holds the icon. |
| autoPosition          | ``boolean``                    | No       | Controls whether the dropdown component's dropdown menu is positioned automatically. Default value: ``true`` |
| theme                 | ``UITheme``                    | No       | The theme to use for the component. |
| typography            | ``UITypography``                    | No       | The typography to use for the component. |
