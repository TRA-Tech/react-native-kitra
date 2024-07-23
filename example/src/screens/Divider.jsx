import { StyleSheet, Text } from 'react-native';
import { Divider } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const DividerScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <Divider />

    <Text style={styles.headerText}>Dashed</Text>
    <Divider variant="dashed" />

    <Text style={styles.headerText}>Dotted</Text>
    <Divider variant="dotted" />

    <Text style={styles.headerText}>Solid</Text>
    <Divider variant="solid" />

    <Text style={styles.headerText}>Custom Theme</Text>
    <Divider variant="dotted" theme={{ default: { background: '#FC6736' } }} />
  </Layout>
);

export default DividerScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
