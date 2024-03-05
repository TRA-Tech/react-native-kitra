import { View } from "react-native";
import Divider from "../components/Divider";
import Layout from "../components/Layout";
import { ToggleButton } from "@tra-tech/react-native-kitra";

const buttons = [
    {
        label: 'Hello',
        onPress: (event) => console.log(event)
    },
    {
        label: 'Merhaba',
        onPress: (event) => console.log(event)
    }
]
const ToggleButtonScreen = () => {

    return (
        <Layout>
            <ToggleButton buttons={buttons}></ToggleButton>
            <Divider label="Sizes S-M"></Divider>
            <View style={{rowGap:10}}>
                <ToggleButton size="medium" buttons={buttons}></ToggleButton>
                <ToggleButton size="small" buttons={buttons}></ToggleButton>
            </View>
        </Layout>
    )
}

export default ToggleButtonScreen;
