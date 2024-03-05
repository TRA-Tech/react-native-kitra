import { View } from "react-native";
import Layout from "../components/Layout";
import { Button, Icon, useTheme } from "@tra-tech/react-native-kitra";
import Divider from "../components/Divider";


const ButtonScreen = () => {
    return (
        <Layout>
            <Button label="Press Me!" />

            <Divider label="Disabled" />
            <Button label="Press Me!" disabled />

            <Divider label="Left-Right Elements" />
            <View style={{ rowGap: 5 }}>
                <Button label="Press Me!">
                    <Icon type="material-community" name="penguin" />
                    <Icon type="material-community" name="penguin" />
                </Button>
                <Button label="Press Me!" iconPosition="right ">
                    <Icon type="material-community" name="penguin" />
                </Button>
            </View>

            <Divider label="Size S-M-L" />
            <View style={{ rowGap: 5 }}>
                <Button label="Press Me!" size="small" >
                    <Icon type="material-community" name="penguin" />
                </Button>
                <Button label="Press Me!" size="medium" >
                    <Icon type="material-community" name="penguin" />
                </Button>
                <Button label="Press Me!" size="large" >
                    <Icon type="material-community" name="penguin" />
                </Button>
            </View>

            <Divider label="Custom Status Style" />
            <Button label="Press Me!"
             statusStyle={
                {
                    default: {
                        container: {
                            backgroundColor: 'black'
                        },
                        text: {
                            color: 'white'
                        }
                    },
                    disabled: {
                        container: {
                            backgroundColor: 'red'
                        },
                        text: {
                            color: 'green'
                        }
                    },
                    focused: {
                        container: {
                            backgroundColor: 'white'
                        },
                        text: {
                            color: 'red'
                        }
                    },
                }
            }/>
        </Layout>
    )
}

export default ButtonScreen;
