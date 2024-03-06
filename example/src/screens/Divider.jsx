import { View } from "react-native";
import Layout from "../components/Layout";
import { Divider } from "@tra-tech/react-native-kitra";
import AppDivider from "../components/Divider";


const DividerScreen = () => {

    return (
        <Layout>
            <View style={{  flexDirection: 'column', flex: 1 }}>
                <AppDivider label={"Default"}/>   
                <Divider />
                <AppDivider label={"Dashed"}/>   
                <Divider borderStyle="dashed" color="black" />
                <AppDivider label={"Dotted"}/>   
                <Divider borderStyle="dotted" color="black" />
            </View>
        </Layout>
    )
}

export default DividerScreen;
