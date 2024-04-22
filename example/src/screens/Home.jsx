import { FlatList, TouchableOpacity, View } from 'react-native';
import Text from '../components/Text';

const components = [
  'AccordionList',
  'ActivityIndicator',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'Button',
  'CheckBox',
  'Chip',
  'Divider',
  'Dropdown',
  'Menu',
  'PagerView',
  'ProgressBar',
  'RadioButton',
  'SearchBar',
  'Slider',
  'SpeedDial',
  'Switch',
  'TextInput',
  'ToggleButton',
  'Icon',
  'Swipe',
];

const Home = ({ navigation }) => (
  <View>
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray' }} />}
      data={components}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ height: 50, marginHorizontal: 20, justifyContent: 'center' }} onPress={() => navigation.navigate(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default Home;
