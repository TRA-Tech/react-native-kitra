import { View } from "react-native";
import Layout from "../components/Layout";
import { RadioButton } from "@tra-tech/react-native-kitra";


const RadioButtonScreen = () => {

    return (
        <Layout>
            <RadioButton onChange={x => console.log(x)} ></RadioButton>
        </Layout>
    )
}

export default RadioButtonScreen;
