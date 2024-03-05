import Layout from "../components/Layout";
import { AccordionList, Icon } from "@tra-tech/react-native-kitra";
import Divider from "../components/Divider";
import { StyleSheet } from "react-native";

const Data = [
    { name: "Sometimes, things just seem to fall apart", points: "$3.45" },
    { name: "When you least expect them to", points: "$3.45" },
    { name: "Sometimes you want to pack up and leave behind", points: "$3.45" },
    { name: "All of them and their smiles", points: "$3.45" },]

const AccordionListScreen = () => {

    return (
        <Layout>
            <AccordionList
                data={Data}
                displayedItem={x => x.name}
                onExpand={x => console.log(x)}
                itemDisplay={x => x.name}
                onSelect={x => console.log(x)}
                label="Grey Daze"
                left={() => <Icon type="material-community" name="flower-tulip" size={24} color="dimgrey" />}
            />
            <Divider label="Customized" />
            <AccordionList
                data={Data}
                displayedItem={x => x.name}
                onExpand={x => console.log("fds")}
                itemDisplay={x => x.name}
                onSelect={x => console.log(x)}
                labelContainerStyle={{ backgroundColor: 'black' }}
                labelStyle={{ color: 'white' }}
                rowStyle={{ backgroundColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth }}
                rowTextStyle={{ color: 'white' }}
                label="Grey Daze"
                theme={{ primary: 'white', disabledLight: 'white' }}
                left={() => <Icon type="material-community" name="flower-tulip" size={24} color="dimgrey" />}
                right={() => <Icon type="material-community" name="flower-tulip" size={24} color="dimgrey" />}
            />
        </Layout>
    )
}

export default AccordionListScreen;
