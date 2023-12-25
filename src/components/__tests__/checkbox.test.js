/* eslint-disable no-undef */

import { render, fireEvent } from '@testing-library/react-native';
import { CheckBox } from '../../index';

describe('CheckBox', () => {
  describe('renders with different props', () => {
    it('renders unchecked', () => {
      const tree = render(<CheckBox testID="checkbox" value={false} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders checked', () => {
      const tree = render(<CheckBox testID="checkbox" value />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('renders disabled', () => {
      const tree = render(<CheckBox testID="checkbox" disabled />).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('renders custom icon color', () => {
      const tree = render(<CheckBox testID="checkbox" iconColor="red" value />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('calls the correct function when pressed', () => {
    it('calls onPress with the opposite of the current status when pressed', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(<CheckBox testID="checkbox" onPress={onPress} value />);
      const checkbox = getByTestId('checkbox');
      fireEvent.press(checkbox);

      expect(onPress).toHaveBeenCalledWith(false);
    });

    it('calls onChange when the checkbox is pressed', () => {
      const onChange = jest.fn();
      const { getByTestId } = render(<CheckBox testID="checkbox" onChange={onChange} value={false} />);

      fireEvent.press(getByTestId('checkbox'));

      expect(onChange).toHaveBeenNthCalledWith(1, false);
      expect(onChange).toHaveBeenNthCalledWith(2, true);
    });
  });
});
