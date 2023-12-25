import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
/* eslint-disable no-undef */
import SpeedDial from '../SpeedDial/SpeedDial';
import Icon from '../Icons/Icon';
import { defaultTheme } from '../../core/theme/theme';

import { KitraProvider } from '../../core/KitraProvider';
// Mocked functions for onPress
const onPressItem1 = jest.fn();
const onPressItem2 = jest.fn();
const onPressItem3 = jest.fn();
// expect(someElement).toBeVisible(); görünüyor mu ?
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

const items = [
  { icon: <Icon type="ant-design" name="check" size={25} color="#ffffff" />, onPress: onPressItem1 },
  { title: 'ads', onPress: onPressItem2 },
  { icon: <Icon type="ant-design" name="check" size={25} color="#ffffff" />, onPress: onPressItem3 },
];
describe('SpeedDial', () => {
  describe('renders speedDial with variant prop', () => {
    it('variant is spread', () => {
      const tree = render(<SpeedDial items={items} variant="spread" baseItemIcon={<Icon type="material-community" name="close" size={25} color={defaultTheme.dark.white} />} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('variant is flat', () => {
      const tree = render(<SpeedDial items={items} variant="flat" baseItemIcon={<Icon type="ant-design" name="check" size={20} />} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders speedDial elemts onpress', () => {
    it('onpress baseitem', () => {
      render(<SpeedDial items={items} />).toJSON();
      const test = screen.getByTestId('base_item');
      fireEvent.press(test);
    });
    it('onpress childitem', () => {
      render(<SpeedDial items={items} variant="flat" baseItemIcon={<Icon type="ant-design" name="check" size={20} />} />).toJSON();
      const test = screen.getByTestId('base_item');
      fireEvent.press(test);

      const child1 = screen.getByTestId('children_item_0');
      fireEvent.press(child1);
      expect(onPressItem1).toHaveBeenCalled();

      const child2 = screen.getByTestId('children_item_1');
      fireEvent.press(child2);
      expect(onPressItem2).toHaveBeenCalled();

      const child3 = screen.getByTestId('children_item_2');
      fireEvent.press(child3);
      expect(onPressItem3).toHaveBeenCalled();
    });
  });
});
