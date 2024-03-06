import { View } from "react-native";
import Layout from "../components/Layout";
import { CheckBox } from "@tra-tech/react-native-kitra";
import Divider from "../components/Divider";


const CheckBoxScreen = () => {

    return(
       <Layout>
        <CheckBox  />

        <Divider label={"Disabled"} />
        <CheckBox  disabled />

        <Divider label={"Customized"} />
        <CheckBox iconColor="red"/>

        </Layout>
    )
}

export default CheckBoxScreen;
