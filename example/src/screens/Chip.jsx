import { Chip } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const ChipScreen = () => {
  const [status, setStatus] = useState(false);
  return (
    <Layout>
      <Chip onChange={setStatus} value={status} label="Press Me!" />

      <Divider label="Disabled" />
      <Chip disabled label="Press Me!" />

    </Layout>
  );
};

export default ChipScreen;
