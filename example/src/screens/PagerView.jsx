import { View } from 'react-native';
import { PagerView } from '@tra-tech/react-native-kitra';

const PagerViewScreen = () => (
  <View>
    <PagerView>
      <View key="page1" />
      <View key="page2" />
      <View key="page3" />

    </PagerView>
  </View>
);

export default PagerViewScreen;
