import { View } from 'react-native';
import { Switch } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Layout>
      <Divider label="Default" />
      <Switch value={isEnabled} onValueChange={setIsEnabled} />
      <Divider label="Customized" />
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        theme={{
          active: { thumb: 'blue', track: 'orange' },
          default: { thumb: 'yellow', track: 'black' },
        }}
      />
    </Layout>
  );
};

export default SwitchScreen;
