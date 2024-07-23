import { StyleSheet, Text, View } from 'react-native';
import { ProgressBar } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const ProgressBarScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>%0</Text>
    <ProgressBar progress={0} />
    <Text style={styles.headerText}>%50</Text>
    <ProgressBar progress={50} />
    <Text style={styles.headerText}>%100</Text>
    <ProgressBar progress={100} />

    <Text style={styles.headerText}>Customized</Text>
    <View style={{ rowGap: 10 }}>
      <ProgressBar progress={50} />
      <ProgressBar
        progress={20}
        progressStyle={{ height: 10, borderRadius: 10, borderWidth: 2, borderColor: 'black' }}
      />
    </View>

    <Text style={styles.headerText}>Custom Theme</Text>
    <View style={{ rowGap: 10 }}>
      <ProgressBar progress={50} theme={{ default: { bar: '#3B79FF', progress: '#21273E' } }} />
    </View>
  </Layout>
);

export default ProgressBarScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
