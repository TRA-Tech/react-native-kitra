---
sidebar_position: 2
---


## Applying notification
To use notification, you need to wrap the root component with provider.

```jsx
import { KitraProvider } from '@tra-tech/react-native-kitra';
import App from './src/App';

export default function Main() {
  return (
    <KitraProvider>
      <App />
    </KitraProvider>
  );
}
```

## Applying custom notification
To use notification, you need to wrap the root component with provider.

```jsx

import { KitraProvider } from '@tra-tech/react-native-kitra';
import App from './src/App';

const linearMessageType = (theme: any, colorSheme: any) => ({
  SUCCESS: {
    backgroundColor: {
      color: theme.successBackground,
      location: [0.2, 1],
      bottomColor: theme.successBottom,
      bottomLocation: [0, 0.8],
    },
    icon: <NotificationSuccess />,
  },
  WARNING: {
    backgroundColor: {
      color: theme.warningBackground,
      location: colorSheme === 'dark' ? [0, 0.8] : [0, 0.2, 0.4, 0.6, 0.8],
      bottomColor: theme.warningBottom,
      bottomLocation: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8],
    },
    icon: <NotificationInfo />,
  },
  ERROR: {
    backgroundColor: {
      color: theme.errorBackground,
      location: colorSheme === 'dark' ? [0.2, 1] : [0, 0.3, 0.6],
      bottomColor: theme.errorBottom,
      bottomLocation: [0, 0.2, 0.4, 0.6, 0.8],
    },
    icon: <NotificationError />,
  },
});

export default function Main() {
  return (
    <KitraProvider linearMessageType={(theme, colorScheme) => linearMessageType(theme, colorScheme)}>
      <App />
    </KitraProvider>
  );
}
```

## Show notifications on screen

To show notifications on the screen, use the **useNotification** hook.

The **showNotification** function is used to organize and show notifications. You can customize these values to create your own notification. You can also use linear gradient colors.
```jsx
import { useNotification } from '@tra-tech/react-native-kitra';

export function App() {
  const {showNotification}= useNotification();

  return (
  <View>
    <TouchableOpacity 
      onPress={()=> showNotification({ type: 'WARNING', header: 'WARNING NOTIFICATION', message: 'Warning Information' })}>
      <Text>Show Notification</Text>
    </TouchableOpacity>
  </View>
  );
}
```

### Kitra Provider Props

| Prop name      | Type                                                                      | Required | Description                                        |
|----------------|---------------------------------------------------------------------------|----------|----------------------------------------------------|
| containerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No       | Additional styles to apply to the notification container. |
| linearMessageType | ``(theme?:any, colorScheme?:('dark'\|'light')=> {[key:string]:``<br/>`` {backgroundColor:{color:string[],``<br/>`` location:number [],``<br/>``bottomColor:string [],``<br/>``bottomLocation:number []} icon:React.ReactNodeonPress:()=>void}}``                                                                | No       | Notification linear gradient style to show.        |
| limit          | ``number``                                                                | No       | Maximum notification to show. Default value: ``3``       |
| onPress          | ``()=>void``                                                                | No       | Function to execute on press.      |
| messageType          | `` [key: status]: { backgroundColor: string, icon: React.ReactNode}``| No       | Notification style to show.      |


### showNotification Types

| Name | Type |
|-----------|-----------|
| showNotification | ``{type:status, header?:string, message?:string``  |
| status | status: <code> 'SUCCESS' \| 'WARNING' \| 'ERROR' \| 'INFO'</code>|


