---
sidebar_position: 20
---

# Switch

The **Switch** component is renders a boolean input.

### Import

```js
import { Switch } from '@tra-tech/react-native-kitra';

```

### Import

```js
import { Switch } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import { View } from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={{ alignItems: 'center' }}>
      <Switch
        onValueChange={() => setIsEnabled(!isEnabled)}
        value={isEnabled}
      />
    </View>
  );
};

export default App;
```

### Props

| Prop name           | Type                                                                      | Required | Description                                                                                                                                                                      |
|---------------------|---------------------------------------------------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ...SwitchProps      | [``SwitchProps``](https://reactnative.dev/docs/switch#props)              | No       |  Any additional props to be passed to the underlying `Switch` component.                                                                                                      |                        |
| theme               | ``UITheme ``                                                              | No       | The theme to use for the component.                                                                                                                                           |
