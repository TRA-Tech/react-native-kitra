/* eslint-disable no-undef */
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Swipe, { calculateDragValue } from '../Swipe/index';
import Icon from '../Icons/Icon';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

it('renders the children correctly', () => {
  const { getByText } = renderWithContext(
    <Swipe>
      <Text>Swipe me</Text>
    </Swipe>,
  );

  expect(getByText('Swipe me')).toBeTruthy();
});

it('calls the onPress function when a right action is pressed', () => {
  const mockOnPress = jest.fn();
  const rightActions = [
    { text: 'Action', onPress: mockOnPress, style: { width: 100 } },
  ];

  const { getByText } = renderWithContext(<Swipe rightActions={rightActions}><Text>Swipe me</Text></Swipe>);

  fireEvent.press(getByText('Action'));

  expect(mockOnPress).toHaveBeenCalled();
});

it('renders the correct number of right actions', () => {
  const rightActions = [
    { text: 'Action 1', onPress: jest.fn(), style: { width: 100 } },
    { text: 'Action 2', onPress: jest.fn(), style: { width: 100 } },
  ];

  const { getAllByText } = renderWithContext(<Swipe rightActions={rightActions}><Text>Swipe me</Text></Swipe>);

  const actions = getAllByText(/Action/);

  expect(actions).toHaveLength(rightActions.length);
});

it('renders the left action correctly', () => {
  const leftAction = { text: 'Left Action', onPress: jest.fn(), style: { width: 100 } };

  const { getByText } = renderWithContext(<Swipe leftAction={leftAction}><Text>Swipe me</Text></Swipe>);

  const action = getByText('Left Action');

  expect(action).toBeTruthy();
});

it('calls the onPress function when the left action is pressed', () => {
  const mockOnPress = jest.fn(() => {});
  const leftAction = { icon: <Icon type="evilicon" name="trash" size={18} color="white" />,
    text: 'Action',
    onPress: mockOnPress,
    style: {
      backgroundColor: '#FF3434',
    } };

  const { getByText } = renderWithContext(<Swipe leftAction={leftAction}><Text>Swipe me</Text></Swipe>);

  fireEvent.press(getByText('Action'));

  expect(mockOnPress).toHaveBeenCalled();
});
