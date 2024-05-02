import { View } from 'react-native';
import { ProgressBar } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const ProgressBarScreen = () => (
  <Layout>
    <Divider label="%0" />
    <ProgressBar progress={0} />
    <Divider label="%50" />
    <ProgressBar progress={50} />
    <Divider label="%100" />
    <ProgressBar progress={100} />

    <Divider label="Customized" />
    <View style={{ rowGap: 10 }}>
      <ProgressBar progress={50} />
      <ProgressBar
        progress={20}
        progressStyle={{ height: 10, borderRadius: 10, borderWidth: 2, borderColor: 'black' }}
      />
    </View>
    <Divider label="Custom Theme" />
    <View style={{ rowGap: 10 }}>
      <ProgressBar progress={50} theme={{ default: { bar: 'purple', progress: 'orange' } }} />
    </View>
  </Layout>
);

export default ProgressBarScreen;
