import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { KitraProvider, useTheme } from '@tra-tech/react-native-kitra';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import Home from './src/screens/Home';
import TextInputScreen from './src/screens/TextInput';
import CheckBoxScreen from './src/screens/CheckBox';
import ButtonScreen from './src/screens/Button';
import ProgressBarScreen from './src/screens/ProgressBar';
import BadgeScreen from './src/screens/Badge';
import AccordionListScreen from './src/screens/AccordionList';
import RadioButtonScreen from './src/screens/RadioButton';
import ToggleButtonScreen from './src/screens/ToggleButton';
import MenuScreen from './src/screens/Menu';
import DropdownScreen from './src/screens/Dropdown';
import SwipeScreen from './src/screens/Swipe';
import DividerScreen from './src/screens/Divider';
import SpeedDialScreen from './src/screens/SpeedDial';
import AvatarScreen from './src/screens/Avatar';
import AvatarGroupScreen from './src/screens/AvatarGroup';
import ChipScreen from './src/screens/Chip';
import SwitchScreen from './src/screens/Switch';
import SliderScreen from './src/screens/Slider';
import PagerViewScreen from './src/screens/PagerView';
import ActivityIndicatorScreen from './src/screens/ActivityIndicator';
import IconScreen from './src/screens/Icon';

// Import your screens here
// ...

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const prepareResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    };

    prepareResources();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    });
  };

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <KitraProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AccordionList" component={AccordionListScreen} />
            <Stack.Screen name="ActivityIndicator" component={ActivityIndicatorScreen} />
            <Stack.Screen name="Avatar" component={AvatarScreen} />
            <Stack.Screen name="AvatarGroup" component={AvatarGroupScreen} />
            <Stack.Screen name="Badge" component={BadgeScreen} />
            <Stack.Screen name="Button" component={ButtonScreen} />
            <Stack.Screen name="CheckBox" component={CheckBoxScreen} />
            <Stack.Screen name="Chip" component={ChipScreen} />
            <Stack.Screen name="Divider" component={DividerScreen} />
            <Stack.Screen name="Dropdown" component={DropdownScreen} />
            <Stack.Screen name="Icon" component={IconScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="PagerView" component={PagerViewScreen} />
            <Stack.Screen name="ProgressBar" component={ProgressBarScreen} />
            <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
            <Stack.Screen name="Slider" component={SliderScreen} />
            <Stack.Screen name="SpeedDial" component={SpeedDialScreen} />
            <Stack.Screen name="Swipe" component={SwipeScreen} />
            <Stack.Screen name="Switch" component={SwitchScreen} />
            <Stack.Screen name="TextInput" component={TextInputScreen} />
            <Stack.Screen name="ToggleButton" component={ToggleButtonScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </KitraProvider>
    </SafeAreaView>
  );
}
