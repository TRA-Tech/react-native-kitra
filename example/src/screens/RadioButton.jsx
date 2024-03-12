import { View } from 'react-native';
import { RadioButton } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const RadioButtonScreen = () => (
  <Layout>
    <RadioButton onChange={x => console.log(x)} />
  </Layout>
);

export default RadioButtonScreen;
