import { View } from "react-native";
import Layout from "../components/Layout";
import { SpeedDial } from "@tra-tech/react-native-kitra";


const SpeedDialScreen = () => {

    return (
        <Layout>
            <SpeedDial
                variant="flat"
                items={[{ title: "fsd", onPress: () => console.log("a") }, { title: "fsd" }, { title: "fsd" }, { title: "fsd" }, { title: "fsd" }, { title: "fsd" }]} />
        </Layout>
    )
}

export default SpeedDialScreen;
