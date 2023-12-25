/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Dropdown from '../Dropdown/index';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Dropdown', () => {
  const mockData = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }];
  const mockOnSelect = jest.fn();

  it('renders correctly', () => {
    const { getByText } = renderWithContext(
      <Dropdown
        data={mockData}
        onSelect={mockOnSelect}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
      />,
    );

    expect(getByText('Please Select')).toBeTruthy();
  });

  it('selects an item', () => {
    const { getByText } = renderWithContext(
      <Dropdown
        data={mockData}
        onSelect={mockOnSelect}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
      />,
    );

    fireEvent.press(getByText('Please Select'));

    fireEvent.press(getByText('Item 1'));

    expect(mockOnSelect).toHaveBeenCalledWith(mockData[0]);
  });

  it('toggles dropdown visibility when button is pressed', () => {
    const { getByText, queryByText } = renderWithContext(
      <Dropdown
        data={mockData}
        onSelect={mockOnSelect}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
      />,
    );

    expect(queryByText('Item 1')).toBeNull();

    fireEvent.press(getByText('Please Select'));

    expect(queryByText('Item 1')).not.toBeNull();

    fireEvent.press(getByText('Please Select'));

    expect(queryByText('Item 1')).toBeNull();
  });
});
