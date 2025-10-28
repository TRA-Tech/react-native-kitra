import { StyleSheet, Text } from 'react-native';
import { Icon, Menu } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const data = [
  {
    left: <Icon  name="paper-plane-tilt" color="white" />,
    label: 'Share',
    onPress: () => console.log('Share'),
  },
  {
    left: <Icon name="trash" color="white" />,
    right: <Icon  name="trash" color="white" />,
    label: 'Delete',
    onPress: () => console.log('Delete'),
  },
];

const MenuIconButton = () => (<Icon  size={20} name="dots-three-vertical" />);
const MenuScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <Menu
          containerStyle={{ alignItems: 'flex-start' }}
      button={MenuIconButton}
      items={data}
    />
    <Text style={styles.headerText}>Custom Theme</Text>
    <Menu
      containerStyle={{ alignItems: 'flex-start' }}
      items={data}
      theme={{
        active: { divider: 'white', itemBackground: '#195CEF', itemLabel: 'white' },
        default: { divider: '#195CEF', itemBackground: 'white', itemLabel: '#195CEF' },
      }}
      closeOnPress
      button={MenuIconButton}
    />

  </Layout>
);

export default MenuScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
