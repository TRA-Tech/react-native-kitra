import { View } from "react-native";
import Layout from "../components/Layout";
import { Icon, Swipe, useTheme } from "@tra-tech/react-native-kitra";
import Text from "../components/Text";
import { useRef } from "react";

const SwipeScreen = () => {
    const { theme } = useTheme()
    return (
        <Layout>
            <Swipe
                rightActions={[
                    { text: "Share", style: { backgroundColor: 'blue', }, onPress: (ref) => {  console.log(ref.current.close()) } },
                    { text: "Archive", style: { backgroundColor: 'orange', } }
                ]}
                leftAction={{ text: 'Delete', style: { backgroundColor: 'red', } }}
                variant="radius"
            >
                <View style={{ backgroundColor: 'gray', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <Icon name="left" type="ant-design" size={20} color="white" />
                    <Text style={{ color: 'white' }} >
                        Swipe Me
                    </Text>
                    <Icon name="right" type="ant-design" size={20} color="white" />
                </View>
            </Swipe>
        </Layout>
    )
}

export default SwipeScreen;
