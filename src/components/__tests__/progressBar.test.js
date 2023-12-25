/* eslint-disable no-undef */
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { KitraProvider } from '../../core/KitraProvider';

jest.useFakeTimers({ legacyFakeTimers: true });

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('ProgressBar', () => {
  test('renders correctly', () => {
    const { getByTestId } = renderWithContext(<ProgressBar testID="progressBar" />);
    const progressBar = getByTestId('progressBar');
    expect(progressBar).toBeDefined();
  });

  test('renders with correct colors', () => {
    const { getByTestId } = renderWithContext(<ProgressBar testID="progressBar" barColor="red" progressColor="green" />);
    const progressBar = getByTestId('progressBarAnimation');
    const progressBarContainer = getByTestId('progressBar');

    expect(progressBar).toHaveStyle({ backgroundColor: 'green' });
    expect(progressBarContainer).toHaveStyle({ backgroundColor: 'red' });
  });
});
