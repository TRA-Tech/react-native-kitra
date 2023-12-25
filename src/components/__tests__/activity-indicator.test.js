import { fireEvent, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('ActiviyIndicator', () => {
  it('renders avtivity indicator with children', () => {
    // eslint-disable-next-line react/no-children-prop
    const tree = renderWithContext(<ActivityIndicator children={<Text>TEST</Text>} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders avtivity indicator', () => {
    const tree = renderWithContext(<ActivityIndicator />);
    expect(tree).toMatchSnapshot();
  });
});
