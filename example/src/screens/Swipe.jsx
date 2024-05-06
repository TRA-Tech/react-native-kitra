import { View } from 'react-native';
import { Icon, Swipe, useTheme } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Text from '../components/Text';

const SwipeScreen = () => (
  <Layout>
    <Swipe
      rightActions={[
        { label: 'Share',
          style: { backgroundColor: 'blue' },
          onPress: ref => { console.log(ref.current.close()); },
          labelStyle: { color: 'white' } },
        { label: 'Archive',
          style: { backgroundColor: 'orange' },
          labelStyle: { color: 'white' },
          icon: <Icon type="ant-design" name="close" size={10} color="white" /> },
      ]}
      leftAction={{ label: 'Delete',
        style: { backgroundColor: 'red' },
        icon: <Icon type="ant-design" name="delete" size={10} color="white" /> }}
      variant="radius"
    >
      <View
        style={{ backgroundColor: 'gray',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row' }}
      >
        <Icon name="left" type="ant-design" size={20} color="white" />
        <Text style={{ color: 'white' }}>
          Swipe Me
        </Text>
        <Icon name="right" type="ant-design" size={20} color="white" />
      </View>
    </Swipe>
  </Layout>
);

export default SwipeScreen;
