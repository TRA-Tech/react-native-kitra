/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react-native';
import MultipleDropdown from '../Dropdown/index';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('MultipleDropdown', () => {
  const mockOnSelect = jest.fn();
  const mockOnComplete = jest.fn();
  const mockData = ['item1', 'item2', 'item3'];
  const defaultProps = {
    data: mockData,
    displayedRowValue: jest.fn(),
    displayedButtonValue: jest.fn(),
    onSelect: mockOnSelect,
    onComplete: mockOnComplete,
    testID: 'dropdown',
  };

  it('renders correctly', () => {
    const { getByTestId } = renderWithContext(<MultipleDropdown multiple {...defaultProps} />);
    expect(getByTestId('dropdown')).toBeTruthy();
  });

  it('toggles dropdown visibility when button is pressed', () => {
    const { getByTestId } = renderWithContext(<MultipleDropdown multiple {...defaultProps} />);
    const button = getByTestId('dropdown-button');
    fireEvent.press(button);
    expect(getByTestId('dropdown-list')).toBeTruthy();
  });

  it('calls onComplete when the complete button is pressed', () => {
    const { getByTestId } = renderWithContext(<MultipleDropdown multiple {...defaultProps} />);
    const button = getByTestId('dropdown-button');
    fireEvent.press(button);
    const completeButton = getByTestId('dropdown-complete-button');
    fireEvent.press(completeButton);
    expect(mockOnComplete).toHaveBeenCalled();
  });
});
