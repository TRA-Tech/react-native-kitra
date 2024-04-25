import { View } from 'react-native';
import { Button, Icon, Menu } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const MenuScreen = () => (
  <Layout>
    <Menu
      closeOnPress
      button={() => <Icon type="material" size={20} name="more-vert" />}
      items={[
        {
          left: <Icon type="material" name="share" />,
          label: 'Share',
          onPress: () => console.log('Share'),
        },
        {
          left: <Icon type="material" name="delete" />,
          right: <Icon type="material" name="delete" />,
          label: 'Delete',
          onPress: () => console.log('Delete'),
        },
      ]}
    />
  </Layout>
);

export default MenuScreen;
