import { View } from "react-native";
import Layout from "../components/Layout";
import { Badge, Icon } from "@tra-tech/react-native-kitra";


const BadgeScreen = () => {

    return (
        <Layout>
            <Badge icon={<Icon type="ant-design" name="minus" />}></Badge>
            <Badge icon={<Icon type="ant-design" name="minus" />} ></Badge>
            <Badge ></Badge>

        </Layout>
    )
}

export default BadgeScreen;
 