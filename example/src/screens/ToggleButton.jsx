import { View } from 'react-native';
import { ToggleButton, opacity } from '@tra-tech/react-native-kitra';
import Divider from '../components/Divider';
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
  <Layout>
    <ToggleButton buttons={buttons} />
    <Divider label="Sizes S-M" />
    <View style={{ rowGap: 10 }}>
      <ToggleButton size="medium" buttons={buttons} />
      <ToggleButton size="small" buttons={buttons} />
    </View>
    <Divider label="Custom Theme" />
    <View style={{ rowGap: 10 }}>
      <ToggleButton
        theme={{
          active: { background: opacity('#07FA80', 100), border: 'red', label: 'yellow' },
          default: { background: 'blue', border: 'orange', label: 'purple' },
        }}
        size="medium"
        buttons={buttons}
      />
    </View>
  </Layout>
);

export default ToggleButtonScreen;
