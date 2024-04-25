import { View } from 'react-native';
import { Button, PagerView } from '@tra-tech/react-native-kitra';
import { useRef } from 'react';
import Layout from '../components/Layout';

const PagerViewScreen = () => {
  const ref = useRef(null);
  return (
    <Layout>
      <Button onPress={x => ref.current.scrollToIndex(1)} />
      <PagerView ref={ref} containerStyle={{ marginTop: 10 }}>
        <View key="ScreenOne" style={{ backgroundColor: 'red' }}>
          <View />
        </View>
        <View key="screenTwo" />
        <View key="screenThree" />
      </PagerView>
    </Layout>
  );
};

export default PagerViewScreen;
