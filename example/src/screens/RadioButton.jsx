import { View } from 'react-native';
import { RadioButton } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const RadioButtonScreen = () => (
  <Layout>
    <Divider label="Default" />
    <RadioButton />
    <Divider label="Custom Theme" />
    <RadioButton
      theme={{
        active: { background: 'orange', border: 'purple', dot: 'blue' },
        default: { background: 'green', border: 'red', dot: 'white' },
      }}
      onChange={x => console.log(x)}
    />
  </Layout>
);

export default RadioButtonScreen;
