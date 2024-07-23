import { StyleSheet, Text } from 'react-native';
import { Switch } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import Layout from '../components/Layout';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Layout style={{ rowGap: 15 }}>
      <Text style={styles.headerText}>Default</Text>
      <Switch value={isEnabled} onValueChange={setIsEnabled} />

      <Text style={styles.headerText}>Customized</Text>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        theme={{
          active: { thumb: 'blue', track: '#F6F9FF' },
          default: { thumb: 'white', track: '#124CCA' },
        }}
      />
    </Layout>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
