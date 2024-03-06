require('react-native-reanimated/src/reanimated2/jestUtils').setUpTests();
require('@shopify/flash-list/jestSetup');

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('expo-linear-gradient', () => 'LinearGradient');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
