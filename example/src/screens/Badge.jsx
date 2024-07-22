import { Badge, Icon, Avatar } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text } from 'react-native';
import Layout from '../components/Layout';

const BadgeScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <Badge />

    <Text style={[styles.headerText, { marginTop: 20 }]}>Badge with Icon</Text>
    <Badge icon={<Icon type="ant-design" name="minus" />}>
      <Avatar />
    </Badge>

    <Text style={styles.headerText}>Badge with Label</Text>
    <Badge label="kitra">
      <Avatar />
    </Badge>

    <Text style={styles.headerText}>Badge custom theme</Text>
    <Badge
      label="Kitra"
      theme={{ default: { background: '#E6EEFF', border: '#195CEF', label: '#195CEF' } }}
    >
      <Avatar />
    </Badge>
  </Layout>

);

export default BadgeScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
