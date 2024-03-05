import {  Icon } from "@tra-tech/react-native-kitra";
import Layout from "../components/Layout";
import Divider from "../components/Divider";


const IconScreen = () => {

    return (
        <Layout scroll>
            <Divider label="Ant Design"></Divider>
            <Icon size={30} type="ant-design" name="antdesign"></Icon>

            <Divider label="Entypo"></Divider>
            <Icon size={30} type="entypo" name="circle"></Icon>

            <Divider label="Evil Icons"></Divider>
            <Icon size={30} type="evilicon" name="unlock"></Icon>

            <Divider label="Feather"></Divider>
            <Icon size={30} type="feather" name="feather"></Icon>

            <Divider label="FontAwesome"></Divider>
            <Icon size={30} type="font-awesome" name="font-awesome"></Icon>

            <Divider label="FontAwesome5"></Divider>
            <Icon size={30} type="font-awesome-5" name="font-awesome"></Icon>

            <Divider label="Fontisto"></Divider>
            <Icon size={30} type="fontisto" name="fontisto"></Icon>

            <Divider label="Foundation"></Divider>
            <Icon size={30} type="foundation" name="social-zurb"></Icon>

            <Divider label="Ionicons"></Divider>
            <Icon size={30} type="ionicon" name="logo-ionic"></Icon>

            <Divider label="MaterialCommunityIcons"></Divider>
            <Icon size={30} type="material-community" name="material-design"></Icon>

            <Divider label="MaterialIcons"></Divider>
            <Icon size={30} type="material" name="settings"></Icon>

            <Divider label="Octicons"></Divider>
            <Icon size={30} type="octicon" name="mark-github"></Icon>

            <Divider label="SimpleLineIcons"></Divider>
            <Icon size={30} type="simple-line-icon" name="user"></Icon>

            <Divider label="Zocial"></Divider>
            <Icon size={30} type="zocial" name="facebook"></Icon>
        </Layout>
    )
}

export default IconScreen;
