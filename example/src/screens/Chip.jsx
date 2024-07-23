/* eslint-disable react/no-unstable-nested-components */
import { Chip, Icon } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text, View } from 'react-native';
import Layout from '../components/Layout';

const ChipScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <Chip label="Press Me!" />

    <Text style={styles.headerText}>Size S-M-L</Text>
    <View style={{ rowGap: 20 }}>
      <Chip label="Press Me!" size="small" />
      <Chip label="Press Me!" size="medium" />
      <Chip
        label="Press Me!"
        size="large"
        left={event => <Icon name={event ? 'cat' : 'dog'} type="font-awesome-5" size={20} />}
      />
    </View>

    <Text style={styles.headerText}>Disabled</Text>
    <Chip disabled label="Press Me!" />

    <Text style={styles.headerText}>Custom Theme</Text>
    <Chip
      size="large"
      theme={{
        active: { background: '#195CEF', border: 'white', label: 'white' },
        default: { background: '#E6EEFF', border: '#195CEF', label: 'blue' },
      }}
      label="Press Me!"
    />

    <Text style={styles.headerText}>Custom Disabled Theme</Text>
    <Chip
      size="large"
      disabled
      theme={{
        disabled: { background: 'grey', border: '#195CEF', label: '#195CEF' },
      }}
      label="Disabled!"
    />
  </Layout>
);

export default ChipScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
