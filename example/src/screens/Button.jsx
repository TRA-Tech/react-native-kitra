/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const ButtonScreen = () => (
  <Layout scroll>
    <View style={{ rowGap: 15 }}>
      <Text style={styles.headerText}>Default</Text>
      <Button label="Press Me!" />

      <Text style={styles.headerText}>Disabled</Text>
      <Button label="Press Me!" disabled />

      <Text style={styles.headerText}>Left-Right Elements</Text>
      <View style={{ rowGap: 5 }}>
        <Button label="Press Me!" left={event => <Icon name={event ? 'user' : 'user-circle'} />} />
        <Button label="Press Me!" right={() => <Icon name="user" />} />
        <Button
          label="Press Me!"
          right={() => <Icon name="user" />}
          left={() => <Icon name="user" />}
        />
      </View>

      <Text style={styles.headerText}>Size S-M-L</Text>
      <View style={{ rowGap: 5 }}>
  <Button label="Press Me!" size="small" left={() => <Icon name="user" />} />
  <Button label="Press Me!" size="medium" left={() => <Icon name="user" />} />
  <Button label="Press Me!" size="large" left={() => <Icon name="user" />} />
      </View>

      <Text style={styles.headerText}>Custom Theme</Text>
      <View style={{ rowGap: 15 }}>
        <Button
          theme={{
            default: { background: '#F6F9FF', label: '#195CEF' },
            pressed: { background: '#195CEF', label: 'white' },
          }}
          label="Press Me!"
          size="small"
          left={() => <Icon name="user" />}
        />

        <Text style={styles.headerText}>Custom Disabled Theme</Text>
        <Button
          theme={{ disabled: { background: 'grey', label: '#195CEF' } }}
          disabled
          label="Press Me!"
          size="medium"
          left={() => <Icon name="user" />}
        />

      </View>
    </View>

  </Layout>
);

export default ButtonScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
