---
sidebar_position: 12
---

# Modal

The **Modal** component is a basic way to present content above an enclosing view.


### Import

```js
import { Modal } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { Modal } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const App = () => {

  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={visible} modalStyle={{ width: '100%', height: '100%', backgroundColor: '#D7D1E9', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Text>Hide Modal</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default App;
```

### Props

| Prop name      | Type                                                                      | Required | Description                                        |
|----------------|---------------------------------------------------------------------------|----------|----------------------------------------------------|
| containerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to the modal container. |
| modalStyle     | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/text-style-props) | No       | Additional styles to apply to the modal component. |
| visible        | ``boolean``                                                               | No       | Visibility status.  Default value: ``false``       |
| children       |  [``React.ReactNode``](https://reactnative.dev/docs/react-node)                                                  | No       | Content of the modal.                              |
| ...ModalProps          | [``ModalProps``](https://reactnative.dev/docs/modal#props)                | No       | React native modal props.                          |
| theme          | ``UITheme ``                                                              | No       | The theme to use for the component.             |
| typography     | ``UITypography``                                                          | No       | The typography to use for the component.        |
