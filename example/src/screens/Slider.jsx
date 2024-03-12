import { Slider } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';
import { useState } from 'react';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const SliderScreen = () => {
  const [value, setValue] = useState();
  return (
    <Layout>
      <Divider label="Default" />
      <Slider onChangeEnd={x => console.log(x)} />
      <Divider label="With percentage indicator" />
      <Slider showPercentage />
      <Divider label="Customized" />
      <Slider
        barStyle={{ backgroundColor: 'black' }}
        progressStyle={{ backgroundColor: 'orange' }}
        buttonStyle={{ backgroundColor: 'orange', height: 40, width: 40 }}
      />
    </Layout>
  );
};

export default SliderScreen;
