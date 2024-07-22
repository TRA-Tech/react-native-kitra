import { View } from 'react-native';
import { Icon, Swipe } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Text from '../components/Text';

const SwipeScreen = () => (
  <Layout>
    <Swipe
      rightActions={[
        { label: 'Share',
          style: { backgroundColor: '#E2D029' },
          onPress: ref => { console.log(ref.current.close()); },
          labelStyle: { color: 'white' },
          icon: <Icon type="feather" name="share" size={15} color="white" /> },
        { label: 'More',
          style: { backgroundColor: '#00CE5E' },
          labelStyle: { color: 'white' },
          icon: <Icon type="feather" name="more-vertical" size={15} color="white" /> },
        { label: 'Delete',
          style: { backgroundColor: '#FF0000' },
          labelStyle: { color: 'white' },
          icon: <Icon type="ant-design" name="delete" size={15} color="white" /> },
      ]}
      leftAction={{ label: 'Delete',
        style: { backgroundColor: 'red' },
        labelStyle: { color: 'white' },
        icon: <Icon type="ant-design" name="delete" size={15} color="white" /> }}
      variant="radius"
    >
      <View
        style={{ backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#195CEF' }}
      >
        <Icon name="left" type="ant-design" size={20} color="#195CEF" />
        <Text style={{ color: '#195CEF' }}>
          Swipe Me
        </Text>
        <Icon name="right" type="ant-design" size={20} color="#195CEF" />
      </View>
    </Swipe>
  </Layout>
);

export default SwipeScreen;
