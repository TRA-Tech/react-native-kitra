/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react-native';
import React, { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import { KitraProvider } from '../../core/KitraProvider';
import { defaultTheme } from '../../core/theme/theme';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('RadioButton', () => {
  test('renders correctly', () => {
    const { getByTestId } = renderWithContext(<RadioButton testID="radio" onChange={jest.fn()} />);
    const radioButton = getByTestId('radio');
    expect(radioButton).toBeDefined();
  });

  test('changes value when pressed', () => {
    const onChange = jest.fn();
    const { getByTestId } = renderWithContext(<RadioButton testID="radio" onChange={onChange} />);
    const radioButton = getByTestId('radio');

    fireEvent.press(radioButton);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('changes style based on value', () => {
    const onChange = jest.fn();
    const TestComponent = () => {
      const [value, setValue] = useState(false);

      return (
        <RadioButton
          testID="radio"
          onChange={() => {
            setValue(!value);
            onChange(!value);
          }}
          value={value}
        />
      );
    };

    const { getByTestId } = renderWithContext(<TestComponent />);
    const radioButton = getByTestId('radio');
    expect(radioButton).toHaveStyle({ borderColor: defaultTheme.dark.disabledDark, backgroundColor: defaultTheme.dark.disabledLight });
    fireEvent.press(radioButton);
    expect(radioButton).toHaveStyle({ borderColor: defaultTheme.dark.primary, backgroundColor: defaultTheme.dark.white });
  });
});
