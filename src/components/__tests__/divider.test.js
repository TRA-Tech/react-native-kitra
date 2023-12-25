/* eslint-disable no-undef */
import { render } from '@testing-library/react-native';
import Divider from '../Divider/Divider';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Divider', () => {
  it('renders correctly', () => {
    const tree = renderWithContext(
      <Divider />,
    );

    expect(tree).toBeTruthy();
  });

  it('applies the correct styles', () => {
    const { getByTestId } = renderWithContext(
      <Divider testID="divider" width="50%" color="red" />,
    );

    const divider = getByTestId('divider').children[0];

    expect(divider).toHaveStyle(
      {
        width: '50%',
        borderColor: 'red',
      },
    );
  });
});
