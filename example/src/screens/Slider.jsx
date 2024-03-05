import { Slider } from "@tra-tech/react-native-kitra";
import { View } from "react-native";
import Layout from "../components/Layout";
import { useState } from "react";
import Divider from "../components/Divider";


const SliderScreen = () => {
    const [value, setValue] = useState()
    return (
        <Layout>
            <Divider label="Default"></Divider>
            <Slider onChangeEnd={x => console.log(x)} />
            <Divider label="With percentage indicator"></Divider>
            <Slider showPercentage />
            <Divider label="Customized"></Divider>
            <Slider
                barStyle={{ backgroundColor: 'black' }}
                progressStyle={{ backgroundColor: 'orange' }}
                buttonStyle={{ backgroundColor: 'orange', height: 40, width: 40, }} />
        </Layout>
    )
}

export default SliderScreen;
