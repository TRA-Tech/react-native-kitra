import { render, fireEvent } from '@testing-library/react-native';
import Chip from '../Chip/Chip';
import { KitraProvider } from '../../core/KitraProvider';
/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);
jest.useFakeTimers();

describe('Chip', () => {
  describe('Rendering', () => {
    it('renders chip with label', () => {
      const tree = render(<Chip label="Test label" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders chip with disable', () => {
      const tree = render(<Chip disable />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders small size check icon to left', () => {
      const tree = render(<Chip size="small" icon={{ iconName: 'check', iconType: 'ant-design', iconPosition: 'left' }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders small size check icon to right', () => {
      const tree = render(<Chip size="small" icon={{ iconName: 'check', iconType: 'ant-design', iconPosition: 'right' }} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('applies opacity renders chip with disable', () => {
      const { getByTestId } = render(<Chip disabled />);
      const chip = getByTestId('chip');
      expect(chip).toHaveStyle({
        opacity: 1,
      });
    });
  });
  describe('renders badge with different sizes', () => {
    it('renders badge with small sizes', () => {
      const tree = render(<Chip size="small" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with medium sizes', () => {
      const tree = render(<Chip size="medium" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with large sizes', () => {
      const tree = render(<Chip size="large" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('calls the correct function when pressed', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Chip testID="chip" onChange={onChange} value={false} />);

    fireEvent.press(getByTestId('chip'));

    expect(onChange).toHaveBeenNthCalledWith(1, false);
    expect(onChange).toHaveBeenNthCalledWith(2, true);
  });
});
