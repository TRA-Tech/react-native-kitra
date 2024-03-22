import { CheckBox } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const CheckBoxScreen = () => (
  <Layout>
    <CheckBox />

    <Divider label="Disabled" />
    <CheckBox disabled />

    <Divider label="Customized" />
    <CheckBox iconColor="red" />

  </Layout>
);

export default CheckBoxScreen;
