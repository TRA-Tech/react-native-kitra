import { Icon, TextInput, useTheme } from '@tra-tech/react-native-kitra';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const TextInputAvoidingView = ({ children }) => (Platform.OS === 'ios' ? (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="padding"
    keyboardVerticalOffset={100}
  >
    {children}
  </KeyboardAvoidingView>
) : (
  <>{children}</>
));

const TextInputScreen = () => {
  const { theme } = useTheme();

  return (
    <TextInputAvoidingView>
      <Layout scroll>
        <Divider label="Outlined" header style={{ marginTop: 0 }} />

        <Divider label="Filled" style={{ marginTop: 0 }} />
        <TextInput variant="outlined" label="Label" />

        <Divider label="Size S-M-L" style={{ marginTop: 0 }} />
        <TextInput variant="outlined" size="small" label="Label" containerStyle={{ marginBottom: 10 }} left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />
        <TextInput variant="outlined" size="medium" label="Label" containerStyle={{ marginBottom: 10 }} left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />
        <TextInput variant="outlined" size="large" label="Label" left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />

        <Divider label="Disabled" />
        <TextInput variant="outlined" label="Label" disabled />

        <Divider label="Left - Right Elements" />
        <View style={{ rowGap: 10 }}>
          <TextInput variant="outlined" label="Label" left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />
          <TextInput variant="outlined" label="Label" right={<TouchableOpacity><Icon type="ant-design" color={theme.primary} name="eye" size={18} /></TouchableOpacity>} />
          <TextInput variant="outlined" label="Label" right={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} left={<Icon type="ant-design" color={theme.primary} name="eye" size={18} />} />
        </View>

        <Divider label="Helper Text" />
        <TextInput variant="outlined" label="Label" helperText="Hello, this is helper text!" />

        <Divider label="Error" />
        <TextInput variant="outlined" label="Label" error errorMessage="Oops something went wrong!" />

        <Divider label="Counter" />
        <TextInput variant="outlined" label="Label" count />

        <Divider label="Counter" />
        <TextInput variant="outlined" label="Label" count maxLength={20} />

        <Divider label="Filled" header />

        <Divider label="Filled" style={{ marginTop: 0 }} />
        <TextInput variant="filled" label="Label" />

        <Divider label="Disabled" />
        <TextInput variant="filled" label="Label" disabled />

        <Divider label="Size S-M-L" style={{ marginTop: 0 }} />
        <TextInput variant="filled" size="small" label="Label" containerStyle={{ marginBottom: 10 }} left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />
        <TextInput variant="filled" size="medium" label="Label" containerStyle={{ marginBottom: 10 }} left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />
        <TextInput variant="filled" size="large" label="Label" left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />

        <Divider label="Left - Right Elements" />
        <View style={{ rowGap: 10 }}>
          <TextInput variant="filled" label="Label" left={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} />
          <TextInput variant="filled" label="Label" right={<TouchableOpacity><Icon type="ant-design" color={theme.primary} name="eye" size={18} /></TouchableOpacity>} />
          <TextInput variant="filled" label="Label" right={<Icon type="ant-design" color={theme.primary} name="plus" size={18} />} left={<Icon type="ant-design" color={theme.primary} name="eye" size={18} />} />
        </View>

        <Divider label="Helper Text" />
        <TextInput variant="filled" label="Label" helperText="Hello, this is helper text!" />

        <Divider label="Error" />
        <TextInput variant="filled" label="Label" error errorMessage="Oops something went wrong!" />

        <Divider label="Counter" />
        <TextInput variant="filled" label="Label" count />

        <Divider label="Counter" />
        <TextInput variant="filled" label="Label" count maxLength={20} />
      </Layout>
    </TextInputAvoidingView>
  );
};

export default TextInputScreen;
