import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const RadioButtonScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <RadioButton />
    <Text style={styles.headerText}>Custom Theme</Text>
    <RadioButton
      theme={{
        active: { background: '#F6F9FF', border: '#195CEF', dot: 'blue' },
        default: { background: 'white', border: '#195CEF', dot: '#195CEF' },
      }}
      onChange={x => console.log(x)}
    />
  </Layout>
);

export default RadioButtonScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
