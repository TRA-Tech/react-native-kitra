import { View } from "react-native";
import Layout from "../components/Layout";
import { ProgressBar } from "@tra-tech/react-native-kitra";
import Divider from "../components/Divider";


const ProgressBarScreen = () => {

    return (
        <Layout>
            <Divider label="%0" />
            <ProgressBar progress={0} />
            <Divider label="%50" />
            <ProgressBar progress={50} />
            <Divider label="%100" />
            <ProgressBar progress={100} />

            <Divider label="Customized" />
            <View style={{ rowGap: 10 }}>
                <ProgressBar progress={50} barColor="black" progressColor="red" />
                <ProgressBar progress={20} barColor="black" progressColor="white" progressStyle={{ height: 10, borderRadius: 10, borderWidth: 2, borderColor: 'black' }} />
            </View>

        </Layout>
    )
}

export default ProgressBarScreen;
