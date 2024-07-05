import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@tra-tech/react-native-kitra';
import Layout from '../components/Layout';

const CheckBoxScreen = () => (
  <Layout style={{ rowGap: 15 }}>
    <Text style={styles.headerText}>Default</Text>
    <CheckBox onChange={e => console.log(e)} />

    <Text style={styles.headerText}>Disabled</Text>
    <CheckBox disabled value={false} />

    <Text style={styles.headerText}>Custom Theme</Text>
    <CheckBox theme={{
      default: { background: '#F6F9FF', border: 'blue', icon: 'darkblue' },
      filled: { background: '#195CEF', border: '#195CEF', icon: 'white' },
    }}
    />

    <Text style={styles.headerText}>Custom Theme Disabled</Text>
    <CheckBox
      disabled
      theme={{
        disabled: { background: 'grey', border: '#195CEF', icon: 'darkblue' },
      }}
    />
  </Layout>
);

export default CheckBoxScreen;

const styles = StyleSheet.create({
  headerText: { fontSize: 15, fontWeight: '400' },
});
