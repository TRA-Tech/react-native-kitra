import { View } from 'react-native';
import { SpeedDial } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import AppDivider from '../components/Divider';

const SpeedDialScreen = () => (
  <Layout>
    <SpeedDial
      theme={{
        default: { background: 'red', icon: 'white' },
      }}
      variant="flat"
      items={[{ title: 'fsd', onPress: () => console.log('a') }, { title: 'fsd' }, { title: 'fsd' }, { title: 'fsd' }, { title: 'fsd' }, { title: 'fsd' }]}
    />

  </Layout>
);

export default SpeedDialScreen;
