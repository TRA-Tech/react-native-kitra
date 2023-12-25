/* eslint-disable no-undef */
import { render, fireEvent, screen } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import TextInput from '../TextInput/TextInput';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('TextInput', () => {
  it('renders default', () => {
    const tree = renderWithContext(
      <TextInput testID="textInput" label="label" value="value" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders correctly with default props', () => {
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" />);
    expect(getByTestId('textInput')).toBeTruthy();
  });

  it('calls onChangeText when text changes', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" onChangeText={onChangeText} />);
    const input = getByTestId('textInput');
    fireEvent.changeText(input, 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });

  it('calls onFocus when input is focused', () => {
    const onFocus = jest.fn();
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" onFocus={onFocus} />);
    const input = getByTestId('textInput');
    input.props.onFocus();
    expect(onFocus).toHaveBeenCalled();
  });

  it('displays helper text when provided', () => {
    const { getByText } = renderWithContext(<TextInput helperText="Helper text" />);
    expect(getByText('Helper text')).toBeTruthy();
  });

  it('displays error message when error prop is true', () => {
    const { getByText } = renderWithContext(<TextInput error errorMessage="Error message" />);
    expect(getByText('Error message')).toBeTruthy();
  });

  it('displays count when count prop is true', () => {
    const { getByText } = renderWithContext(<TextInput count placeholder="enter" maxLength={10} />);
    fireEvent.changeText(screen.getByPlaceholderText('enter'), 'test');
    expect(getByText('4/10')).toBeTruthy();
  });

  it('displays label correctly', () => {
    const { getByText } = renderWithContext(<TextInput label="input" />);
    expect(getByText('input')).toBeTruthy();
  });

  it('renders correctly with size="large"', () => {
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" size="large" />);
    const input = getByTestId('textInput');
    expect(input).toHaveStyle({ fontSize: 14 });
  });

  it('renders correctly with size="medium"', () => {
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" size="medium" />);
    const input = getByTestId('textInput');
    expect(input).toHaveStyle({ fontSize: 12 });
  });

  it('renders correctly with size="small"', () => {
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" size="small" />);
    const input = getByTestId('textInput');
    expect(input).toHaveStyle({ fontSize: 10 });
  });

  it('renders  with variant="filled"', () => {
    const tree = renderWithContext(
      <TextInput testID="textInput" variant="filled" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders  with variant="outlined"', () => {
    const tree = renderWithContext(
      <TextInput testID="textInput" variant="outlined" />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom inputStyle', () => {
    const customStyle = { color: 'blue' };
    const { getByTestId } = renderWithContext(<TextInput testID="textInput" inputStyle={customStyle} />);
    const input = getByTestId('textInput');
    expect(input).toHaveStyle(customStyle);
  });

  it('renders correctly with custom helperTextStyle', () => {
    const customStyle = { fontSize: 10 };
    const { getByText } = renderWithContext(<TextInput helperText="helpertext" helperTextStyle={customStyle} />);
    const helperText = getByText('helpertext');

    expect(helperText).toHaveStyle({ fontSize: 10 });
    // Add your assertions for the helperTextStyle here
  });
});
