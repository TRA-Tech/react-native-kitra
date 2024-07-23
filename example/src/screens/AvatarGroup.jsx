import { AvatarGroup, Icon } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text } from 'react-native';
import Layout from '../components/Layout';
import AppDivider from '../components/Divider';

const avatars = [{ label: 'John Doe' }, { label: 'Michael' },
  { avatarIcon: <Icon type="material-community" name="penguin" size={15} />, variant: 'rounded' },
  { label: 'ADS' }, { label: 'John Dogus' },
  { source: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_75gFTnTdEo-gYx6kpjQ7bPkcUH_L4CUXMWRn1jPhBzjgXQp-Z_QGNZ7togU2K03bYwc&usqp=CAU' },
    variant: 'rounded' }];
const AvatarGroupScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <AvatarGroup
      avatars={avatars}
    />
    <AppDivider label="Custom Theme" />
    <AvatarGroup
      theme={{
        default: { background: '#195CEF', label: 'white', moreBackground: '#F6F9FF', morelabel: '#195CEF' },
      }}
      avatarLimit={3}
      avatars={avatars}
    />
  </Layout>
);

export default AvatarGroupScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
