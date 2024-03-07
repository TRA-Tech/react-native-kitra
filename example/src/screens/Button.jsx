import { View } from 'react-native';
import { Button, Icon, useTheme } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const ButtonScreen = () => (
  <Layout>
    <Button label="Press Me!" />

    <Divider label="Disabled" />
    <Button label="Press Me!" disabled />

    <Divider label="Left-Right Elements" />
    <View style={{ rowGap: 5 }}>
      <Button label="Press Me!" icon={<Icon type="material-community" name="penguin" />} />
      <Button label="Press Me!" iconPosition="right" icon={<Icon type="material-community" name="penguin" />} />
    </View>

    <Divider label="Size S-M-L" />
    <View style={{ rowGap: 5 }}>
      <Button label="Press Me!" size="small" icon={<Icon type="material-community" name="penguin" />} />
      <Button label="Press Me!" size="medium" icon={<Icon type="material-community" name="penguin" />} />
      <Button label="Press Me!" size="large" icon={<Icon type="material-community" name="penguin" />} />
    </View>

    <Divider label="Custom Status Style" />
    <Button
      label="Press Me!"
      statusStyle={
                {
                  default: {
                    container: {
                      backgroundColor: 'black',
                    },
                    text: {
                      color: 'white',
                    },
                  },
                  disabled: {
                    container: {
                      backgroundColor: 'red',
                    },
                    text: {
                      color: 'green',
                    },
                  },
                  focused: {
                    container: {
                      backgroundColor: 'white',
                    },
                    text: {
                      color: 'red',
                    },
                  },
                }
            }
    />
  </Layout>
);

export default ButtonScreen;
