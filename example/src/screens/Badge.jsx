import { Badge, Icon, Avatar } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const BadgeScreen = () => (
  <Layout>
    <Badge icon={<Icon type="ant-design" name="minus" />}>
      <Avatar />
    </Badge>
    <Badge label="kitra">
      <Avatar />
    </Badge>
    <Badge />
  </Layout>
);

export default BadgeScreen;
