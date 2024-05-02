import { StyleSheet, Text, View } from 'react-native';
import { Button, PagerView } from '@tra-tech/react-native-kitra';
import { useRef } from 'react';
import Layout from '../components/Layout';

const PagerViewScreen = () => {
  const ref = useRef(null);

  return (
    <Layout>
      <Button label="Scroll to screenTwo" onPress={x => ref.current.scrollToIndex(1)} />
      <PagerView ref={ref} containerStyle={{ marginTop: 10 }}>
        <View key="ScreenOne" style={style.center}>
          <Text>Screen One</Text>
          <View />
        </View>
        <View key="screenTwo" style={style.center}>
          <Text>Screen Two</Text>
        </View>
        <View key="screenThree" style={style.center}>
          <Text>Screen Three</Text>
        </View>
      </PagerView>
    </Layout>
  );
};

export default PagerViewScreen;

const style = StyleSheet.create({
  center: { justifyContent: 'center', alignItems: 'center' },
});
