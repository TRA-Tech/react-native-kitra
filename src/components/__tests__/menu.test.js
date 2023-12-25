/* eslint-disable no-undef */

import { fireEvent, render, waitFor, screen, act } from '@testing-library/react-native';
import { Text } from 'react-native';

import { KitraProvider } from '../../core/KitraProvider';
import Menu from '../Menu/Menu';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Menu', () => {
  describe('renders without crashing', () => {
    const { toJSON } = renderWithContext(<Menu items={[]} />);
    expect(toJSON()).toMatchSnapshot();
  });
  describe('open and close menu', () => {
    const onPress = jest.fn();
    const onPress1 = jest.fn();
    const onPress2 = jest.fn();
    it('toggles open on button press', async () => {
      renderWithContext(<Menu
        closeOnPress
        items={[
          { label: 'test', left: <Text>sada</Text>, onPress },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, dividerColor: 'red', onPress: onPress1 },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, onPress: onPress2 },
        ]}
      />);
      const openButton = screen.getByTestId('open_button');
      fireEvent.press(openButton);

      const menuContainer = screen.getByTestId('menu_container');
      expect(menuContainer).toBeVisible();

      const closeButton = screen.getByTestId('item_button_0');
      fireEvent.press(closeButton);

      expect(onPress).toHaveBeenCalled();
    });
    it('menu close with open button', async () => {
      renderWithContext(<Menu
        items={[
          { label: 'test', left: <Text>sada</Text>, onPress },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, dividerColor: 'red', onPress: onPress1 },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, onPress: onPress2 },
        ]}
      />);
      const openButton = screen.getByTestId('open_button');
      fireEvent.press(openButton);
      const menuContainer = screen.getByTestId('menu_container');
      act(() => {
        fireEvent(menuContainer, 'layout', {
          nativeEvent: { layout: { } },
        });
      });
      expect(menuContainer).toBeVisible();

      fireEvent.press(openButton);
    });
  });
});
