import { Slider } from '@tra-tech/react-native-kitra';
import { StyleSheet, Text } from 'react-native';
import Layout from '../components/Layout';

const SliderScreen = () => (
  <Layout style={{ rowGap: 20 }}>
    <Text style={styles.headerText}>Default</Text>
    <Slider onChangeEnd={x => console.log(x)} />

    <Text style={styles.headerText}>With percentage indicator</Text>
    <Slider showPercentage containerStyle={{ marginTop: 30 }}/>

    <Text style={styles.headerText}>Custom Theme</Text>
    <Slider
      containerStyle={{ marginTop: 30 }}
      theme={{
        default: { bar: 'grey',
          percentageBackground: 'white',
          percentageLabel: '#195CEF',
          progress: '#195CEF',
          thumb: '#195CEF' },
      }}
      showPercentage
      buttonStyle={{ height: 40, width: 40 }}
    />
  </Layout>
);

export default SliderScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
