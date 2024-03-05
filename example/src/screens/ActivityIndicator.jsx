import { View } from "react-native";
import Layout from "../components/Layout";
import { ActivityIndicator } from "@tra-tech/react-native-kitra";
import Divider from "../components/Divider";


const ActivityIndicatorScreen = () => {

    return (
        <Layout>
            <Divider label="Default"></Divider>
            <ActivityIndicator />
            <Divider label="Custom Indicator"></Divider>
            <ActivityIndicator >
                <View style={{ backgroundColor: 'black', height: 40, width: 40, borderRadius: 20 }}></View>
                </ActivityIndicator>
        </Layout>
    )
}

export default ActivityIndicatorScreen;
