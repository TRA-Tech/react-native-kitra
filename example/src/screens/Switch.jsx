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
        trackColor={{ false: 'white', true: 'orange' }}
        thumbColor="black"
      />
    </Layout>
  );
};

export default SwitchScreen;
