import { setUpTests } from 'react-native-reanimated/lib/commonjs/reanimated2/jestUtils';
require('@shopify/flash-list/jestSetup');

setUpTests();
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('expo-linear-gradient', () => 'LinearGradient');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
