import { View } from "react-native";
import Layout from "../components/Layout";
import { Avatar, Icon } from "@tra-tech/react-native-kitra";
import Divider from "../components/Divider";


const AvatarScreen = () => {

    return (
        <Layout>
            <Avatar />
            <Divider label="Rounded" />
            <Avatar borderStyle="rounded" />

            <Divider label="With Icon" />
            <Avatar borderStyle="rounded" avatarIcon={<Icon type="material-community" name="penguin" size={30} />} />

            <Divider label="With Label" />
            <Avatar borderStyle="rounded" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} ></Icon>} />

            <Divider label="Sizes S-M" />
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
                <Avatar borderStyle="rounded" size="small" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} ></Icon>} />
                <Avatar borderStyle="rounded" size="medium" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} ></Icon>} />
            </View>

            <Divider label="With Image" />
            <Avatar source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_75gFTnTdEo-gYx6kpjQ7bPkcUH_L4CUXMWRn1jPhBzjgXQp-Z_QGNZ7togU2K03bYwc&usqp=CAU' }} borderStyle="rounded" label="John Doe" avatarIcon={<Icon type="material-community" name="penguin" size={30} ></Icon>} />
        </Layout>
    )
}

export default AvatarScreen;

