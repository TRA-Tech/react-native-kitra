import { Icon } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const IconScreen = () => (
  <Layout scroll>
    <Divider label="Ant Design" />
    <Icon size={30} type="ant-design" name="antdesign" />

    <Divider label="Entypo" />
    <Icon size={30} type="entypo" name="circle" />

    <Divider label="Evil Icons" />
    <Icon size={30} type="evilicon" name="unlock" />

    <Divider label="Feather" />
    <Icon size={30} type="feather" name="feather" />

    <Divider label="FontAwesome" />
    <Icon size={30} type="font-awesome" name="font-awesome" />

    <Divider label="FontAwesome5" />
    <Icon size={30} type="font-awesome-5" name="font-awesome" />

    <Divider label="Fontisto" />
    <Icon size={30} type="fontisto" name="fontisto" />

    <Divider label="Foundation" />
    <Icon size={30} type="foundation" name="social-zurb" />

    <Divider label="Ionicons" />
    <Icon size={30} type="ionicon" name="logo-ionic" />

    <Divider label="MaterialCommunityIcons" />
    <Icon size={30} type="material-community" name="material-design" />

    <Divider label="MaterialIcons" />
    <Icon size={30} type="material" name="settings" />

    <Divider label="Octicons" />
    <Icon size={30} type="octicon" name="mark-github" />

    <Divider label="SimpleLineIcons" />
    <Icon size={30} type="simple-line-icon" name="user" />

    <Divider label="Zocial" />
    <Icon size={30} type="zocial" name="facebook" />
  </Layout>
);

export default IconScreen;
