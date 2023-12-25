/* eslint-disable no-undef */
import { fireEvent, render, act, screen } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Modal from '../Modal/Modal';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Modal', () => {
  it('renders Modal visible is false', () => {
    const tree = renderWithContext(<Modal />);
    expect(tree).toMatchSnapshot();
  });
  it('renders Modal visible is true', () => {
    const tree = renderWithContext(<Modal visible />);
    expect(tree).toMatchSnapshot();
  });
});
