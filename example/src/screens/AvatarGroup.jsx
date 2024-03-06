import { View } from "react-native";
import Layout from "../components/Layout";
import { Avatar, AvatarGroup, Icon } from "@tra-tech/react-native-kitra";


const AvatarGroupScreen = () => {

    return (
        <Layout>
            <AvatarGroup avatarsType={[{label:"John Doe"},{label:"Michael"},{label:"John Doe"},{source:{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_75gFTnTdEo-gYx6kpjQ7bPkcUH_L4CUXMWRn1jPhBzjgXQp-Z_QGNZ7togU2K03bYwc&usqp=CAU'}}]}>
            </AvatarGroup>
        </Layout>
    )
}

export default AvatarGroupScreen;
