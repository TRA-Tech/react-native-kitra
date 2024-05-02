/* eslint-disable react/no-unstable-nested-components */
import { Icon, TextInput, useTheme } from '@tra-tech/react-native-kitra';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const TextInputScreen = () => {
  const { theme } = useTheme();

  return (
    <Layout scroll>
      <Divider label="Custom Theme" header />
      <TextInput
        theme={{ default: { background: 'blue',
          border: 'purple',
          bottomLabel: 'green',
          countLabel: 'yellow',
          label: 'black',
          value: 'white' },
        focused: { background: 'white',
          border: 'green',
          bottomLabel: 'green',
          countLabel: 'yellow',
          label: 'black',
          value: 'orange' } }}
        size="medium"
        label="Label"
        containerStyle={{ marginBottom: 10 }}
        // eslint-disable-next-line react/no-unstable-nested-components
        left={event => <Icon type="ant-design" color={event ? 'red' : 'white'} name="plus" size={18} />}
      />
      <TextInput
        variant="outlined"
        bottomLabel="Error"
        count
        maxLength={20}
        theme={{
          error: { background: 'red',
            border: 'pink',
            bottomLabel: 'red',
            countLabel: 'purple',
            label: 'black',
            value: 'white' },
        }}
        error
        size="medium"
        label="Label"
        containerStyle={{ marginBottom: 10 }}
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />
      <TextInput
        variant="outlined"
        bottomLabel="Disabled"
        count
        maxLength={20}
        editable={false}
        theme={{
          disabled: { background: 'green',
            border: 'grey',
            bottomLabel: 'grey',
            countLabel: 'red',
            label: 'orange',
            value: 'white' },
        }}
        size="medium"
        label="Label"
        containerStyle={{ marginTop: 10 }}
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />
      <Divider label="Outlined" header style={{ marginTop: 20 }} />

      <Divider label="Filled" style={{ marginTop: 0 }} />
      <TextInput variant="outlined" label="Label" />

      <Divider label="Size S-M-L" style={{ marginTop: 0 }} />
      <TextInput
        variant="outlined"
        size="small"
        label="Label"
        containerStyle={{ marginBottom: 10 }}
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />
      <TextInput
        variant="outlined"
        size="medium"
        label="Label"
        containerStyle={{ marginBottom: 10 }}
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />
      <TextInput
        variant="outlined"
        size="large"
        label="Label"
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />

      <Divider label="Left - Right Elements" />
      <View style={{ rowGap: 10 }}>
        <TextInput
          variant="outlined"
          label="Label"
          left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
        />
        <TextInput
          variant="outlined"
          label="Label"
          right={() => (
            <TouchableOpacity>
              <Icon type="ant-design" color={theme.primary} name="eye" size={18} />
            </TouchableOpacity>
          )}
        />
        <TextInput
          variant="outlined"
          label="Label"
          right={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
          left={() => <Icon type="ant-design" color={theme.primary} name="eye" size={18} />}
        />
      </View>

      <Divider label="Bottom Label" />
      <TextInput error variant="outlined" label="Label" bottomLabel="Hello, this is bottom label!" />

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
      <TextInput variant="filled" label="Label" editable={false} />

      <Divider label="Size S-M-L" style={{ marginTop: 0 }} />
      <TextInput
        variant="filled"
        size="small"
        label="Label"
        containerStyle={{ marginBottom: 10 }}
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />
      <TextInput
        variant="filled"
        size="medium"
        label="Label"
        containerStyle={{ marginBottom: 10 }}
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />
      <TextInput
        variant="filled"
        size="large"
        label="Label"
        left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
      />

      <Divider label="Left - Right Elements" />
      <View style={{ rowGap: 10 }}>
        <TextInput
          variant="filled"
          label="Label"
          left={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
        />
        <TextInput
          variant="filled"
          label="Label"
          right={() => (
            <TouchableOpacity>
              <Icon type="ant-design" color={theme.primary} name="eye" size={18} />
            </TouchableOpacity>
          )}
        />
        <TextInput
          variant="filled"
          label="Label"
          right={() => <Icon type="ant-design" color={theme.primary} name="plus" size={18} />}
          left={() => <Icon type="ant-design" color={theme.primary} name="eye" size={18} />}
        />
      </View>

      <Divider label="Error" />
      <TextInput variant="filled" label="Label" error errorMessage="Oops something went wrong!" />

      <Divider label="Counter" />
      <TextInput variant="filled" label="Label" count />

      <Divider label="Counter" />
      <TextInput variant="filled" label="Label" count maxLength={20} />
    </Layout>
  );
};

export default TextInputScreen;
