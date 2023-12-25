import { render } from '@testing-library/react-native';
import Badge from '../Badge/Badge';
import Icon from '../Icons/Icon';

/* eslint-disable no-undef */
describe('Badge', () => {
  describe('renders with visible', () => {
    const tree = render(<Badge visible />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('renders badge with different sizes', () => {
    it('renders badge with small size', () => {
      const tree = render(<Badge size="small" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with medium size', () => {
      const tree = render(<Badge size="medium" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with medium size, visable prop is false', () => {
      render(<Badge size="medium" visible={false} />).toJSON();
    });
  });
  describe('renders badge with borderStyle', () => {
    it('renders badge with circular borderStyle', () => {
      const tree = render(<Badge borderStyle="circular" size="small" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders badge with rectangular borderStyle, small size', () => {
      const tree = render(<Badge borderStyle="rectangular" size="small" />).toJSON();
      expect(tree).toMatchSnapshot();
    }); it('renders badge with rectangular borderStyle', () => {
      const tree = render(<Badge borderStyle="rectangular" size="medium" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('renders badge with icon', () => {
    const tree = render(<Badge icon={<Icon name="check" type="ant-design" size={20} />} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('renders badge with label', () => {
    const tree = render(<Badge label="Test label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
