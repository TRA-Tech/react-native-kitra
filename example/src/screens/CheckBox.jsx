import { View } from 'react-native';
import { CheckBox } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const CheckBoxScreen = () => (
  <Layout>
    <Divider label="Default" />

    <CheckBox onChange={e => console.log(e)} />

    <Divider label="Disabled" />
    <CheckBox disabled value={false} />

    <Divider label="Custom Theme" />
    <CheckBox theme={{
      default: { background: 'yellow', border: 'blue', icon: 'darkblue' },
      filled: { background: 'orange', border: 'purple', icon: 'white' },
    }}
    />
    <Divider label="Custom Theme Disabled" />
    <CheckBox
      style={{ marginTop: 10 }}
      disabled
      theme={{
        disabled: { background: 'red', border: 'black', icon: 'darkblue' },
      }}
    />
  </Layout>
);

export default CheckBoxScreen;
