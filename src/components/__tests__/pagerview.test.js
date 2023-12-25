/* eslint-disable no-undef */

import { fireEvent, render, act, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import PagerView from '../PagerView/PagerView';
import { defaultTheme } from '../../core/theme/theme';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);
const onPageScrollMock = jest.fn();
const onPageSelectedMock = jest.fn();

const RenderItem = initialPage => (
  <PagerView
    initialPage={initialPage}
    showDivider
    dividerColor={defaultTheme.dark.grey}
    pageContainerStyle={{ height: 500 }}
    dividerStyle={{ height: 2 }}
    headerContainerStyle={{ backgroundColor: defaultTheme.dark.background, width: '100%' }}
    headerTextColor={{ select: defaultTheme.dark.white, default: defaultTheme.dark.disabledDark }}
    headerSliderStyle={[{ backgroundColor: defaultTheme.dark.white, bottom: 0, height: 2, marginTop: 20 }]}
    containerStyle={{ paddingHorizontal: 24 }}
    testID="pager_view"
  >
    <View key="Screen 1" testID="screen_1">
      <Text>
        Test1
      </Text>
    </View>
    <View key="Screen 2" testID="screen_2">
      <Text>
        Test2
      </Text>
    </View>
  </PagerView>
);
describe('PagerView', () => {
  it('renders PagerView', () => {
    const tree = renderWithContext(<PagerView />);
    expect(tree).toMatchSnapshot();
  });
  it('renders PagerView with not react element', () => {
    const tree = renderWithContext(<PagerView>Test</PagerView>);
    expect(tree).toMatchSnapshot();
  });
  it('tab items button press', async () => {
    renderWithContext(<RenderItem />);
    const screen1 = screen.getByTestId('screen_1');
    const screen2 = screen.getByTestId('screen_2');

    const tabButton = screen.getByTestId('tab_button_0');

    fireEvent.press(tabButton);
    act(() => {
      fireEvent(tabButton, 'layout', {
        nativeEvent: { layout: { height: 40 } },
      });
    });

    expect(screen1).toBeVisible();

    const tabButton1 = screen.getByTestId('tab_button_1');
    fireEvent.press(tabButton1);

    expect(screen2).toBeVisible();
  });
});
