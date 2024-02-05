---
sidebar_position: 1
title: Accordion List
---




The **Accordion List** component provides an accordion-style list with collapsible sections. The component also supports customization of labels, icons, styles, and themes.
It uses animations from the [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) library to animate the opening and closing of the accordion sections.

### Import

```js
import { AccordionList } from "@tra-tech/react-native-kitra";    
```
### Usage

```js
import { AccordionList } from "@tra-tech/react-native-kitra";    

const AccordionListData =[
  {name:'React',value:1},
  {name:'Native',value:2},
  {name:'Kitra',value:3},
  {name:'React Native Kitra',value:4}]

const App =()=>{
    return(
        <View style={{ backgroundColor: '#8973CD', padding: 10, borderRadius: 5 }}>
          <AccordionList
            displayedItem={x => x.name}
            itemDisplay={x => x.name}
            onSelect={x => console.log(x)}
            label="Grey Daze"
            left={() => <MaterialCommunityIcons name="flower-tulip" size={24} color="dimgrey" />}
            data={AccordionListData}
          />
        </View>
    )
 }

 export default App;
```

### Props

| Name                | Type                                                                      | Required | Description                                                                                  |
|---------------------|---------------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------------|
| data                | ``Array<any>  ``                                                          | Yes      | The data to render in the accordion list.                                                    |
| label               | ``string``                                                                | No       | The label to display at the top of the accordion list.                                       |
| left                | ``(expanded: boolean) => React.ReactNode ``                               | No       | An optional function that returns a React element to display on the left side of the label.  |
| right               | ``(expanded: boolean) => React.ReactNode``                                | No       | An optional function that returns a React element to display on the right side of the label. |
| labelContainerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to the label container.                                           |
| labelStyle          | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props) | No       | Additional styles to apply to the label text.                                                |
| rowTextStyle        | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props) | No       | Additional styles to apply to the row text.                                                  |
| rowStyle            | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to each row container.                                            |
| onSelect            | ``(item: any) => void ``                                                  | Yes      | A callback function that will be called when a row is selected.                              |
| itemDisplay         | <code>(item: any) => string \| JSX.Element \| null </code>                | Yes      | A function that returns a string or JSX element to display for each row.                     |
| theme               | ``UITheme``                                                               | No       | The theme to use for the component.                                                          |
| typography          | ``UITypography``                                                          | No       | The typography to use for the component.                                                     |

