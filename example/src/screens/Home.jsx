import { FlatList,  TouchableOpacity, View } from "react-native"
import Text from "../components/Text";

const components = [
    'TextInput',
    'CheckBox',
    'Button',
    'ProgressBar',
    'Badge',
    // 'IconButton',
    'AccordionList',
    'RadioButton',
    'ToggleButton',
    'Menu',
    'Dropdown',
    'Swipe',
    'Divider',
    'SpeedDial',
    'Avatar',
    'AvatarGroup',
    'Chip',
    'SearchBar',
    'Switch',
    'Slider',
    'Modal',
    'PagerView',
    'ActivityIndicator',
    'Icon',
];

const Home = ({ navigation }) => {
    return (
        <View>
            <FlatList
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray' }}></View>}
                data={components}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ height: 50, marginHorizontal: 20, justifyContent: 'center' }} onPress={() => navigation.navigate(item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>    
                )}
            />
        </View>
    )
}

export default Home;