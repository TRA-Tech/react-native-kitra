import { View } from 'react-native';
import { Divider } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import AppDivider from '../components/Divider';

const DividerScreen = () => (
  <Layout>
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <AppDivider label="Default" />
      <Divider />
      <AppDivider label="Dashed" />
      <Divider variant="dashed" />

      <AppDivider label="Dotted" />
      <Divider variant="dotted" />

      <AppDivider label="Solid" />
      <Divider variant="solid" />

      <AppDivider label="Custom Theme" />
      <Divider variant="dotted" theme={{ default: { background: 'orange' } }} />
    </View>
  </Layout>
);

export default DividerScreen;
