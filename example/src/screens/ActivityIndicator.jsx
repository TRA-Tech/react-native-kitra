import { View } from 'react-native';
import { ActivityIndicator } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const ActivityIndicatorScreen = () => (
  <Layout>
    <Divider label="Default" />
    <ActivityIndicator />
    <Divider label="Custom Indicator" />
    <ActivityIndicator theme={{ default: { background: 'red' } }}>
      <View style={{ backgroundColor: 'black', height: 40, width: 40, borderRadius: 20 }} />
    </ActivityIndicator>
  </Layout>
);

export default ActivityIndicatorScreen;
