import { View } from 'react-native';
import { ToggleButton } from '@tra-tech/react-native-kitra';
import Divider from '../components/Divider';
import Layout from '../components/Layout';

const buttons = [
  {
    label: 'Hello',
    onPress: event => console.log(event),
  },
  {
    label: 'Merhaba',
    onPress: event => console.log(event),
  },
];
const ToggleButtonScreen = () => (
  <Layout>
    <ToggleButton buttons={buttons} />
    <Divider label="Sizes S-M" />
    <View style={{ rowGap: 10 }}>
      <ToggleButton size="medium" buttons={buttons} />
      <ToggleButton size="small" buttons={buttons} />
    </View>
  </Layout>
);

export default ToggleButtonScreen;
