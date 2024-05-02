import { Badge, Icon, Avatar } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import AppDivider from '../components/Divider';

const BadgeScreen = () => (
  <Layout>
    <AppDivider label="Badge with Icon" />
    <Badge icon={<Icon type="ant-design" name="minus" />}>
      <Avatar />
    </Badge>
    <AppDivider label="Badge with Label" />

    <Badge label="kitra" containerStyle={{ marginTop: 20 }}>
      <Avatar />
    </Badge>
    <AppDivider label="Default" />

    <Badge />
    <AppDivider label="Badge custom theme" />

    <Badge
      label="Kitra"
      containerStyle={{ marginTop: 20 }}
      theme={{ default: { background: 'pink', border: 'green', label: 'red' } }}
    >
      <Avatar />
    </Badge>
  </Layout>
);

export default BadgeScreen;
