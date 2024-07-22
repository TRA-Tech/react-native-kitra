import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const ActivityIndicatorScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <ActivityIndicator />
    <Text style={styles.headerText}>Custom Indicator</Text>
    <ActivityIndicator>
      <View style={{ backgroundColor: '#195CEF', height: 40, width: 40, borderRadius: 20 }} />
    </ActivityIndicator>
    <Text style={styles.headerText}>Custom theme</Text>
    <ActivityIndicator theme={{ default: { background: '#195CEF', indicator: '#F6F9FF' } }} />
  </Layout>
);

export default ActivityIndicatorScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
