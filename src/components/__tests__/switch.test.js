/* eslint-disable no-undef */
import { render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Switch from '../Switch/Switch';
import { defaultTheme } from '../../core/theme/theme';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Switch', () => {
  test('renders correctly', () => {
    const { getByTestId } = renderWithContext(<Switch testID="switch" value={false} />);
    const switchElement = getByTestId('switch');
    expect(switchElement).toBeDefined();
  });

  test('sets trackColor correctly based on value prop', () => {
    const { getByTestId } = renderWithContext(<Switch testID="switch" value />);
    const switchElement = getByTestId('switch');
    expect(switchElement.props.onTintColor).toEqual(defaultTheme.dark.focused);
  });

  test('sets thumbColor correctly', () => {
    const { getByTestId } = renderWithContext(<Switch testID="switch" value={false} />);
    const switchElement = getByTestId('switch');

    expect(switchElement.props.thumbTintColor).toEqual(defaultTheme.dark.white);
  });
});
