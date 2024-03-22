import { View } from 'react-native';
import { Avatar, Icon } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const AvatarScreen = () => (
  <Layout scroll>
    <Avatar />
    <Divider label="Rounded" />
    <Avatar variant="rounded" />

    <Divider label="With Icon" />
    <Avatar variant="rounded" avatarIcon={<Icon type="material-community" name="penguin" size={30} />} />

    <Divider label="With Label" />
    <Avatar label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} />} />

    <Divider label="Sizes S-M" />
    <View style={{ flexDirection: 'row', columnGap: 10 }}>
      <Avatar size="small" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} />} />
      <Avatar size="medium" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} />} />
    </View>

    <Divider label="With Image" />
    <Avatar source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_75gFTnTdEo-gYx6kpjQ7bPkcUH_L4CUXMWRn1jPhBzjgXQp-Z_QGNZ7togU2K03bYwc&usqp=CAU' }} borderStyle="rounded" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} />} />
  </Layout>
);

export default AvatarScreen;
