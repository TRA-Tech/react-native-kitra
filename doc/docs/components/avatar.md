---
sidebar_position: 3
---

# Avatar
The **Avatar** component can display an image or initials in a circular or rounded rectangle shape. It also has a customizable badge that can be positioned at the top or bottom of the Avatar, and can display text or an icon. This component can be used in various applications that require a user profile picture or initials, such as social media or messaging apps.

### Import

```js
import { Avatar } from '@tra-tech/react-native-kitra';
```

### Usage

```js
import { Avatar,Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
   <View style={{ alignItems: 'center', flexDirection: 'row' }}>
      <Avatar
        variant="circular"
        size="medium"
        source={{ uri: 'https://randomuser.me/api/portraits/men/62.jpg' }}
      />
    </View>
);

export default App;
```

### Props

| Prop name             | Type                                            | Required | Description                                                                                |
|-----------------------|-------------------------------------------------|----------|--------------------------------------------------------------------------------------------|
| size                  | <code>'small' \| 'medium'</code>                                          | No      | The size of the avatar. Default value: ``'medium'  ``                                                |
| source                |[``ImageSourcePropType``](https://reactnative.dev/docs/image#imagesource)| No      | Used to specify the image source.              |
| variant            |<code>'circular' \| 'rounded'</code>                  | No       | Specifies the border type of the avatar. Default value: ``'circular'``|
| avatarIcon            |``React.ReactNode      ``                    | No       | Used to add icon to avatar. |
| containerStyle   |[``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)| No       | Additional styles to apply to the avatar container.                  |
| label                 |``string``| No                                                 | Represents the initials of the name to be written on the avatar.                    |
| labelStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the label text.                         |
| theme                 |``UITheme                                     `` | No       | The theme to use for the component.                                                     |
| typography            |``UITypography                        

## Avatar Group

The **Avatar Group**, used to list avatars side by side.

### Import

```js
import { AvatarGroup } from '@tra-tech/react-native-kitra';
```

### Usage
```js
import { AvatarGroup } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
     <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
      <AvatarGroup
        avatarLimit={5}
        limitContainerStyle={{ backgroundColor: '#82B98E', style: { fontSize: 10 } }}
        avatars={[
          { source: { uri: 'https://randomuser.me/api/portraits/men/62.jpg' } },
          { source: { uri: 'https://randomuser.me/api/portraits/men/40.jpg' } },
          { source: { uri: 'https://randomuser.me/api/portraits/women/26.jpg' } },
          { label: 'Dogus Erdem' },
          { label: 'Ahmet Kagan Yoruk' },
          { label: 'Nadire Kasap' },
        ]}
      />
    </View>
);
export default App;
  
```

### Props

| Prop name             | Type                                            | Required | Description                                                                                |
|-----------------------|-------------------------------------------------|----------|--------------------------------------------------------------------------------------------|
| avatars           | ``Array<{``<br />`` source?: ImageSourcePropType,``<br />`` variant?: 'circular' \| 'rounded',``<br />`` avatarIcon?: React.ReactNode,``<br />`` containerStyle?: StyleProp<ViewStyle>,``<br />`` label?: string,``<br />``  labelStyle?: StyleProp<TextStyle>,``<br />`` textStyle?: StyleProp<TextStyle> }, ``<br />``}> ``| Yes      | Takes avatar props into array. |
| avatarLimit           |``number``                                        | No      |  Limit of avatars to be listed. Default value: ``10``            |
| limitContainerStyle   |<code>'circular' \| 'rounded'</code>                   | No       | Additional styles to apply to the limit container. |
| theme                 |``UITheme                                     `` | No       | The theme to use for the component.                                                     |
| typography            |``UITypography                                `` | No       | The typography to use for the component.                                                |
