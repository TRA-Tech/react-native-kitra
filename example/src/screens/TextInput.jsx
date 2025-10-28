/* eslint-disable react/no-unstable-nested-components */
import { Icon, TextInput, useTheme } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from '../components/Layout';

const TextInputScreen = () => {
  const { theme } = useTheme();

  return (
    <Layout scroll>
      <View style={{ rowGap: 15 }}>
        <Text style={styles.headerFirstText}>Outlined</Text>
        <Text style={styles.headerText}>Filled</Text>
        <TextInput variant="outlined" label="Label" />

        <Text style={styles.headerText}>Size S-M-L</Text>
        <TextInput
          variant="outlined"
          size="small"
          label="Label"
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />
        <TextInput
          variant="outlined"
          size="medium"
          label="Label"
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />
        <TextInput
          variant="outlined"
          size="large"
          label="Label"
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />

        <Text style={styles.headerText}>Left - Right Elements</Text>
        <View style={{ rowGap: 10 }}>
          <TextInput
            variant="outlined"
            label="Label"
            left={() => <Icon color={theme.primary} name="plus" size={18} />}
          />
          <TextInput
            variant="outlined"
            label="Label"
            right={() => (
              <TouchableOpacity>
                <Icon color={theme.primary} name="eye" size={18} />
              </TouchableOpacity>
            )}
          />
          <TextInput
            variant="outlined"
            label="Label"
            right={() => <Icon color={theme.primary} name="plus" size={18} />}
            left={() => <Icon color={theme.primary} name="eye" size={18} />}
          />
        </View>

        <Text style={styles.headerText}>Bottom Label</Text>
        <TextInput error variant="outlined" label="Label" bottomLabel="Hello, this is bottom label!" />

        <Text style={[styles.headerText, { marginTop: 10 }]}>Error</Text>
        <TextInput variant="outlined" label="Label" error errorMessage="Oops something went wrong!" />

        <Text style={styles.headerText}>Counter</Text>
        <TextInput variant="outlined" label="Label" count maxLength={20} />

        <Text style={styles.headerFirstText}>Filled</Text>

        <Text style={styles.headerText}>Filled</Text>
        <TextInput variant="filled" label="Label" />

        <Text style={styles.headerText}>Disabled</Text>
        <TextInput variant="filled" label="Label" editable={false} />

        <Text style={styles.headerText}>Size S-M-L</Text>
        <TextInput
          variant="filled"
          size="small"
          label="Label"
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />
        <TextInput
          variant="filled"
          size="medium"
          label="Label"
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />
        <TextInput
          variant="filled"
          size="large"
          label="Label"
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />

        <Text style={styles.headerText}>Left - Right Elements</Text>
        <View style={{ rowGap: 10 }}>
          <TextInput
            variant="filled"
            label="Label"
            left={() => <Icon color={theme.primary} name="plus" size={18} />}
          />
          <TextInput
            variant="filled"
            label="Label"
            right={() => (
              <TouchableOpacity>
                <Icon color={theme.primary} name="eye" size={18} />
              </TouchableOpacity>
            )}
          />
          <TextInput
            variant="filled"
            label="Label"
            right={() => <Icon color={theme.primary} name="plus" size={18} />}
            left={() => <Icon color={theme.primary} name="eye" size={18} />}
          />
        </View>

        <Text style={styles.headerText}>Error</Text>
        <TextInput variant="filled" label="Label" error errorMessage="Oops something went wrong!" />

        <Text style={styles.headerText}>Counter</Text>
        <TextInput variant="filled" label="Label" count maxLength={20} />

        <Text style={styles.headerFirstText}>Custom Theme</Text>
        <TextInput
          theme={{ default: { background: '#F6F9FF',
            border: '#195CEF',
            bottomLabel: '#195CEF',
            countLabel: '#195CEF',
            label: '#195CEF',
            value: '#195CEF' },
          focused: { background: 'white',
            border: 'grey',
            bottomLabel: '#195CEF',
            countLabel: '#195CEF',
            label: 'black',
            value: '#195CEF' } }}
          size="medium"
          label="Label"
          containerStyle={{ marginBottom: 10 }}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={event => <Icon color={event ? 'grey' : '#195CEF'} name="plus" size={18} />}
        />
        <TextInput
          variant="outlined"
          bottomLabel="Error"
          count
          maxLength={20}
          theme={{
            error: { background: 'white',
              border: 'red',
              bottomLabel: 'red',
              countLabel: 'red',
              label: 'red',
              value: 'red' },
          }}
          error
          size="medium"
          label="Label"
          containerStyle={{ marginBottom: 10 }}
          left={() => <Icon color="red" name="plus" size={18} />}
        />
        <TextInput
          variant="outlined"
          bottomLabel="Disabled"
          count
          maxLength={20}
          editable={false}
          theme={{
            disabled: { background: 'grey',
              border: 'grey',
              bottomLabel: 'grey',
              countLabel: 'grey',
              label: 'white',
              value: 'white' },
          }}
          size="medium"
          label="Label"
          containerStyle={{ marginTop: 10 }}
          left={() => <Icon color={theme.primary} name="plus" size={18} />}
        />
      </View>
    </Layout>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
  headerFirstText: { fontSize: 17, fontWeight: '500' },

});
