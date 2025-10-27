import { StyleSheet, Text, View } from 'react-native';
import { ToggleButton } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const buttons = [
  {
    label: 'React',
    onPress: event => console.log(event),
  },
  {
    label: 'Native',
    onPress: event => console.log(event),
  },
  {
    label: 'Kitra',
    onPress: event => console.log(event),
  },
];
const ToggleButtonScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <ToggleButton buttons={buttons} />
    <Text style={styles.headerText}>Sizes M-S</Text>
    <View style={{ rowGap: 10 }}>
      <ToggleButton size="medium" buttons={buttons} />
      <ToggleButton size="small" buttons={buttons} />
    </View>
    <Text style={styles.headerText}>Custom Theme</Text>
    <ToggleButton
      theme={{
        active: { background: '#195CEF', border: 'white', label: '#F6F9FF' },
        default: { background: 'white', border: '#195CEF', label: '#195CEF' },
      }}
      size="medium"
      buttons={buttons}
    />
  </Layout>
);

export default ToggleButtonScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
