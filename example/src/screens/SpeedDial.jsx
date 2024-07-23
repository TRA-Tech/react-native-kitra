import { SpeedDial } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const SpeedDialScreen = () => (
  <Layout>
    <SpeedDial
      theme={{
        default: { background: '#195CEF', icon: 'white' },
      }}
      variant="flat"
      items={[{ title: 'Item 1', onPress: () => console.log('a') },
        { title: 'Item 2' }, { title: 'Item 3' },
        { title: 'Item 4' }, { title: 'Item 5' }, { title: 'Item 6' }]}
    />

  </Layout>
);

export default SpeedDialScreen;
