/* eslint-disable no-undef */
import { act, fireEvent, render, renderHook } from '@testing-library/react-native';
import ToggleButton from '../ToggleButton/ToggleButton';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('ToggleButton', () => {
  const mockOnPress = jest.fn();
  const buttons = [{ label: 'button1', onPress: () => {} }, { label: 'button2', onPress: () => {} }, { label: 'button3', onPress: mockOnPress }];

  it('renders correctly', () => {
    const { getByText } = renderWithContext(<ToggleButton buttons={buttons} />);
    expect(() => getByText('button1')).not.toThrow();
    expect(() => getByText('button2')).not.toThrow();
  });

  it('setButtonList updates the state correctly', () => {
    const { getByText, rerender } = renderWithContext(<ToggleButton buttons={buttons} />);
    const button = getByText('button1');
    fireEvent.press(button);
    rerender(<ToggleButton buttons={buttons} />);
  });

  it('renders correctly with size prop set to small', () => {
    const { getByTestId } = renderWithContext(<ToggleButton buttons={buttons} size="small" />);
    const button1 = getByTestId('toggleButton-item-0');
    const button2 = getByTestId('toggleButton-item-1');

    // Check if the buttons have the correct styles for the 'small' size
    expect(button1).toHaveStyle({ paddingHorizontal: 10, paddingVertical: 5 });
    expect(button2).toHaveStyle({ paddingHorizontal: 10, paddingVertical: 5 });
  });

  it('renders correctly with size prop set to medium', () => {
    const { getByTestId } = renderWithContext(<ToggleButton buttons={buttons} size="medium" />);
    const button1 = getByTestId('toggleButton-item-0');
    const button2 = getByTestId('toggleButton-item-1');

    // Check if the buttons have the correct styles for the 'medium' size
    expect(button1).toHaveStyle({ paddingHorizontal: 20, paddingVertical: 10 });
    expect(button2).toHaveStyle({ paddingHorizontal: 20, paddingVertical: 10 });
  });

  it('sets borderRightWidth to 0 for the first button', () => {
    const { getByTestId } = renderWithContext(<ToggleButton buttons={buttons} />);
    const button1 = getByTestId('toggleButton-item-0');
    expect(button1).toHaveStyle({ borderRightWidth: 0 });
  });

  test('changes active prop when a button is pressed', () => {
    const { getByTestId, rerender } = render(<ToggleButton buttons={buttons} size="medium" />);
    const button1 = getByTestId('toggleButton-item-2');

    fireEvent.press(button1);

    expect(mockOnPress).toHaveBeenCalledWith(true);
  });
});
