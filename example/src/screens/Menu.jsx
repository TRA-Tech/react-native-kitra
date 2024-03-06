import { View } from "react-native";
import Layout from "../components/Layout";
import { Button, Icon, Menu } from "@tra-tech/react-native-kitra";


const MenuScreen = () => {

    return (
        <Layout>
            <Menu
                closeOnPress
                button={() => <Icon type="material" size={20} name="more-vert"></Icon>}
                items={[
                    {
                        left: <Icon type="material" name="share"></Icon>,
                        label: 'Share',
                        onPress: () => console.log('Share')
                    },
                    {
                        left: <Icon type="material" name="delete"></Icon>,
                        right: <Icon type="material" name="delete"></Icon>,
                        label: 'Delete',
                        onPress: () => console.log('Delete')
                    }
                ]} ></Menu>
        </Layout>
    )
}

export default MenuScreen;
