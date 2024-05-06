/* eslint-disable react/no-unstable-nested-components */
import { View } from 'react-native';
import { Button, Icon, useTheme } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const ButtonScreen = () => (
  <Layout scroll>
    <Button label="Press Me!" />

    <Divider label="Disabled" />
    <Button label="Press Me!" disabled />

    <Divider label="Left-Right Elements" />
    <View style={{ rowGap: 5 }}>
      <Button label="Press Me!" left={event => <Icon type="material-community" name={event ? 'penguin' : 'dog'} />} />
      <Button label="Press Me!" right={() => <Icon type="material-community" name="penguin" />} />
      <Button
        label="Press Me!"
        right={() => <Icon type="material-community" name="penguin" />}
        left={() => <Icon type="material-community" name="penguin" />}

      />
    </View>

    <Divider label="Size S-M-L" />
    <View style={{ rowGap: 5 }}>
      <Button label="Press Me!" size="small" left={() => <Icon type="material-community" name="penguin" />} />
      <Button label="Press Me!" size="medium" left={() => <Icon type="material-community" name="penguin" />} />
      <Button label="Press Me!" size="large" left={() => <Icon type="material-community" name="penguin" />} />
    </View>

    <Divider label="Custom Theme" />
    <View style={{ rowGap: 5 }}>
      <Button
        theme={{
          default: { background: 'orange', icon: 'red', label: 'brown' },
          pressed: { background: 'green', icon: 'blue', label: 'purple' },
        }}
        label="Press Me!"
        size="small"
        left={() => <Icon type="material-community" name="penguin" />}
      />
      <Divider label="Custom Disabled Theme" />

      <Button
        theme={{ disabled: { background: 'yellow', icon: 'purple', label: 'red' } }}
        disabled
        label="Press Me!"
        size="medium"
        left={() => <Icon type="material-community" name="penguin" />}
      />

    </View>
  </Layout>
);

export default ButtonScreen;
