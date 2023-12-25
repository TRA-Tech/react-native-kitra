/* eslint-disable no-undef */
import { render } from '@testing-library/react-native';
import { Button, Icon, KitraProvider } from '../../index';
import { defaultTheme } from '../../core/theme/theme';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Button', () => {
  describe('renders text button with different sizes', () => {
    it('renders text button ', () => {
      const tree = renderWithContext(
        <Button label="Button Text" />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders text button with small size ', () => {
      const tree = renderWithContext(
        <Button size="small" label="Button Text" />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders text button with medium size ', () => {
      const tree = renderWithContext(
        <Button size="medium" label="Button Text" />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders text button with large size ', () => {
      const tree = renderWithContext(
        <Button size="large" label="Button Text" />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders small size heart icon to different positions', () => {
    it('renders small size heart icon to left', () => {
      const tree = renderWithContext(
        <Button size="small" iconPosition="left" label="Button Text">
          <Icon type="material-community" name="penguin" />
        </Button>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders small size heart icon to right', () => {
      const tree = renderWithContext(
        <Button size="small" iconPosition="right" label="Button Text">
          <Icon type="material-community" name="penguin" />
        </Button>,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('applies styles based on different states', () => {
    it('applies focused styles when pressed', () => {
      const { getByTestId } = renderWithContext(<Button testOnly_pressed testID="button" label="Test Button" />);
      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: defaultTheme.dark.focused,
      });
    });
    it('applies background disabled styles when disabled', () => {
      const { getByTestId } = renderWithContext(<Button testID="button" label="Test Button" disabled />);
      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: defaultTheme.dark.disabledLight,
      });
    });
    it('applies text disabled styles when disabled', () => {
      const { getByTestId } = renderWithContext(<Button testID="button" label="Test Button" disabled />);
      const button = getByTestId('button_text');

      expect(button).toHaveStyle({
        color: defaultTheme.dark.grey,
      });
    });
    it('overrides styles with statusStyle prop', () => {
      const { getByTestId } = renderWithContext(<Button testID="button" label="Test Button" style={{ backgroundColor: 'red' }} />);
      const button = getByTestId('button');

      expect(button).toHaveStyle({
        backgroundColor: 'red',
      });
    });
  });
});
