import { View } from "react-native";
import Layout from "../components/Layout";
import Divider from "../components/Divider";
import { Switch } from "@tra-tech/react-native-kitra";
import { useState } from "react";


const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <Layout>
            <Divider label="Default"></Divider>
            <Switch value={isEnabled} onValueChange={setIsEnabled}></Switch>
            <Divider label="Customized"></Divider>
            <Switch
                value={isEnabled}
                onValueChange={setIsEnabled}
                trackColor={{ false: 'white', true: 'orange' }}
                thumbColor={"black"}
            ></Switch>
        </Layout>
    )
}

export default SwitchScreen;
