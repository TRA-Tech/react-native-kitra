/* eslint-disable react/no-unstable-nested-components */
import { Chip, Icon } from '@tra-tech/react-native-kitra';
import { useState } from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const ChipScreen = () => (
  <Layout>
    <Divider label="Default" />
    <Chip label="Press Me!" />

    <Divider label="Size S-M-L" />
    <View style={{ rowGap: 20 }}>
      <Chip label="Press Me!" size="small" />
      <Chip label="Press Me!" size="medium" />
      <Chip
        label="Press Me!"
        size="large"
        left={event => <Icon name={event ? 'cat' : 'dog'} type="font-awesome-5" size={20} />}
      />
    </View>

    <Divider label="Disabled" />
    <Chip disabled label="Press Me!" />

    <Divider label="Custom Theme" />
    <Chip
      size="large"
      theme={{
        active: { background: 'orange', border: 'red', icon: 'blue', label: 'purple' },
        default: { background: 'yellow', border: 'orange', icon: 'red', label: 'blue' },
      }}
      label="Press Me!"
    />
    <Divider label="Custom Disabled Theme" />

    <Chip
      style={{ marginTop: 10 }}
      size="large"
      disabled
      theme={{
        disabled: { background: 'black', border: 'red', icon: 'red', label: 'blue' },
      }}
      label="Disabled!"
    />
  </Layout>
);

export default ChipScreen;
