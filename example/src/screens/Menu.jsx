import { View } from 'react-native';
import { Button, Icon, Menu } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const data = [
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
];

const MenuIconButton = () => (<Icon type="material" size={20} name="more-vert" />);
const MenuScreen = () => (
  <Layout>
    <Divider label="Default" />
    <Menu
      button={MenuIconButton}
      items={data}
    />
    <Divider label="Custom Theme" />
    <Menu
      containerStyle={{ alignItems: 'flex-start' }}
      items={data}
      theme={{
        active: { divider: 'brown', icon: 'red', itemBackground: 'orange', itemLabel: 'blue' },
        default: { divider: 'red', icon: 'brown', itemBackground: 'blue', itemLabel: 'orange' },
      }}
      closeOnPress
      button={MenuIconButton}
    />

  </Layout>
);

export default MenuScreen;
