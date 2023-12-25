/* eslint-disable no-undef */
import { render } from '@testing-library/react-native';
import React from 'react';
import Icon from '../Icons/Icon';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Icon', () => {
  test('renders correctly', () => {
    const { getByTestId } = renderWithContext(<Icon testID="icon" type="ionicons" />);
    const icon = getByTestId('icon');
    expect(icon).toBeDefined();
  });
});
