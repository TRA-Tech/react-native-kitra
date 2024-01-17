---
sidebar_position: 1
---

# Getting Started

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

- Go to the project folder in terminal and run the following code:
<Tabs groupId="operating-systems">
  <TabItem value="yarn" label="Yarn">

```bash npm2yarn
yarn add @tra-tech/react-native-kitra
```
</TabItem>
  <TabItem value="npm" label="npm">

```bash npm2yarn
npm install @tra-tech/react-native-kitra
```
</TabItem>
</Tabs>
 - Packages you need to download separately to use:

<Tabs groupId="non-mac-operating-systems">
  <TabItem value="React Native CLI" label="React Native CLI">

 **react-native-reanimated**

<Tabs groupId="operating-systems">
  <TabItem value="yarn" label="yarn">

```bash npm2yarn
yarn add react-native-reanimated
```
</TabItem>
  <TabItem value="npm" label="npm">

```bash npm2yarn
npm install react-native-reanimated
```
</TabItem>
</Tabs>

[Click for react-native-reanimated installation instructions.](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)


**react-native-gesture-handler**

<Tabs groupId="operating-systems">
  <TabItem value="yarn" label="yarn">

```bash npm2yarn
yarn add react-native-gesture-handler
```
</TabItem>
  <TabItem value="npm" label="npm">

```bash npm2yarn
npm install react-native-gesture-handler
```
</TabItem>
</Tabs>

[Click for react-native-gesture-handler installation instructions.](https://docs.swmansion.com/react-native-gesture-handler/docs/installation)

 **react-native-vector-icons**

<Tabs groupId="operating-systems">
  <TabItem value="yarn" label="yarn">

```bash npm2yarn
yarn add react-native-vector-icons
```
</TabItem>
  <TabItem value="npm" label="npm">

```bash npm2yarn
npm install react-native-vector-icons
```
</TabItem>
</Tabs>

[Click for react-native-vector-icons installation instructions.](https://github.com/oblador/react-native-vector-icons#installation)

 **react-native-pager-view**

<Tabs groupId="operating-systems">
  <TabItem value="yarn" label="yarn">

```bash npm2yarn
yarn add react-native-pager-view
```
</TabItem>
  <TabItem value="npm" label="npm">

```bash npm2yarn
npm install react-native-pager-view
```
</TabItem>
</Tabs>

[Click for react-native-pager-view installation instructions.](https://github.com/callstack/react-native-pager-view#getting-started)

</TabItem>


<TabItem value="Expo" label="Expo">

**react-native-reanimated**


```bash npm2yarn
npx expo install react-native-reanimated
```
After the installation completes, you must also add the Babel plugin to babel.config.js:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

**react-native-gesture-handler**

```bash npm2yarn
npx expo install react-native-gesture-handler
```
Add this import to the top of your app entry file, such as App.js:

```js
import 'react-native-gesture-handler';
```
</TabItem>
</Tabs>

## Implementation

Wrap your root component in **KitraProvider** from react-native-kitra.

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
